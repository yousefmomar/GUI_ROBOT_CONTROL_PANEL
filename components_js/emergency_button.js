function emergency_protocol() {
    try {
        // Update Camera Status
        const cameraStatusButton = $("#camera-status-button");
        const cameraFeed = $("#camera-feed");
        const cameraFeedText = $("#camera-feed-text");
        const cameraFeedContainer = $("#camera-feed-container");

        if (cameraStatusButton.length === 0) throw new Error("#camera-status-button not found.");
        if (cameraFeedContainer.length === 0) throw new Error("#camera-feed-container not found.");

        cameraStatusButton.text("Go Online");

        if (cameraFeed.length > 0) {
            cameraFeed.remove();
        }

        if (cameraFeedText.length > 0) {
            cameraFeedText.remove();
        }

        cameraFeedContainer.append('<p id="camera-feed-text">Camera is Offline</p>');
        $("#camera-feed-text").css({
            color: "#2D336B",
            "font-family": "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        });

        // Update Status to Offline
        const statusElement = $(".Status");
        const statusButton = $(".status-button");

        if (statusElement.length === 0) throw new Error(".Status element not found.");
        if (statusButton.length === 0) throw new Error(".status-button element not found.");

        statusElement.text("Offline").css("color", "red");
        statusButton.text("Go Online");

        // Reset Metrics
        const metricContainers = $("#speed-container>span, #temperature-container>span, #humidity-container>span, #battery-container>span, #CPU-container>span");
        const directionContainer = $("#direction-container>span");

        if (metricContainers.length === 0) throw new Error("Metric containers not found.");
        if (directionContainer.length === 0) throw new Error("#direction-container>span not found.");

        metricContainers.text("0");
        directionContainer.text("Stopped");

        // Alert the user
        alert("Emergency Protocol Activated!!");
    } catch (error) {
        console.error("❌ Error in emergency_protocol:", error.message);
    }
}

// Attach the click event to the emergency button
try {
    const emergencyButton = $("#emergency-button");
    if (emergencyButton.length === 0) {
        throw new Error("#emergency-button not found.");
    }
    emergencyButton.on("click", emergency_protocol);
} catch (error) {
    console.error("❌ Error attaching event to #emergency-button:", error.message);
}


console.log('lol')