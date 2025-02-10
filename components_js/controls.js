$(document).ready(function () {
    function updateDirection(direction) {
        try {
            const directionContainerSpan = $("#direction-container>span");
            const directionText = $("#direction");
    
            if (directionContainerSpan.length === 0 || directionText.length === 0) {
                throw new Error("Direction container or text element is missing.");
            }
    
            directionContainerSpan.text(direction);
            directionText.text(direction);
            console.log(direction)
        } catch (error) {
            console.error("❌ Error in updateDirection:", error.message);
        }
    }
        let isMouseDown = false;

    function handleMouseDown(direction) {
        try {
            isMouseDown = true;
            holdAction(direction);
        } catch (error) {
            console.error("❌ Error in handleMouseDown:", error.message);
        }
    }

    function handleMouseUp() {
        try {
            isMouseDown = false;

            const directionText = $("#direction");
            const directionContainerSpan = $("#direction-container>span");

            if (directionText.length === 0 || directionContainerSpan.length === 0) {
                throw new Error("Direction container or text element is missing.");
            }

            directionText.text("");
            directionContainerSpan.text("Stopped");
        } catch (error) {
            console.error("❌ Error in handleMouseUp:", error.message);
        }
    }

    function holdAction(direction) {
        try {
            if (isMouseDown) {
                updateDirection(direction);
            }
        } catch (error) {
            console.error("❌ Error in holdAction:", error.message);
        }
    }

    // Button event listeners
    try {
        const forwardButton = $("#forward-button");
        const backwardButton = $("#backward-button");
        const rightButton = $("#right-button");
        const leftButton = $("#left-button");

        if (
            forwardButton.length === 0 ||
            backwardButton.length === 0 ||
            rightButton.length === 0 ||
            leftButton.length === 0
        ) {
            throw new Error("One or more direction buttons are missing.");
        }

        forwardButton.mousedown(() => handleMouseDown("forward"));
        backwardButton.mousedown(() => handleMouseDown("backward"));
        rightButton.mousedown(() => handleMouseDown("right"));
        leftButton.mousedown(() => handleMouseDown("left"));
    } catch (error) {
        console.error("❌ Error setting up button event listeners:", error.message);
    }

    // Mouseup event listener
    try {
        $(document).mouseup(handleMouseUp);
    } catch (error) {
        console.error("❌ Error setting up mouseup event listener:", error.message);
    }
});
