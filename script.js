import { load_component } from "./loader.js";
import { load_css } from "./loader.js";

// Function to load CSS with error handling
async function safeLoadCSS(filePath) {
    try {
        await load_css(filePath);
        console.log(`✅ CSS Loaded: ${filePath}`);
    } catch (error) {
        console.error(`❌ Failed to load CSS: ${filePath}`, error);
    }
}

// Function to load HTML component with error handling
async function safeLoadComponent(filePath, containerSelector) {
    try {
        await load_component(filePath, containerSelector);
        console.log(`✅ HTML Component Loaded: ${filePath} into ${containerSelector}`);
    } catch (error) {
        console.error(`❌ Failed to load HTML Component: ${filePath}`, error);
    }
}

// Load CSS and components with error handling
(async function () {
    await safeLoadCSS("components_css/status.css");
    await safeLoadComponent("components_html/status.html", "#status-container");

    await safeLoadCSS("components_css/data.css");
    await safeLoadComponent("components_html/data.html", "#data-container");

    await safeLoadCSS("components_css/controls.css");
    await safeLoadComponent("components_html/controls.html", "#control-container");

    await safeLoadCSS("components_css/camera.css");
    await safeLoadComponent("components_html/camera.html", "#camera-container");

    await safeLoadCSS("components_css/emergency_button.css");
    await safeLoadComponent("components_html/emergency_button.html", "#emergency-button-container");
})();
