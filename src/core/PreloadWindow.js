const { BrowserWindow } = require("electron");

let config = {
    "width": 1368,
    "height": 684,
    "show": false,
};

class PreloadWindow {
    window = null;
    /**
     * Create a new preload window
     *
     * This function creates a new browser window with the default
     * configuration. It also listens for the "ready-to-show" event
     * and shows the window when it is emitted.
     */
    constructor() {
        this.window = new BrowserWindow(config);

        this.window.on(
            "ready-to-show", () => {
                //this.window.show();
            }
        );
    }
};

module.exports = { PreloadWindow };