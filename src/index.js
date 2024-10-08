// -------------------------------------------------
//
//  Darkmoon CSS Patcher
//  (C) 2024 Sicker & Darkmoon.
//
// -------------------------------------------------

// NodeJS Requires
const path = require("node:path");
const fs = require("node:fs");
// Electron
const { app, BrowserWindow, BaseWindow, WebContentsView, ipcMain, ipcRenderer, contextBridge, session } = require("electron");
const { autoUpdater } = require("electron-updater");

const config = require("./config.json");

autoUpdater.autoDownload = false;
autoUpdater.autoInstallOnAppQuit = true;

const main = app;
let profile_inited = false;
let profile_css_current = null;

let pools = {
    // Main Pools
    preload: null,
    main: null,
    settings: null,
    export: null,
    help: null,
    // CSS Pools
    profile: null,
    quenta: null,
    charsheet: null,
    guild: null,
    center: null,
    report: null,
};

main.on(
    "will-finish-launching", () => {
    }
);
main.whenReady().then( () => {
        for(var windowName in config.windows)
        {
            config.windows[windowName].webPreferences.preload = path.join(__dirname, `./preload/common.js`);
        }
        pools.preload = new BrowserWindow(config.windows.preload);
        pools.preload.loadFile(path.join(__dirname, "./windows/preload.html"));
        pools.preload.on(
            "ready-to-show", () => {
                pools.preload.show();
                autoUpdater.on(
                    "update-downloaded", () => {
                        console.log("Downloaded!");
                        pools.preload.send("app-update-downloaded");
                    }
                );
                autoUpdater.on(
                    "update-available", () => {
                        console.log("Available!");
                        pools.preload.send("app-update-download-available");
                        autoUpdater.downloadUpdate();
                    }
                );
                autoUpdater.on(
                    "update-not-available", () => {
                        
                        pools.preload.send("app-update-download-not-available");
                        pools.preload.close();
                        pools.main.show();
                    }
                );
                autoUpdater.on(
                    "download-progress", (progress) => {
                        pools.preload.send("app-update-download-progress", progress);
                    }
                );
                autoUpdater.on(
                    "error", (text) => {
                        console.log("Error:" + text);
                    }
                );
                if(app.isPackaged == false)
                {
                    //pools.preload.hide();
                    pools.preload.send("app-debug-mode");
                    pools.main = new BrowserWindow(config.windows.main);
                    pools.main.loadFile(path.join(__dirname, "./windows/main.html"));
                    pools.main.on( "ready-to-show", () => pools.main.show() );
                    pools.main.on(
                        "close", () => { app.exit(0); }
                    )
                }
                else
                {
                    autoUpdater.checkForUpdates();
                }
            }
        );
        pools.preload.on(
            "close", (event) => {
                event.preventDefault();
            }
        );
        pools.export = new BrowserWindow(config.windows.export);
        pools.export.loadFile(path.join(__dirname, "./windows/export.html"));
    }
);
main.on(
    "will-quit", () => {
        console.log("Quitting...");
    }
);
main.on(
    "window-all-closed", () => {
        app.exit(0);
    }
);
ipcMain.on(
    "window-minimize", (event) => {
        BrowserWindow.getAllWindows().find( (window) => { if(window.id == event.sender.id) { window.minimize(); } } );
    }
);
ipcMain.on(
    "window-hide", (event) => {
        BrowserWindow.getAllWindows().find( (window) => { if(window.id == event.sender.id) { window.hide(); } } );
    }
);
ipcMain.on(
    "window-close", (event) => {
        BrowserWindow.getAllWindows().find( (window) => { if(window.id == event.sender.id) { window.destroy(); } } );
    }
);
ipcMain.on(
    "window-request-close", (event, name) => {
        pools[name].destroy();
    }
)
ipcMain.on(
    "app-export-code", (event, value) => {
        pools.export.send("app-export-code", value);
        pools.export.show();
    }
);
ipcMain.on(
    "app-close", (event) => {
        app.exit(0);
    }
);
ipcMain.on(
    "app-init-profile", (event) => {
        if(profile_inited == true)
        {
            pools.profile.show();
            pools.profile_editor.show();
        }
        else
        {
            pools.profile = new BrowserWindow(config.windows.profile);
            pools.profile.loadURL("https://rp-wow.ru/users/1");
            pools.profile.on("ready-to-show", () => pools.profile.show());
            
            pools.profile_editor = new BrowserWindow(config.windows.profile_editor);
            pools.profile_editor.loadFile(path.join(__dirname, "./windows/profile_editor.html"));
            pools.profile_editor.on("ready-to-show", () => pools.profile_editor.show());

            pools.profile.on(
                "closed", () => {
                    console.log("Pr Editor closing...");
                    profile_inited = false;
                    pools.profile_editor.destroy();
                    pools.profile.destroy();
                    
                }
            );
            pools.profile_editor.on(
                "closed", () => {
                    console.log("Pr Editor closing...");
                    profile_inited = false;
                    pools.profile_editor.destroy();
                    pools.profile.destroy();
                    
                }
            );
            profile_inited = true;
        }
    }
);
ipcMain.on(
    "app-apply-profile-css", async (event, code) => {
        if(profile_inited == true)
        {
            console.log(code);
            if(profile_css_current != null)
            {
                pools.profile.webContents.removeInsertedCSS(profile_css_current);
            }
            if(code)
            {
                profile_css_current = await pools.profile.webContents.insertCSS(code);
            }
            else
            {
                profile_css_current = null;
            }
        }
    }
)
/*

let css_profile = false;
let css_profile_code = null;

let windows = {};

let impl = {};
let css_free_pc_code = null;
let css_free_mobile_code = null;
let SiteViewerPool = null;
const appInit = () => {
    windows = {
        preload: new BrowserWindow(
            {
                width: 1368,
                height: 684,
                show: false,
                frame: false,
                titleBarStyle: "hidden",
                resizable: false,
                webPreferences:
                {
                    nodeIntegration: true,
                    preload: path.join(__dirname, "./src/preload/preload.js"),
                }
            }
        ),
        main: new BrowserWindow(
            {
                width: 1360,
                height: 720,
                show: false,
                frame: false,
                titleBarStyle: "hidden",
                resizable: false,
                webPreferences:
                {
                    preload: path.join(__dirname, "./src/preload/main.js"),
                }
            }
        ),
        export: new BrowserWindow(
            {
                width: 1360,
                height: 720,
                show: false,
                frame: false,
                titleBarStyle: "hidden",
                resizable: false,
                webPreferences:
                {
                    nodeIntegration: true,
                    preload: path.join(__dirname, "./src/preload/export.js"),
                }
            }
        ),
        help: new BrowserWindow(
            {
                width: 1360,
                height: 720,
                show: false,
                frame: false,
                titleBarStyle: "hidden",
                webPreferences:
                {
                    preload: path.join(__dirname, "./src/preload/help.js"),
                }
            }
        ),
    };
    
    windows.preload.loadFile(path.join(__dirname, "./src/windows/preload.html"));
    windows.main.loadFile(path.join(__dirname, "./src/windows/main.html"));
    windows.export.loadFile(path.join(__dirname, "./src/windows/export.html"));
    windows.help.loadFile(path.join(__dirname, "./src/windows/help.html"));
    // Events
    
    // Show
}
ipcMain.on(
    "app-update-install", () => {
        console.log("Updating...");
        autoUpdater.quitAndInstall();
    }
);
// Close
ipcMain.on(
    "ce-app-close", async (event) => {
        app.exit(0);
    }
);

ipcMain.on(
    "app-window-help-show", async (event) => {
        windows.help.show();
    }
);
ipcMain.on(
    "app-window-help-hide", async (event) => {
        windows.help.hide();
    }
);
ipcMain.on(
    "app-prepare-profile", () => {
        windows.profileCSS = new BrowserWindow(
            {
                width: 1366,
                height: 720,
                show: false,
                frame: false,
                titleBarStyle: "hidden",
                resizable: false,
                webPreferences:
                {
                    preload: path.join(__dirname, "./src/preload/profile.js"),
                }
            }
        );
        windows.profile = new BrowserWindow(
            {
                width: 1366,
                height: 720,
                show: false,
                webPreferences:
                {
                    preload: path.join(__dirname, "./src/preload/profile.js"),
                }
            }
        );
        windows.profileCSS.loadFile(path.join(__dirname, "./src/windows/profileCSS.html"));
        windows.profileCSS.on(
            "ready-to-show", () => {
                windows.profileCSS.show();
            }
        );
        
        
        windows.profile.loadURL(
            "https://rp-wow.ru/users/3231", {
                userAgent: "chrome",
            }
        );
        windows.profile.on(
            "ready-to-show", () => {
                windows.profile.show();
            }
        );
        ipcMain.on(
            "css-profile-header-value", async (event, value) => {
                console.log("Inserting...", value);
                if(css_profile_code != null)
                {
                    windows.profile.webContents.removeInsertedCSS(css_profile_code);
                }
                if(value)
                {
                    css_profile_code = await windows.profile.webContents.insertCSS(value);
                }
                else
                {
                    css_profile_code = null;
                }
            }
        );
    }
);
ipcMain.on(
    "app-window-profile-destroy", (event) => {
        windows.profile.close();
        windows.profileCSS.close();
    }
);
ipcMain.on(
    "app-prepare-free", () => {
        windows.free = new BrowserWindow(
            {
                width: 1366,
                height: 720,
                show: false,
                frame: false,
                titleBarStyle: "hidden",
                resizable: false,
                webPreferences:
                {
                    nodeIntegration: true,
                    preload: path.join(__dirname, "./src/preload/free.js"),
                }
            }
        );
        windows.freePC = new BrowserWindow(
            {
                width: 1366,
                height: 720,
                show: false,
            }
        );
        windows.free.on("ready-to-show", () => { windows.free.show(); } );
        windows.free.loadFile(path.join(__dirname, "./src/windows/free.html"));

        //windows.freeMobile.on("ready-to-show", () => { windows.freeMobile.show(); } );
        windows.freePC.on("ready-to-show", () => { windows.freePC.show(); } );
        windows.freePC.webContents.on(
            "page-title-updated", (childWindow) => {
               windows.freePC.setTitle("Computer View");
            }
        );

        windows.freePC.loadURL("https://rp-wow.ru/");
        windows.freePC.setTitle("Computer View");

        ipcMain.on(
            "css-free-value", async (event, value) => {
                if(css_free_pc_code != null)
                {
                    windows.freePC.webContents.removeInsertedCSS(css_free_pc_code);
                    
                }
                if(value)
                {
                    css_free_pc_code = await windows.freePC.webContents.insertCSS(value);
                }
                else
                {
                    css_free_pc_code = null;
                }
            }
        );
    }
);
ipcMain.on(
    "app-window-site", async () => {
        SiteViewerPool = await SiteViewer.init();
        Object.values(windows).forEach(window => window.destroy());
        
    }
);
ipcMain.on(
    "app-window-free-destroy", (event) => {
        windows.free.destroy();
        windows.freePC.destroy();
    }
);
ipcMain.on(
    "app-css-export-window-hide", () => {
        windows.export.hide();
    }
);
ipcMain.on(
    "app-css-export", (event, value) => {
        windows.export.send("css-value", value);
        windows.export.show();
    }
);
app.on("window-all-closed", () => app.quit(0));
app.whenReady().then( () => { appInit(); } );*/