const Keyboard = {
    elements: {
        centralizer: null,
        title: null,
        textarea: null,
        main: null,
        keysContainer: null,
        keys: [],
        description: null,
        language: null
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false
    },

    init() {
        // Create main elements
        this.elements.centralizer = document.createElement("div");
        this.elements.title = document.createElement("p");
        this.elements.textarea = document.createElement("TEXTAREA");

        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        this.elements.description = document.createElement("p");
        this.elements.language = document.createElement("p");

        // Setup main elements
        this.elements.centralizer.classList.add("centralizer");
        this.elements.title.classList.add("title");
        this.elements.title.innerHTML = "RSS Виртуальная клавиатура";
        this.elements.textarea.classList.add("textarea");
        this.elements.textarea.autofocus = true;
        this.elements.textarea.rows = "5";
        this.elements.textarea.cols = "50";
        this.elements.textarea.spellcheck = "false";

        this.elements.main.classList.add("keyboard", "keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard--row", "row");
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.description.classList.add("description");
        this.elements.description.innerHTML = "Клавиатура создана в операционной системе Windows";
        this.elements.language.classList.add("language");
        this.elements.language.innerHTML = "Для переключения языка комбинация: левыe ctrl + alt";

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".key");

        // Add to DOM
        this.elements.centralizer.appendChild(this.elements.title);
        this.elements.centralizer.appendChild(this.elements.textarea);
        
        this.elements.main.appendChild(this.elements.keysContainer);
        this.elements.centralizer.appendChild(this.elements.main);
        this.elements.centralizer.appendChild(this.elements.description);
        this.elements.centralizer.appendChild(this.elements.language);

        // this.elements.centralizer.innerHTML += this.elements.title.outerHTML + this.elements.textarea.outerHTML + 
        // this.elements.main.outerHTML + this.elements.description.outerHTML + this.elements.language.outerHTML;
       
        document.body.appendChild(this.elements.centralizer);
        
        // Automatically use keyboard for elements with .use-keyboard-input
        document.querySelectorAll(".textarea").forEach(element => {
            element.addEventListener("focus", () => {
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            });
        });
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
            "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Delete",
            "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
            "ShiftLeft", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "ArrowUp", "ShiftRight",
            "ControlLeft", "MetaLeft", "AltLeft", "space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight",
        ];

        // Creates HTML for an icon

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["Backspace", "Delete", "Enter", "ShifrtRight"].indexOf(key) !== -1;

            // Add attributes/clases
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("key");

            keyElement.addEventListener('mousedown', () => {
                keyElement.classList.add("active");
              });
            
            keyElement.addEventListener('mouseup', () => {
                keyElement.classList.remove("active");
                });
            
            

            // keyElement.addEventListener('keydown', (event) => {
            //     keyElement.classList.add("active");
            //   }, false);

            
            // keyElement.addEventListener('keyup', () => {
            //     keyElement.classList.remove("active");
            //     });


            switch (key) {
                case "Backspace":
                    keyElement.classList.add("Backspace");
                    keyElement.innerHTML = "Backspace";

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent("oninput");
                    });

                    break;

                case "Delete":
                    keyElement.classList.add("Delete");
                    keyElement.innerHTML = "Del";

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(this.properties.value.length, 1);
                        this._triggerEvent("oninput");
                    });

                    break;    
                
                case "Tab":
                    keyElement.classList.add("Tab");
                    keyElement.innerHTML = "Tab";

                    keyElement.addEventListener("click", () => {
                        this.properties.value += "    ";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "CapsLock":
                keyElement.classList.add("CapsLock");
                keyElement.innerHTML = "CapsLock";

                keyElement.addEventListener("click", () => {
                    this._toggleCapsLock();
                    keyElement.classList.toggle("active", this.properties.capsLock);
                });

                break;

                case "ShiftLeft":
                    keyElement.classList.add("ShiftLeft");
                    keyElement.innerHTML = "Shift";
    
                    
                    break;
                
                case "ArrowUp":
                    keyElement.classList.add("ArrowUp");
                    keyElement.innerHTML = "▲";

                    keyElement.addEventListener("click", () => {
                        this.properties.value += "▲";
                        this._triggerEvent("oninput");
                    });

                    break;
                
                case "ShiftRight":
                    keyElement.classList.add("ShiftRight");
                    keyElement.innerHTML = "Shift";

                    
                    break;

                case "Enter":
                    keyElement.classList.add("Enter");
                    keyElement.innerHTML = "Enter";
    
                    keyElement.addEventListener("click", () => {
                        this.properties.value += "\n";
                        this._triggerEvent("oninput");
                    });
    
                    break;
                
                case "ControlLeft":
                    keyElement.classList.add("ControlLeft");
                    keyElement.innerHTML = "Ctrl";

                    break;

                case "MetaLeft":
                    keyElement.classList.add("MetaLeft");
                    keyElement.innerHTML = "Win";

                    keyElement.addEventListener("click", () => {
                        this._toggleCapsLock();
                        keyElement.classList.toggle("active", this.properties.capsLock);
                    });
                    break;

                case "AltLeft":
                    keyElement.classList.add("AltLeft");
                    keyElement.innerHTML = "Alt";

                    keyElement.addEventListener("click", () => {
                        this._toggleCapsLock();
                        keyElement.classList.toggle("active", this.properties.capsLock);
                    });
                    break;

                case "space":
                    keyElement.classList.add("Space");
    
                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
                    });
    
                    break;

                case "AltRight":
                    keyElement.classList.add("AltRight");
                    keyElement.innerHTML = "Alt";

                    keyElement.addEventListener("click", () => {
                        this._toggleCapsLock();
                        keyElement.classList.toggle("active", this.properties.capsLock);
                    });
                    break;

                case "ArrowLeft":
                    keyElement.classList.add("ArrowLeft");
                    keyElement.innerHTML = "◄";

                    keyElement.addEventListener("click", () => {
                        this.properties.value += "◄";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "ArrowDown":
                    keyElement.classList.add("ArrowDown");
                    keyElement.innerHTML = "▼";

                    keyElement.addEventListener("click", () => {
                        this.properties.value += "▼";
                        this._triggerEvent("oninput");
                    });

                    break;
                
                case "ArrowRight":
                    keyElement.classList.add("ArrowRight");
                    keyElement.innerHTML = "►";

                    keyElement.addEventListener("click", () => {
                        this.properties.value += "►";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "ControlRight":
                    keyElement.classList.add("ControlRight");
                    keyElement.innerHTML = "Ctrl";

                    break;
    

                default:
                    keyElement.textContent = key.toLowerCase();
                    //keyElement.classList.add(`key${key.toUpperCase()}`);
                    keyElement.addEventListener("click", () => {
                       
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this._triggerEvent("oninput");
                    });
    
                    break;
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;
    },

    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        } 
    },

    _toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;

        for (const key of this.elements.keys) {
            if (!key.classList.contains("Backspace") && !key.classList.contains("Tab") && !key.classList.contains("Delete") &&
                !key.classList.contains("CapsLock") && !key.classList.contains("Enter") && !key.classList.contains("ShiftLeft") && 
                !key.classList.contains("ShiftRight") && !key.classList.contains("ControlLeft") && !key.classList.contains("MetaLeft") &&
                !key.classList.contains("AltLeft") && !key.classList.contains("AltRight") && !key.classList.contains("ControlRight")) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },

    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard--hiden");
    },

    close() {
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add("keyboard--hiden");
    }
};


window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
    Keyboard.open("dcode ", function (currentValue) {
        console.log("value changed! here it is: " + currentValue);
    }, function (currentValue) {
        console.log("keyboard closed! Finishing value: " + currentValue);
    })

    document.onkeypress = function (e) {
        console.log(e.code);
    }

    // Connect keyboard

    let keys = document.querySelectorAll('.key');
    let spaceKey = document.querySelector('.Space');
    let shift_left = document.querySelector('.ShiftLeft');
    let shift_right = document.querySelector('.ShiftRight');
    let caps_lock_key = document.querySelector('.CapsLock');

    for (let i = 0; i < keys.length; i++) {
        keys[i].setAttribute('keyname', keys[i].innerText);
        keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
    }

    console.log(keys);

    window.addEventListener('keydown', function(e) {
        for(let i = 0; i < keys.length; i++) {
            if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName' )) {
                keys[i].classList.add('active');
            }
            if (e.code == 'Space') {
                spaceKey.classList.add('active'); 
            }
            if (e.code == 'ShiftLeft') {
                shift_right.classList.remove('active');
            }
            if (e.code == 'ShiftRight') {
                shift_left.classList.remove('active');
            }
            if (e.code == 'CapsLock') {
                caps_lock_key.classList.toggle('active');
                console.log(e.code)
            }
        }    
    });

    window.addEventListener('keyup', function(e) {
        for(let i = 0; i < keys.length; i++) {
            if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName' )) {
                keys[i].classList.remove('active');
            }  
            if (e.code == 'Space') {
                spaceKey.classList.remove('active'); 
            }
            if (e.code == 'ShiftLeft') {
                shift_right.classList.remove('active'); 
            }
            if (e.code == 'ShiftRight') {
                shift_left.classList.remove('active'); 
            }
        }
    });
});