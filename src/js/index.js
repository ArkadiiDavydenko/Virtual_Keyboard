// Создание основной разметки
class Element {
    constructor(parent, tag, setClassName = '') {
        const elem = document.createElement(tag);
        if (setClassName !== '') elem.className = setClassName;
        parent.append(elem);
        this.node = elem;
    }
}

const KEY_ENG = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['Caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl']
];

const KEY_RUS = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', , 'х', 'ъ', '\\',],
    ['Caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',],
    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift',],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl']
];

const KEY_CODE_TABLE = [
    'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
    'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash',
    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
    'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
    'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'
];

function init() {

    const WRAPPER = new Element(document.body, 'div', 'wrapper');
    const HEADER = new Element(WRAPPER.node, 'header', 'header');
    const TITLE = new Element(HEADER.node, 'h1', 'title');
    TITLE.node.textContent = 'Виртуальная клавиатура';

    const MAIN = new Element(WRAPPER.node, 'main', 'main');
    MAIN.node.innerHTML = `<textarea class = "textarea" rows="5" cols="50" disabled></textarea>`
    const TEXTAREA = document.querySelector('.textarea');

    const KEYBOARD = new Element(MAIN.node, 'div', 'keyboard');

    const DESCRIPTION = new Element(MAIN.node, 'p', 'description');
    DESCRIPTION.node.textContent = 'Клавиатура создана для операционной системе Windows';
    const LANGUAGE = new Element(MAIN.node, 'p', 'language');
    LANGUAGE.node.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';

    KEY_ENG.forEach(keyArr => {
        let keyLine = new Element(KEYBOARD.node, 'div', 'keyboard__line');
        keyArr.forEach(key => {
            let keyButton = new Element(keyLine.node, 'button', 'keyboard__key');
            keyButton.node.textContent = `${key}`;

            switch (key) {
                case 'Backspace':
                    keyButton.node.classList.add('keyboard__key_very-long')
                    break

                case 'Tab':
                    keyButton.node.classList.add('keyboard__key_long')
                    break

                case 'Shift':
                    keyButton.node.classList.add('keyboard__key_long')
                    break

                case 'Enter':
                    keyButton.node.classList.add('keyboard__key_long')
                    break

                case 'Caps lock':
                    keyButton.node.classList.add('keyboard__key_long')
                    break

                case 'Space':
                    keyButton.node.classList.add('keyboard__key_extra-long')
                    break
            }
        })
    })
    //Вывод текста в textarea
    document.querySelectorAll('.keyboard__key').forEach(element => {
        element.addEventListener('click', (e) => {
            TEXTAREA.value += element.textContent;
        })

    })

    //Добавление класса
    function addClass(arr) {
        let elements = document.querySelectorAll('.keyboard__key');
        for (let i = 0; i < elements.length; i++) {
            elements[i].dataset.keycode = `${arr[i]}`;
        }
    }

    addClass(KEY_CODE_TABLE);

    //События на клавиатуре
    window.addEventListener('keydown', function (event) {
        let elements = document.querySelectorAll('.keyboard__key');
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].dataset.keycode === `${event.code}`) {
                elements[i].classList.add('keyboard__key_active');
                TEXTAREA.value += elements[i].textContent;

            }
        }
    });

    window.addEventListener('keyup', function (event) {
        let elements = document.querySelectorAll('.keyboard__key');
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].dataset.keycode === `${event.code}`) {
                elements[i].classList.remove('keyboard__key_active')
            }
        }
    });

}


window.addEventListener('DOMContentLoaded', init)


