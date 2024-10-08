let css_items = {
    "header.container": {
        "name": "Шапка",
        "css_class": "header-container",
        "description": "Общий верхний блок сайта",
        "css_options": [
            "display", "background-color", "width", "height"
        ],
    },
    "header.container > header.row": {
        "name": "Внутренний блок шапки",
        "css_class": "header-container-div-col-sm",
        "description": "Внутренний блок шапки, что содержиться внутри шапки",
    },
    "header.container > header.row > div.col-sm": {
        "name": "Внутренние блоки шапки",
        "css_class": "header-container-header-row-div-col-sm",
        "description": "Два внутренних блока, что содержаться во внутреннем блоке шапки",
    },
    "header.container > header.row > div.col-sm a.navbar-brand": {
        "name": "Логотип",
        "css_class": "header-container-header-row-div-col-sm-a-navbar-brand",
        "description": "При необходимости Вы можете изменить стандартный логотип",
        "css_options": [
            "background-image",
            "background-repeat",
            "background-size",
            "background-position",
            "background-color",
            "width",
            "height",
            "display",
        ]
    },
};
$(window).on(
    "load", () => {
        for (let [selector, data] of Object.entries(css_items)) {
            $("div.content").append(
                `
                <div class="section ${data.css_class}" css-selector="${selector}">
                    <span class="section-name">${data.name}</span>
                    <p class="section-description">${data.description}</p>
                </div>
                `
            );
            if(data.css_options != undefined)
            {
                data.css_options.map(
                    (option) => {
                        $(`.` + data.css_class).append(`<div class="css-item ${option}"></div>`);
                        $(`div.${data.css_class} > .` + option).append(`<h3>${option}</h3>`);
                        $(`div.${data.css_class} > .` + option).append(`<p>${css_description[option].description}</p>`);
                        $(`div.${data.css_class} > .` + option).append("<p>Возможные значения:</p>");
                        for (var [key, value] of Object.entries(css_description[option].options))
                        {
                            $(`div.${data.css_class} > .` + option).append(`<div><span>${option}: ${key}; - ${value}</span></div>`);
                        }
                        $(`div.${data.css_class} > .` + option).append("<br>");
                        if(css_description[option].type == "select")
                        {
                            $(`div.${data.css_class} > .` + option).append(buildSelect(option));
                        }
                        if(css_description[option].type == "input")
                        {
                            $(`div.${data.css_class} > .` + option).append(`
                                    <div class="item"><span>${option}:</span><input></div>
                            `);
                        }
                       
                        //return;
                    }
                );
            }
        }
    }
);
$(".export-code").on(
    "click", () => {
        let css_buffer = "";
        $("div.section").map(
            (index, element) => {
                //console.log(index, element);
                let css_selector = $(element).attr("css-selector");
                let header_replace = false;
                let css = $(element).find("div.css-item > div.item").map(
                    (index, elm) => {
                        let data = $(elm).find("span").text();
                        let value = null;
                        let arrayName = data.substring(0, data.indexOf(":"));
                        if(css_description[arrayName].type == "select")
                        {
                            value = $(elm).find("select").val();
                        }
                        if(css_description[arrayName].type == "input")
                        {
                            value = $(elm).find("input").val();
                        }
                        if(css_selector == "header.container > header.row > div.col-sm a-navbar-brand" && data == "background-image:" && value != null)
                        {
                            css_buffer += `/* Убираем старый логотип. *\\\nheader.container > header.row > div.col-sm a.navbar-brand img { display: none !important; }\n`;
                        }
                        if(value == null || value == "" || value == undefined)
                        {}
                        else
                            return `${data} ${value} !important;`;
                    }
                ).get().join("\n");
                css_buffer += `${css_selector} {\n${css}\n}\n\n`;
                if(header_replace)
                {
                    
                }
                window.ipcRenderer.send("app-export-code", css_buffer);
            }
        );
    }
);
$(".apply-code").on(
    "click", () => {
        let css_buffer = "";
        $("div.section").map(
            (index, element) => {
                //console.log(index, element);
                let css_selector = $(element).attr("css-selector");
                let header_replace = false;
                let css = $(element).find("div.css-item > div.item").map(
                    (index, elm) => {
                        let data = $(elm).find("span").text();
                        let value = null;
                        let arrayName = data.substring(0, data.indexOf(":"));
                        if(css_description[arrayName].type == "select")
                        {
                            value = $(elm).find("select").val();
                        }
                        if(css_description[arrayName].type == "input")
                        {
                            value = $(elm).find("input").val();
                        }
                        if(css_selector == "header.container > header.row > div.col-sm a.navbar-brand" && data == "background-image:" && value != null)
                        {
                            css_buffer += `/* Убираем старый логотип. *\\\nheader.container > header.row > div.col-sm a.navbar-brand img { display: none !important; }\n`;
                        }
                        if(value == null || value == "" || value == undefined)
                        {}
                        else
                            return `${data} ${value} !important;`;
                    }
                ).get().join("\n");
                css_buffer += `${css_selector} {\n${css}\n}\n\n`;
                window.ipcRenderer.send("app-apply-profile-css", css_buffer);
            }
        );
    }
);
$(".window-close").on(
    "click", () => {
        window.ipcRenderer.send("window-request-close", "profile");
        window.ipcRenderer.send("window-close");
    }
);
$(".window-minimize").on(
    "click", () => {
        window.ipcRenderer.send("window-minimize");
    }
);
feather.replace();