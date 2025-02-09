function updateSpeed() {
    $("#speed-container>span").text(Math.floor(Math.random() * 100));
}

function updateTemperature() {
    $("#temperature-container>span").text(Math.floor(Math.random() * 50));
}

function updateCPU() {
    $("#CPU-container>span").text(Math.floor(Math.random() * 100));
}

function updateBattery() {
    const batterySpan = $("#battery-container>span");
    if (batterySpan.length === 0) {
        console.error("Battery container not found!");
        return;
    }

    let battery = parseInt(batterySpan.text());
    if (isNaN(battery)) {
        console.warn("Battery value is not a number. Resetting to 100.");
        battery = 100;
    }

    battery--;

    batterySpan.text(battery);

    if (battery < 20) {
        batterySpan.css("color", "red");
    }
    if (battery <= 0) {
        batterySpan.css("color", "#2D336B");
        batterySpan.text(100);
    }
}

// Flag to track robot status
let isOnline = false;

function resetUI() {
    $("#speed-container>span, #temperature-container>span, #CPU-container>span, #battery-container>span").text("0");
    $("#battery-container>span").css("color", "#2D336B"); // Reset to default color
}

function checkRobotStatus() {
    const statusElement = $(".Status");
    if (statusElement.length === 0) {
        console.error(".Status element not found!");
        return;
    }

    const robot_status = statusElement.text().trim();

    if (robot_status === "Online" && !isOnline) {
        console.log("Robot is Online - Starting updates...");

        // Mark the robot as Online
        isOnline = true;

        // Start updating data
        window.speedInterval = setInterval(updateSpeed, 1000);
        window.tempInterval = setInterval(updateTemperature, 500);
        window.cpuInterval = setInterval(updateCPU, 300);
        window.batteryInterval = setInterval(updateBattery, 1000);
    } else if (robot_status === "Offline" && isOnline) {
        console.log("Robot is Offline - Stopping updates...");

        // Mark the robot as Offline
        isOnline = false;

        // Stop all intervals
        clearInterval(window.speedInterval);
        clearInterval(window.tempInterval);
        clearInterval(window.cpuInterval);
        clearInterval(window.batteryInterval);

        // Reset UI values
        resetUI();
    }
}

// 🔄 Monitor Robot Status Every 500ms
setInterval(checkRobotStatus, 500);
