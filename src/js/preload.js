window.ipcRenderer.receive(
    "app-update-downloaded", () => {
        
    }
);
window.ipcRenderer.receive(
    "app-update-download-available", () => {
        
    }
);
window.ipcRenderer.receive(
    "app-update-download-not-available", () => {
        
    }
);
window.ipcRenderer.receive(
    "app-update-download-progress", (value) => {
        
    }
);
window.ipcRenderer.receive(
    "app-update-install", () => {
        
    }
);
window.ipcRenderer.receive(
    "app-debug-mode", () => {
        alert("Debug mode enabled!");
        $(".description.updating > div.info > span.blink").remove();
        $(".description.updating > div.info").html(`<span class="blink">Программа в режиме отладки...</span>`);
    }
);