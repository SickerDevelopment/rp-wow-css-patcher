// Import the necessary Electron modules
const contextBridge = require("electron").contextBridge;
const ipcRenderer = require("electron").ipcRenderer;
console.log("[Common.js]: loaded!");
// White-listed channels
const ipc = {
    "channels": {
        // From render to main
        "send": [
            // Application Singals
            "app-close",
            "app-export-code",
            "app-init-profile",
            "app-apply-profile-css",
            "app-update-downloaded",
            "app-update-download-available",
            "app-update-download-not-available",
            // Window SignaLS
            "window-close",
            "window-request-close",
            "window-hide",
            "window-minimize",
        ],
        // From main to render
        "receive": [
            "app-export-code",
            "app-debug-mode",
            "app-test-mode"
        ],
        // From main to render (once)
        "receiveOnce": [],
        // From render to main and back again
        "sendReceive": []
    }
};

// Exposed protected methods in the render process
contextBridge.exposeInMainWorld(
    // Allowed "ipcRenderer" methods
    "ipcRenderer", {
        // From render to main
        send: (channel, args) => {
            if (ipc.channels.send.includes(channel)) {
                ipcRenderer.send(channel, args);
            }
        },
        // From main to render
        receive: (channel, listener) => {
            if (ipc.channels.receive.includes(channel)) {
                // Deliberately strip event as it includes `sender`.
                ipcRenderer.on(channel, (event, ...args) => listener(...args));
            }
        },
        // From main to render (once)
        receiveOnce: (channel, listener) => {
            if (ipc.channels.receiveOnce.includes(channel)) {
                // Deliberately strip event as it includes `sender`.
                ipcRenderer.once(channel, (event, ...args) => listener(...args));
            }
        },
        // From render to main and back again
        invoke: (channel, args) => {
            if (ipc.channels.sendReceive.includes(channel)) {
                return ipcRenderer.invoke(channel, args);
            }
        }
    }
);