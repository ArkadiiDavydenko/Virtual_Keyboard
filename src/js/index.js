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
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace',],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['Caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl']
];

const KEY_RUS = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace',],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', , 'х', 'ъ', '\\',],
    ['Caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',],
    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift',],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl']
];


const WRAPPER = new Element(document.body, 'div', 'wrapper');
const HEADER = new Element(WRAPPER.node, 'header', 'header');
const TITLE = new Element(HEADER.node, 'h1', 'title');
TITLE.node.textContent = 'Виртуальная клавиатура';

const MAIN = new Element(WRAPPER.node, 'main', 'main');
const TEXTAREA = new Element(MAIN.node, 'textarea', 'textarea');
TEXTAREA.node.setAttribute("rows", 5);
TEXTAREA.node.setAttribute("columns", 50);

const KEYBOARD = new Element(MAIN.node, 'div', 'keyboard');

const DESCRIPTION = new Element(MAIN.node, 'p', 'description');
DESCRIPTION.node.textContent = 'Клавиатура создана в операционной системе Windows';
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
