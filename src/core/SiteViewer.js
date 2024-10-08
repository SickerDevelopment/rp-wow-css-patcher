const { BrowserWindow, ipcMain, app } = require("electron");
const path = require("node:path");
const fs = require("node:fs");

class SiteViewer
{
    constructor()
    {
        this.window = new BrowserWindow(
            {
                width: 1366,
                minWidth: 1366,
                height: 720,
                minHeight: 720,
                show: false,
                frame: false,
                titleBarStyle: "hidden",
                webPreferences: {
                    webviewTag: true,
                    preload: path.join(__dirname, "/../preload/viewer.js"),
                }
            }
        );
        this.initEvents();
        
    }
    initEvents = () => {
        this.window.on(
            "page-title-updated", (event, title, explicit) => {}
        );
        this.window.on(
            "closed", (event) => {}
        );
        this.window.on(
            "close", (event) => {}
        );
        this.window.on(
            "session-end", (event) => {}
        );
        this.window.on(
            "unresponsive", (event) => {}
        );
        this.window.on(
            "responsive", (event) => {}
        );
        this.window.on(
            "blur", (event) => {}
        );
        this.window.on(
            "focus", (event) => {}
        );
        this.window.on(
            "show", (event) => {}
        );
        this.window.on(
            "hide", (event) => {}
        );
        this.window.on(
            "ready-to-show", (event) => {
                this.window.show();
            }
        );
        this.window.on(
            "maximize", (event) => {}
        );
        this.window.on(
            "unmaximize", (event) => {}
        );
        this.window.on(
            "minimize", (event) => {}
        );
        this.window.on(
            "restore", (event) => {}
        );
        this.window.on(
            "will-resize", (event, newBounds, details) => {}
        );
        this.window.on(
            "resize", (event) => {}
        );
        this.window.on(
            "resized", (event) => {}
        );
        this.window.on(
            "will-move", (event, newBounds) => {}
        );
        this.window.on(
            "move", (event) => {}
        );
        this.window.on(
            "moved", (event) => {}
        );
        this.window.on(
            "enter-full-screen", (event) => {}
        );
        this.window.on(
            "leave-full-screen", (event) => {}
        );
        this.window.on(
            "enter-html-full-screen", (event) => {}
        );
        this.window.on(
            "leave-html-full-screen", (event) => {}
        );
        this.window.on(
            "always-on-top-changed", (event, isAlwaysOnTop) => {}
        );
        this.window.on(
            "app-command", (event, command) => {
                console.log(`Triggered command: ${command}`);
            }
        );
        this.window.on(
            "system-context-menu", (event, coords) => {}
        );
        ipcMain.on(
            "app-viewer-close", () => {
                app.quit(0);
            }
        );
        ipcMain.on(
            "app-viewer-minimize", () => {
                this.window.minimize();
            }
        );
        ipcMain.on(
            "app-viewer-toggle", () => {
                if(this.window.isMaximized()) {
                    this.window.unmaximize();
                } else {
                    this.window.maximize();
                }
            }
        );
        this.window.loadFile(__dirname + "/../windows/siteViewer.html");
    }
    static init = async () => {
        
        return new SiteViewer();
    }
}

module.exports = { SiteViewer };