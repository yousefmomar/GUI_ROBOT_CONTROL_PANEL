function toggleCam() {
    try {
        const cameraStatusButton = $("#camera-status-button");
        const cameraFeedContainer = $("#camera-feed-container");

        if (cameraStatusButton.length === 0) {
            throw new Error("#camera-status-button not found.");
        }

        if (cameraFeedContainer.length === 0) {
            throw new Error("#camera-feed-container not found.");
        }

        let cameraStatus = cameraStatusButton.text();

        if (cameraStatus === "Go Offline") {
            // Set camera offline
            cameraStatusButton.text("Go Online");
            $("#camera-feed").remove();
            cameraFeedContainer.append('<p id="camera-feed-text">Camera is Offline</p>');
            $("#camera-feed-text").css({
                color: "#2D336B",
                "font-family": "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            });
        } else if (cameraStatus === "Go Online") {
            // Set camera online
            cameraStatusButton.text("Go Offline");
            $("#camera-feed-text").remove();
            cameraFeedContainer.append(
                '<img id="camera-feed" src="../colorful-coral-reef.jpg" alt="camera feed">'
            );
        }
    } catch (error) {
        console.error("❌ Error in toggleCam:", error.message);
    }
}

function takeScreenshot() {
    try {
        const imgElement = document.getElementById("camera-feed");

        if (!imgElement) {
            alert("No image to capture!");
            return;
        }

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Set canvas size to match the image
        canvas.width = imgElement.naturalWidth;
        canvas.height = imgElement.naturalHeight;

        const img = new Image();
        img.crossOrigin = "anonymous"; // Avoid CORS issues if needed
        img.src = imgElement.src;

        img.onload = function () {
            ctx.drawImage(img, 0, 0);

            // Convert canvas to a downloadable image
            const imageURL = canvas.toDataURL("image/png");

            // Create a download link
            const link = document.createElement("a");
            link.href = imageURL;
            link.download = "screenshot.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

        img.onerror = function () {
            alert("Failed to load the image for the screenshot.");
        };
    } catch (error) {
        console.error("❌ Error in takeScreenshot:", error.message);
    }
}

// Attach events
try {
    const cameraStatusButton = $("#camera-status-button");
    const screenshotButton = $("#screenshot-button");

    if (cameraStatusButton.length === 0) {
        throw new Error("#camera-status-button not found.");
    }
    if (screenshotButton.length === 0) {
        throw new Error("#screenshot-button not found.");
    }

    cameraStatusButton.on("click", toggleCam);
    screenshotButton.on("click", takeScreenshot);
} catch (error) {
    console.error("❌ Error attaching events:", error.message);
}
