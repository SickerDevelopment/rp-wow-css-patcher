let prefix = `
/* *************************************** *\\

    Created with Darkmoon CSS Helper
    (C) 2024 Sicker & Darkmoon

\\* *************************************** */
`;
window.ipcRenderer.receive(
    "app-export-code", (value) => {
        $(".css-style").val(`<style>${prefix}\n${value}\n</style>`);
    }
);
$(".window-hide").on(
    "click", () => {
        window.ipcRenderer.send("window-hide");
    }
);
$(".window-minimize").on(
    "click", () => {
        window.ipcRenderer.send("window-minimize");
    }
);
feather.replace();