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
    "padding": {
        "description": "Внутренние отступы",
        "type": "input",
        "options": {
            "${num}px ${num}px ${num}px ${num}px": "Задает внутренние отступы в пикселях (Верхний отступ, правый отступ, нижний отступ, левый отступ)",
        }
    },
    "margin": {
        "description": "Внешние отступы",
        "type": "input",
        "options": {
            "${num}px ${num}px ${num}px ${num}px": "Задает внешние отступы в пикселях (Верхний отступ, правый отступ, нижний отступ, левый отступ)",
        }
    },
    "text-align": {
        "description": "Выравнивание текста",
        "type": "select",
        "options": {
            "left": "Слева",
            "center": "По центру",
            "right": "Справа",
            "justify": "По ширине",
        },
    },
    "text-decoration": {
        "description": "Оформление текста",
        "type": "select",
        "options": {
            "none": "Без подчеркивания",
            "underline": "Подчеркивание",
            "overline": "Надчеркивание",
            "line-through": "Зачеркнутое",
        },
    },
    "text-transform": {
        "description": "Преобразование текста",
        "type": "select",
        "options": {
            "none": "Без преобразования",
            "uppercase": "В верхнем регистре",
            "lowercase": "В нижнем регистре",
        },
    },
    "font-family": {
        "description": "Шрифт",
        "type": "select",
        "options": {
            "monospace": "Моноширинный",
            "serif": "Сериф",
            "sans-serif": "Сериф без знаков",
            "cursive": "Курсив",
            "fantasy": "Фантазия",
            "system-ui": "Система",
        },
    },
    "font-size": {
        "description": "Размер шрифта",
        "type": "input",
        "options": {
            "${num}px": "Задает размер шрифта в пикселях",
        },
    },
    "font-weight": {
        "description": "Толщина шрифта",
        "type": "select",
        "options": {
            "100": "Толстая",
            "200": "Толстая",
            "300": "Толстая",
            "400": "Нормальная",
            "500": "Толстая",
            "600": "Толстая",
            "700": "Толстая",
            "800": "Толстая",
            "900": "Толстая",
            "bold": "Толстая",
        },
    },
    "font-style": {
        "description": "Стиль шрифта",
        "type": "select",
        "options": {
            "normal": "Нормальный",
            "italic": "Курсив",
        },
    },
    "font-variant": {
        "description": "Вариант шрифта",
        "type": "select",
        "options": {
            "normal": "Нормальный",
            "small-caps": "Маленькие буквы",
        },
    },
    "white-space": {
        "description": "Отступ между словами",
        "type": "select",
        "options": {
            "normal": "Нормальный",
            "nowrap": "Без переноса",
            "pre": "Предварительный",
            "pre-wrap": "Предварительный с переносом",
            "pre-line": "Предварительный с переносом",
        },
    },
    "letter-spacing": {
        "description": "Расстояние между буквами",
        "type": "input",
        "options": {
            "${num}px": "Задает расстояние между буквами в пикселях",
        },
    },
    "line-height": {
        "description": "Высота строки",
        "type": "input",
        "options": {
            "${num}px": "Задает высоту строки в пикселях",
        },
    },
    "word-spacing": {
        "description": "Расстояние между словами",
        "type": "input",
        "options": {
            "${num}px": "Задает расстояние между словами в пикселях",
        },
    },
    "border-radius": {
        "description": "Радиус скругления углов",
        "type": "input",
        "options": {
            "${num}px": "Задает радиус скругления в пикселях",
        },
    },
    "border-width": {
        "description": "Толщина границы",
        "type": "input",
        "options": {
            "${num}px": "Задает толщину границы в пикселях",
        },
    },
    "border-style": {
        "description": "Стиль границы",
        "type": "select",
        "options": {
            "none": "Без границы",
            "solid": "Прямая",
            "dashed": "Пунктирная",
            "dotted": "Пробелёная",
            "double": "Двоёхпрямая",
            "inset": "Внутренняя",
            "outset": "Внешняя",
        },
    },
    "border-color": {
        "description": "Цвет границы",
        "type": "input",
        "example": [
            "border-color: rgb(255, 255, 255);",
            "border-color: #FFFFFF;",
            "border-color: hsl(0, 0%, 100%);"
        ],
        "options": {
            "rgb(${num}, ${num}, ${num})": "Задает цвет границы в формате RGB",
            "rgba(${num}, ${num}, ${num}, ${num})": "Задает цвет границы в формате RGBA",
            "hsl(${num}, ${num}%, ${num}%)": "Задает цвет границы в формате HSL",
            "hsla(${num}, ${num}%, ${num}%, ${num})": "Задает цвет границы в формате HSLA",
            "#000000": "Задает цвет границы в формате HEX",
        },
    },
    "gap": {
        "description": "Расстояние между элементами",
        "type": "input",
        "options": {
            "${num}px": "Задает расстояние между элементами в пикселях",
        },
    },
    "justify-content": {
        "description": "Выравнивание элементов",
        "type": "select",
        "options": {
            "flex-start": "Слева",
            "center": "По центру",
            "flex-end": "Справа",
            "space-between": "По ширине",
        },
    },
    "align-items": {
        "description": "Выравнивание элементов",
        "type": "select",
        "options": {
            "flex-start": "Слева",
            "center": "По центру",
            "flex-end": "Справа",
            "space-between": "По ширине",
        },
    },
    "align-content": {
        "description": "Выравнивание элементов",
        "type": "select",
        "options": {
            "flex-start": "Слева",
            "center": "По центру",
            "flex-end": "Справа",
            "space-between": "По ширине",
        },
    },
    "flex-direction": {
        "description": "Раположение элементов",
        "type": "select",
        "options": {
            "row": "Строка",
            "row-reverse": "Строка реверс",
            "column": "Колонна",
            "column-reverse": "Колонна реверс",
        },
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