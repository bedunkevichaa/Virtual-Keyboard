const keyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61];

let centralizer = document.createElement('div');
centralizer.className = "centralizer";

let title = document.createElement('p');
title.className = "title";
title.innerHTML = "RSS Виртуальная клавиатура";

let textarea = document.createElement('TEXTAREA');
textarea.className = "textarea";
textarea.id = 'textarea';
textarea.rows = "5";
textarea.cols = "50";
textarea.spellcheck = "false";

let divKeyboard = document.createElement('div');
divKeyboard.className = "keyboard";
divKeyboard.id = 'keyboard';

let row = document.createElement('div');
row.className = "row";


document.body.append(centralizer);
centralizer.append(title);
centralizer.append(textarea);
centralizer.append(divKeyboard);
divKeyboard.append(row);

document.onkeypress = function(event) {
    console.log(event);
    keyboard.push(event.charCode);
    console.log(keyboard);
}

function init() {
    let out = '';
    for (let i = 0; i < keyboard.length; i++) {
        out += `<div class="key">` + String.fromCharCode(keyboard[i]) + '</div>';
        
    }

    document.querySelector('.row').innerHTML = out;
}

init();