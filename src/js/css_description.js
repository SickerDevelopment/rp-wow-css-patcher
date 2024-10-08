let css_description = {
    "display": {
        "description": "Как отображать элемент отображения",
        "type": "select",
        "options": {
            "none": "Не отображать",
            "block": "Отображение блока как блок (да-да)",
            "inline": "Отображение блока как строчный элемент",
            "inline-block": "Отображение блок(ков) как строчный элемент",
            "flex": "Отображение блока как flex-box",
            "grid": "Отображение блока как grid-сетку",
        },
    },
    "background-image": {
        "description": "Фоновое изображение",
        "type": "input",
        "options": {
            "none": "Никакое изображение",
            "url(ссылка на изображение)": "Изображение из URL",
        },
    },
    "background-repeat": {
        "description": "Повторение фона",
        "type": "select",
        "options": {
            "repeat": "Повторять",
            "repeat-x": "Повторять по горизонтали",
            "repeat-y": "Повторять по вертикали",
            "no-repeat": "Не повторять",
        },
    },
    "background-size": {
        "description": "Размер фона",
        "type": "select",
        "options": {
            "auto": "Авто",
            "cover": "Заполнить",
            "contain": "Сохранить пропорции",
        },
    },
    "background-attachment": {
        "description": "Зафиксировать фон",
        "type": "select",
        "options": {
            "scroll": "Не зафиксировать",
            "fixed": "Зафиксировать",
        },
    },
    "background-position": {
        "description": "Позиция фона",
        "type": "input",
        "options": {
            "top": "Сверху",
            "right": "Справа",
            "bottom": "Снизу",
            "left": "Слева",
            "center": "По центру",
        },
    },
    "background-clip": {
        "description": "Обрезать фон",
        "type": "select",
        "options": {
            "border-box": "Не обрезать",
            "padding-box": "Обрезать",
        },
    },
    "background-color": {
        "description": "Цвет фона",
        "type": "input",
        "options": {
            "#FFFFFF(FF)": "Белый текст, значение в скобках - альфа-канал, или прозрачность",
            "rgb(255, 255, 255)": "Чисто белый фон",
            "rgba(255, 255, 255, 0)": "Цвет, с учетом 'прозрачности' цвета (четвертая цифра, от 0.000 до 1.000)",
            "transparent": "Прозрачный фон",
        }
    },
    "color": {
        "description": "Цвет текста",
        "type": "input",
        "options": {
            "#FFFFFF(FF)": "Белый фон, значение в скобках - альфа-канал, или прозрачность",
            "rgb(255, 255, 255)": "Чисто белый текст",
            "rgba(255, 255, 255, 0)": "Цвет, с учетом 'прозрачности' цвета (четвертая цифра, от 0.000 до 1.000)",
        }
    },
    "width": {
        "description": "Ширина",
        "type": "input",
        "options": {
            "auto": "Авто",
            "${num}px": "Задает ширину в пикселях",
            "${num}% от родительского блока": "Задает размер в процентах от родительского блока",
        }
    },
    "height": {
        "description": "Высота",
        "type": "input",
        "options": {
            "auto": "Авто",
            "${num}%": "Задает размер в процентах от родительского блока (доступно при использовании position: absolute, fixed;)",
            "${num}px": "Задает высоту в пикселях",
        }
    },
    "position": {
        "description": "Позиция",
        "type": "select",
        "options": {
            "static": "Статичная",
            "relative": "Относительная",
            "absolute": "Абсолютная",
            "fixed": "Фиксированная",
        },
    },
    "top": {
        "description": "Отступ сверху",
        "type": "input",
        "options": {
            "auto": "Авто",
            "${num}px": "Задает отступ в пикселях",
            "${num}% от родительского блока": "Задает отступ в процентах от родительского блока",
        }
    },
    "left": {
        "description": "Отступ слева",
        "type": "input",
        "options": {
            "auto": "Авто",
            "${num}px": "Задает отступ в пикселях",
            "${num}% от родительского блока": "Задает отступ в процентах от родительского блока",
        }
    },
    "bottom": {
        "description": "Отступ снизу",
        "type": "input",
        "options": {
            "auto": "Авто",
            "${num}px": "Задает отступ в пикселях",
            "${num}% от родительского блока": "Задает отступ в процентах от родительского блока",
        }
    },
    "right": {
        "description": "Отступ справа",
        "type": "input",
        "options": {
            "auto": "Авто",
            "${num}px": "Задает отступ в пикселях",
            "${num}% от родительского блока": "Задает отступ в процентах от родительского блока",
        }
    },
};
function buildSelect(optionName)
{
    if(css_description[optionName].options != undefined)
    {
        let buffer = `<div class="item"><span>${optionName}:</span><select>`;
        buffer += `<option disabled selected>Выберите</option>`;
        for (var [key, value] of Object.entries(css_description[optionName].options))
        {
            buffer += `<option value="${key}">${value}</option>`;
        }
        buffer += "</select></div>";
        return buffer;
    }
    return ``;
}