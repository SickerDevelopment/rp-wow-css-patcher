$(".app-close").on(
    "click", () => {
        window.ipcRenderer.send("app-close");
    }
);
$(".window-minimize").on(
    "click", () => {
        window.ipcRenderer.send("window-minimize");
    }
);
$(".app-init-profile").on(
    "click", () => {
        window.ipcRenderer.send("app-init-profile");
    }
);
feather.replace();