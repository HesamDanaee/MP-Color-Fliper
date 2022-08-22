// Buttons
const BODY = document.querySelector('.main-container');
const BTN = document.querySelectorAll('.btn');
const COLOR_BTN = document.querySelector('.btn-color');
const RGB_BTN = document.querySelector('.btn-rgb');
const HEX_BTN = document.querySelector('.btn-hex');
const COLOR_NAME = document.querySelector('.color-name');
const DISPLAY = document.querySelector('.displayer');
const COLORS = ['red', 'green', 'blue', 'purple', 'black', 'yellow', 'aqua', 'darkblue', 'teal', 'olive', 'gold', 'mediumpurple', 'lightsteelblue', 'orange', 'slateblue', 'whitesmoke', 'slategray', 'mediumslateblue', 'mediumseagreen'];
const hexWords = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


// Events 
COLOR_BTN.addEventListener('click', colorPicker);
RGB_BTN.addEventListener('click', rgbPicker);
HEX_BTN.addEventListener('click', hexPicker);

// Functions


function colorPicker() {
    BODY.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
    COLOR_NAME.innerHTML = BODY.style.background;
    COLOR_NAME.style.color = BODY.style.background;
    if (BODY.style.background === 'black') {
        DISPLAY.style.background = 'white';
        DISPLAY.style.color = 'black';
        BTN.forEach(a => {
            a.style.color = 'white';
            a.style.borderColor = 'white';
        });
    } else {
        DISPLAY.style.background = 'black';
        DISPLAY.style.color = 'white';
        BTN.forEach(a => {
            a.style.color = 'black';
            a.style.borderColor = 'black';
        });
    }

}

function rgbPicker() {
    BODY.style.background = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255) })`;
    COLOR_NAME.innerHTML = BODY.style.background;
    COLOR_NAME.style.color = BODY.style.background;
    if (BODY.style.background === 'black') {
        DISPLAY.style.background = 'white';
        DISPLAY.style.color = 'black';
        BTN.forEach(a => {
            a.style.color = 'white';
            a.style.borderColor = 'white';
        });
    } else {
        DISPLAY.style.background = 'black';
        DISPLAY.style.color = 'white';
        BTN.forEach(a => {
            a.style.color = 'black';
            a.style.borderColor = 'black';
        });
    }
}


function hexPicker() {
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hexWords.length);
        hex += hexWords[index];
    }
    BODY.style.background = hex;
    COLOR_NAME.innerHTML = hex;
    COLOR_NAME.style.color = hex;
    if (BODY.style.background === 'black') {
        DISPLAY.style.background = 'white';
        DISPLAY.style.color = 'black';
        BTN.forEach(a => {
            a.style.color = 'white';
            a.style.borderColor = 'white';
        });
    } else {
        DISPLAY.style.background = 'black';
        DISPLAY.style.color = 'white';
        BTN.forEach(a => {
            a.style.color = 'black';
            a.style.borderColor = 'black';
        });
    }
}