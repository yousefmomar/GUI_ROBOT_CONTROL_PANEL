function toggle_status() {
    try {
        const statusElement = $(".Status");
        const statusButton = $(".status-button");

        if (statusElement.length === 0) {
            throw new Error(".Status element not found.");
        }

        if (statusButton.length === 0) {
            throw new Error(".status-button element not found.");
        }

        const currentStatus = statusElement.text();

        if (currentStatus === "Offline") {
            // Update to Online
            statusElement.text("Online").css("color", "green");
            statusButton.text("Go Offline");
        } else if (currentStatus === "Online") {
            // Update to Offline
            statusElement.text("Offline").css("color", "red");
            statusButton.text("Go Online");
        } else {
            console.warn("Unexpected status value:", currentStatus);
        }
    } catch (error) {
        console.error("❌ Error in toggle_status:", error.message);
    }
}

$(document).ready(function () {
    try {
        const statusButton = $(".status-button");

        if (statusButton.length === 0) {
            throw new Error(".status-button element not found.");
        }

        statusButton.on("click", toggle_status);
    } catch (error) {
        console.error("❌ Error attaching event listener:", error.message);
    }
});
