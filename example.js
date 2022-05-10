!(function (e) {
    var s = {};
    function a(t) {
        if (s[t]) return s[t].exports;
        var c = (s[t] = { i: t, l: !1, exports: {} });
        return e[t].call(c.exports, c, c.exports, a), (c.l = !0), c.exports;
    }
    (a.m = e),
        (a.c = s),
        (a.d = function (e, s, t) {
            a.o(e, s) || Object.defineProperty(e, s, { enumerable: !0, get: t });
        }),
        (a.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (a.t = function (e, s) {
            if ((1 & s && (e = a(e)), 8 & s)) return e;
            if (4 & s && "object" == typeof e && e && e.__esModule) return e;
            var t = Object.create(null);
            if ((a.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & s && "string" != typeof e))
                for (var c in e)
                    a.d(
                        t,
                        c,
                        function (s) {
                            return e[s];
                        }.bind(null, c)
                    );
            return t;
        }),
        (a.n = function (e) {
            var s =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return a.d(s, "a", s), s;
        }),
        (a.o = function (e, s) {
            return Object.prototype.hasOwnProperty.call(e, s);
        }),
        (a.p = ""),
        a((a.s = 0));
})([
    function (e, s, a) {
        a(1), (e.exports = a(2));
    },
    function (e, s, a) {
        "use strict";
        a.r(s);
        a(3);
    },
    function (e, s, a) {
        "use strict";
        a.r(s);
        const t = [];
        var c = { SPECIALS: ["Backspace", "Tab", "Enter", "CapsLock", "ShiftLeft", "ShiftRight", "AltLeft", "AltRight", "ControlLeft", "ControlRight", "MetaLeft", "Delete"], ROWS: t };
        (t[0] = [
            { className: "Backquote", eng: { caps: "`", caseDown: "`", caseUp: "~", shiftCaps: "~" }, rus: { caps: "Ё", caseDown: "ё", caseUp: "Ё", shiftCaps: "ё" } },
            { className: "Digit1", eng: { caps: "1", caseDown: "1", caseUp: "!", shiftCaps: "!" }, rus: { caps: "1", caseDown: "1", caseUp: "!", shiftCaps: "!" } },
            { className: "Digit2", eng: { caps: "2", caseDown: "2", caseUp: "@", shiftCaps: "@" }, rus: { caps: "2", caseDown: "2", caseUp: '"', shiftCaps: '"' } },
            { className: "Digit3", eng: { caps: "3", caseDown: "3", caseUp: "#", shiftCaps: "#" }, rus: { caps: "3", caseDown: "3", caseUp: "№", shiftCaps: "№" } },
            { className: "Digit4", eng: { caps: "4", caseDown: "4", caseUp: "$", shiftCaps: "$" }, rus: { caps: "4", caseDown: "4", caseUp: ";", shiftCaps: ";" } },
            { className: "Digit5", eng: { caps: "5", caseDown: "5", caseUp: "%", shiftCaps: "%" }, rus: { caps: "5", caseDown: "5", caseUp: "%", shiftCaps: "%" } },
            { className: "Digit6", eng: { caps: "6", caseDown: "6", caseUp: "^", shiftCaps: "^" }, rus: { caps: "6", caseDown: "6", caseUp: ":", shiftCaps: ":" } },
            { className: "Digit7", eng: { caps: "7", caseDown: "7", caseUp: "&", shiftCaps: "&" }, rus: { caps: "7", caseDown: "7", caseUp: "?", shiftCaps: "?" } },
            { className: "Digit8", eng: { caps: "8", caseDown: "8", caseUp: "*", shiftCaps: "*" }, rus: { caps: "8", caseDown: "8", caseUp: "*", shiftCaps: "*" } },
            { className: "Digit9", eng: { caps: "9", caseDown: "9", caseUp: "(", shiftCaps: "(" }, rus: { caps: "9", caseDown: "9", caseUp: "(", shiftCaps: "(" } },
            { className: "Digit0", eng: { caps: "0", caseDown: "0", caseUp: ")", shiftCaps: ")" }, rus: { caps: "0", caseDown: "0", caseUp: ")", shiftCaps: ")" } },
            { className: "Minus", eng: { caps: "-", caseDown: "-", caseUp: "_", shiftCaps: "_" }, rus: { caps: "-", caseDown: "-", caseUp: "_", shiftCaps: "_" } },
            { className: "Equal", eng: { caps: "=", caseDown: "=", caseUp: "+", shiftCaps: "+" }, rus: { caps: "=", caseDown: "=", caseUp: "+", shiftCaps: "+" } },
            { className: "Backspace", eng: { caseDown: "Backspace", caseUp: "Backspace" }, rus: { caseDown: "Backspace", caseUp: "Backspace" } },
        ]),
            (t[1] = [
                { className: "Tab", eng: { caseDown: "Tab", caseUp: "Tab" }, rus: { caseDown: "Tab", caseUp: "Tab" } },
                { className: "KeyQ", eng: { caseDown: "q", caseUp: "Q" }, rus: { caseDown: "й", caseUp: "Й" } },
                { className: "KeyW", eng: { caseDown: "w", caseUp: "W" }, rus: { caseDown: "ц", caseUp: "Ц" } },
                { className: "KeyE", eng: { caseDown: "e", caseUp: "E" }, rus: { caseDown: "у", caseUp: "У" } },
                { className: "KeyR", eng: { caseDown: "r", caseUp: "R" }, rus: { caseDown: "к", caseUp: "К" } },
                { className: "KeyT", eng: { caseDown: "t", caseUp: "T" }, rus: { caseDown: "е", caseUp: "Е" } },
                { className: "KeyY", eng: { caseDown: "y", caseUp: "Y" }, rus: { caseDown: "н", caseUp: "Н" } },
                { className: "KeyU", eng: { caseDown: "u", caseUp: "U" }, rus: { caseDown: "г", caseUp: "Г" } },
                { className: "KeyI", eng: { caseDown: "i", caseUp: "I" }, rus: { caseDown: "ш", caseUp: "Ш" } },
                { className: "KeyO", eng: { caseDown: "o", caseUp: "O" }, rus: { caseDown: "щ", caseUp: "Щ" } },
                { className: "KeyP", eng: { caseDown: "p", caseUp: "P" }, rus: { caseDown: "з", caseUp: "З" } },
                { className: "BracketLeft", eng: { caps: "[", caseDown: "[", caseUp: "{", shiftCaps: "{" }, rus: { caps: "Х", caseDown: "х", caseUp: "Х", shiftCaps: "х" } },
                { className: "BracketRight", eng: { caps: "]", caseDown: "]", caseUp: "}", shiftCaps: "}" }, rus: { caps: "Ъ", caseDown: "ъ", caseUp: "Ъ", shiftCaps: "ъ" } },
                { className: "Backslash", eng: { caps: "\\", caseDown: "\\", caseUp: "|", shiftCaps: "|" }, rus: { caps: "\\", caseDown: "\\", caseUp: "/", shiftCaps: "/" } },
                { className: "Delete", eng: { caseDown: "Del", caseUp: "Del" }, rus: { caseDown: "Del", caseUp: "Del" } },
            ]),
            (t[2] = [
                { className: "CapsLock", eng: { caseDown: "CapsLock", caseUp: "CapsLock" }, rus: { caseDown: "CapsLock", caseUp: "CapsLock" } },
                { className: "KeyA", eng: { caseDown: "a", caseUp: "A" }, rus: { caseDown: "ф", caseUp: "Ф" } },
                { className: "KeyS", eng: { caseDown: "s", caseUp: "S" }, rus: { caseDown: "ы", caseUp: "Ы" } },
                { className: "KeyD", eng: { caseDown: "d", caseUp: "D" }, rus: { caseDown: "в", caseUp: "В" } },
                { className: "KeyF", eng: { caseDown: "f", caseUp: "F" }, rus: { caseDown: "а", caseUp: "А" } },
                { className: "KeyG", eng: { caseDown: "g", caseUp: "G" }, rus: { caseDown: "п", caseUp: "П" } },
                { className: "KeyH", eng: { caseDown: "h", caseUp: "H" }, rus: { caseDown: "р", caseUp: "Р" } },
                { className: "KeyJ", eng: { caseDown: "j", caseUp: "J" }, rus: { caseDown: "о", caseUp: "О" } },
                { className: "KeyK", eng: { caseDown: "k", caseUp: "K" }, rus: { caseDown: "л", caseUp: "Л" } },
                { className: "KeyL", eng: { caseDown: "l", caseUp: "L" }, rus: { caseDown: "д", caseUp: "Д" } },
                { className: "Semicolon", eng: { caps: ";", caseDown: ";", caseUp: ":", shiftCaps: ":" }, rus: { caps: "Ж", caseDown: "ж", caseUp: "Ж", shiftCaps: "ж" } },
                { className: "Quote", eng: { caps: "'", caseDown: "'", caseUp: '"', shiftCaps: '"' }, rus: { caps: "Э", caseDown: "э", caseUp: "Э", shiftCaps: "э" } },
                { className: "Enter", eng: { caseDown: "Enter", caseUp: "Enter" }, rus: { caseDown: "Enter", caseUp: "Enter" } },
            ]),
            (t[3] = [
                { className: "ShiftLeft", eng: { caseDown: "Shift", caseUp: "Shift" }, rus: { caseDown: "Shift", caseUp: "Shift" } },
                { className: "KeyZ", eng: { caseDown: "z", caseUp: "Z" }, rus: { caseDown: "я", caseUp: "Я" } },
                { className: "KeyX", eng: { caseDown: "x", caseUp: "X" }, rus: { caseDown: "ч", caseUp: "Ч" } },
                { className: "KeyC", eng: { caseDown: "c", caseUp: "C" }, rus: { caseDown: "с", caseUp: "С" } },
                { className: "KeyV", eng: { caseDown: "v", caseUp: "V" }, rus: { caseDown: "м", caseUp: "М" } },
                { className: "KeyB", eng: { caseDown: "b", caseUp: "B" }, rus: { caseDown: "и", caseUp: "И" } },
                { className: "KeyN", eng: { caseDown: "n", caseUp: "N" }, rus: { caseDown: "т", caseUp: "Т" } },
                { className: "KeyM", eng: { caseDown: "m", caseUp: "M" }, rus: { caseDown: "ь", caseUp: "Ь" } },
                { className: "Comma", eng: { caps: ",", caseDown: ",", caseUp: "<", shiftCaps: "<" }, rus: { caps: "Б", caseDown: "б", caseUp: "Б", shiftCaps: "б" } },
                { className: "Period", eng: { caps: ".", caseDown: ".", caseUp: ">", shiftCaps: ">" }, rus: { caps: "Ю", caseDown: "ю", caseUp: "Ю", shiftCaps: "ю" } },
                { className: "Slash", eng: { caps: "/", caseDown: "/", caseUp: "?", shiftCaps: "?" }, rus: { caps: ".", caseDown: ".", caseUp: ",", shiftCaps: "," } },
                { className: "ArrowUp", eng: { caseDown: "▲", caseUp: "▲" }, rus: { caseDown: "▲", caseUp: "▲" } },
                { className: "ShiftRight", eng: { caseDown: "Shift", caseUp: "Shift" }, rus: { caseDown: "Shift", caseUp: "Shift" } },
            ]),
            (t[4] = [
                { className: "ControlLeft", eng: { caseDown: "Ctrl", caseUp: "Ctrl" }, rus: { caseDown: "Ctrl", caseUp: "Ctrl" } },
                { className: "MetaLeft", eng: { caseDown: "Win", caseUp: "Win" }, rus: { caseDown: "Win", caseUp: "Win" } },
                { className: "AltLeft", eng: { caseDown: "Alt", caseUp: "Alt" }, rus: { caseDown: "Alt", caseUp: "Alt" } },
                { className: "Space", eng: { caseDown: " ", caseUp: " " }, rus: { caseDown: " ", caseUp: " " } },
                { className: "AltRight", eng: { caseDown: "Alt", caseUp: "Alt" }, rus: { caseDown: "Alt", caseUp: "Alt" } },
                { className: "ArrowLeft", eng: { caseDown: "◄", caseUp: "◄" }, rus: { caseDown: "◄", caseUp: "◄" } },
                { className: "ArrowDown", eng: { caseDown: "▼", caseUp: "▼" }, rus: { caseDown: "▼", caseUp: "▼" } },
                { className: "ArrowRight", eng: { caseDown: "►", caseUp: "►" }, rus: { caseDown: "►", caseUp: "►" } },
                { className: "ControlRight", eng: { caseDown: "Ctrl", caseUp: "Ctrl" }, rus: { caseDown: "Ctrl", caseUp: "Ctrl" } },
            ]);
        new (class {
            constructor() {
                (this.element = null),
                    (this.textarea = null),
                    (this.state = { isShiftLeftPressed: !1, isShiftRightPressed: !1, isCapsLockPressed: !1, case: "caseDown", lang: "eng" }),
                    (this.current = { element: null, code: null, event: null, char: null }),
                    (this.previous = { element: null, code: null, event: null, char: null });
            }
            initDomStructure(e) {
                document.body.classList.add("body");
                const s = document.createElement("div");
                s.classList.add("centralizer");
                const a = document.createElement("p");
                (a.innerText = "RSS Виртуальная клавиатура"), a.classList.add("title"), s.appendChild(a);
                const t = document.createElement("textarea");
                t.classList.add("body--textarea", "textarea"),
                    t.setAttribute("id", "textarea"),
                    t.setAttribute("rows", "5"),
                    t.setAttribute("cols", "50"),
                    (this.textarea = t),
                    s.appendChild(this.textarea),
                    (this.element = document.createElement("div")),
                    this.element.classList.add("body--keyboard", "keyboard"),
                    this.element.setAttribute("id", "keyboard");
                const c = document.createDocumentFragment();
                for (let s = 0; s < e.length; s += 1) {
                    const a = document.createElement("div");
                    a.classList.add("keyboard--row", "row");
                    for (let t = 0; t < e[s].length; t += 1) {
                        const c = document.createElement("div");
                        c.classList.add("keyboard--key", "key", e[s][t].className);
                        const n = document.createElement("span");
                        n.classList.add("rus", "hidden"),
                            n.insertAdjacentHTML("afterBegin", `<span class="caseDown hidden">${e[s][t].rus.caseDown}</span>`),
                            n.insertAdjacentHTML("beforeEnd", `<span class="caseUp hidden">${e[s][t].rus.caseUp}</span>`),
                            n.insertAdjacentHTML("beforeEnd", `<span class="caps hidden">${e[s][t].rus.caps || e[s][t].rus.caseUp}</span>`),
                            n.insertAdjacentHTML("beforeEnd", `<span class="shiftCaps hidden">${e[s][t].rus.shiftCaps || e[s][t].rus.caseDown}</span>`),
                            c.appendChild(n);
                        const i = document.createElement("span");
                        i.classList.add("eng"),
                            i.insertAdjacentHTML("afterBegin", `<span class="caseDown">${e[s][t].eng.caseDown}</span>`),
                            i.insertAdjacentHTML("beforeEnd", `<span class="caseUp hidden">${e[s][t].eng.caseUp}</span>`),
                            i.insertAdjacentHTML("beforeEnd", `<span class="caps hidden">${e[s][t].eng.caps || e[s][t].eng.caseUp}</span>`),
                            i.insertAdjacentHTML("beforeEnd", `<span class="shiftCaps hidden">${e[s][t].eng.shiftCaps || e[s][t].eng.caseDown}</span>`),
                            c.appendChild(i),
                            a.appendChild(c);
                    }
                    c.appendChild(a);
                }
                this.element.appendChild(c), s.appendChild(this.element);
                const n = document.createElement("p");
                (n.innerText = "Клавиатура создана в операционной системе Windows"), n.classList.add("description"), s.appendChild(n);
                const i = document.createElement("p");
                (i.innerText = "Для переключения языка комбинация: левыe ctrl + alt"), i.classList.add("language"), s.appendChild(i), document.body.appendChild(s);
            }
            addActiveState() {
                this.current.element.classList.add("active");
            }
            removeActiveState() {
                this.current.element &&
                    (this.previous.element && this.previous.element.classList.contains("active") && (["CapsLock", "ShiftLeft", "ShiftRight"].includes(this.previous.code) || this.previous.element.classList.remove("active")),
                    this.current.element.classList.remove("active"));
            }
            toggleCase() {
                const e = this.element.querySelectorAll(`div>.${this.state.lang}`);
                for (let s = 0; s < e.length; s += 1)
                    e[s].querySelectorAll("span")[0].classList.contains("hidden") || e[s].querySelectorAll("span")[0].classList.add("hidden"),
                        e[s].querySelectorAll("span")[1].classList.contains("hidden") || e[s].querySelectorAll("span")[1].classList.add("hidden"),
                        e[s].querySelectorAll("span")[2].classList.contains("hidden") || e[s].querySelectorAll("span")[2].classList.add("hidden"),
                        e[s].querySelectorAll("span")[3].classList.contains("hidden") || e[s].querySelectorAll("span")[3].classList.add("hidden"),
                        (this.state.isShiftLeftPressed || this.state.isShiftRightPressed) && this.state.isCapsLockPressed
                            ? (e[s].querySelectorAll("span")[3].classList.remove("hidden"), (this.state.case = "shiftCaps"))
                            : this.state.isCapsLockPressed
                            ? (e[s].querySelectorAll("span")[2].classList.remove("hidden"), (this.state.case = "caps"))
                            : this.state.isShiftLeftPressed || this.state.isShiftRightPressed
                            ? (e[s].querySelectorAll("span")[1].classList.remove("hidden"), (this.state.case = "caseUp"))
                            : (e[s].querySelectorAll("span")[0].classList.remove("hidden"), (this.state.case = "caseDown"));
            }
            toggleLang() {
                const e = function () {
                    const e = this.element.querySelectorAll(`div>.${this.state.lang}`);
                    for (let s = 0; s < e.length; s += 1) e[s].classList.toggle("hidden"), e[s].querySelectorAll(`span.${this.state.case}`)[0].classList.toggle("hidden");
                }.bind(this);
                e(), "eng" === this.state.lang ? (this.state.lang = "rus") : (this.state.lang = "eng"), localStorage.setItem("lang", this.state.lang), e();
            }
            implementKeyFunction() {
                let e = this.textarea.value;
                const s = this.textarea.selectionStart;
                const a = function () {
                    s >= 0 && s <= e.length
                        ? ((this.textarea.value = e.slice(0, s) + this.current.char + e.slice(s, e.length)), (this.textarea.selectionStart = s + this.current.char.length), (this.textarea.selectionEnd = s + this.current.char.length))
                        : (this.textarea.value += this.current.char);
                }.bind(this);
                if (c.SPECIALS.includes(this.current.code))
                    switch (this.current.code) {
                        case "Backspace":
                            s > 0 && s <= e.length && ((e = e.slice(0, s - 1) + e.slice(s, e.length)), (this.textarea.value = e), (this.textarea.selectionStart = s - 1), (this.textarea.selectionEnd = s - 1));
                            break;
                        case "Delete":
                            s >= 0 && s <= e.length - 1 && ((e = e.slice(0, s) + e.slice(s + 1, e.length)), (this.textarea.value = e), (this.textarea.selectionStart = s), (this.textarea.selectionEnd = s));
                            break;
                        case "Tab":
                            (this.current.char = "    "), a();
                            break;
                        case "Enter":
                            (this.current.char = "\n"), a();
                            break;
                        case "CapsLock":
                            this.state.isCapsLockPressed && !this.current.event.repeat ? (this.removeActiveState(), (this.state.isCapsLockPressed = !1)) : (this.addActiveState(), (this.state.isCapsLockPressed = !0)), this.toggleCase();
                            break;
                        case "ShiftLeft":
                            this.state.isShiftLeftPressed || this.state.isShiftRightPressed || (this.addActiveState(), (this.state.isShiftLeftPressed = !0), this.toggleCase());
                            break;
                        case "ShiftRight":
                            this.state.isShiftRightPressed || this.state.isShiftLeftPressed || (this.addActiveState(), (this.state.isShiftRightPressed = !0), this.toggleCase());
                    }
                else a();
                this.current.event.ctrlKey && this.current.event.altKey && this.toggleLang();
            }
            keyDownHandler(e) {
                e.preventDefault(),
                    (this.current.event = e),
                    (this.current.code = e.code),
                    ([this.current.element] = this.element.getElementsByClassName(e.code)),
                    this.current.element &&
                        ((this.current.char = this.current.element.querySelectorAll(":not(.hidden)")[1].textContent),
                        this.implementKeyFunction(),
                        "MetaLeft" === this.current.code ? (this.addActiveState(), setTimeout(this.removeActiveState.bind(this), 300)) : ["CapsLock", "ShiftLeft", "ShiftRight"].includes(this.current.code) || this.addActiveState());
            }
            keyUpHandler(e) {
                const s = this.element.getElementsByClassName(e.code)[0];
                s &&
                    ((this.current.element = s.closest("div")),
                    "CapsLock" !== e.code && this.removeActiveState(),
                    ("ShiftLeft" !== e.code && "ShiftRight" !== e.code) ||
                        ("ShiftLeft" === e.code ? ((this.state.isShiftLeftPressed = !1), this.removeActiveState()) : "ShiftRight" === e.code && ((this.state.isShiftRightPressed = !1), this.removeActiveState()), this.toggleCase()));
            }
            mouseDownHandler(e) {
                "SPAN" === e.target.tagName &&
                    ((this.current.event = e),
                    (this.current.element = e.target.closest("div")),
                    ([, , this.current.code] = this.current.element.classList),
                    (this.current.char = e.target.textContent),
                    this.implementKeyFunction(),
                    "CapsLock" !== this.current.code && this.addActiveState(),
                    (this.previous = { ...this.current }),
                    e.preventDefault());
            }
            mouseUpHandler(e) {
                (this.current.event = e),
                    (this.current.element = e.target.closest("div")),
                    this.current.element &&
                        (this.current.element.classList.contains("key") ? ([, , this.current.code] = this.current.element.classList) : (this.current = { ...this.previous }),
                        "CapsLock" !== this.current.code &&
                            (this.removeActiveState(),
                            this.state.isShiftLeftPressed && "ShiftLeft" === this.current.code && ((this.state.isShiftLeftPressed = !1), this.toggleCase()),
                            this.state.isShiftRightPressed && "ShiftRight" === this.current.code && ((this.state.isShiftRightPressed = !1), this.toggleCase())));
            }
            initLanguage() {
                "rus" === localStorage.lang && this.toggleLang();
            }
            initKeyboard(e) {
                this.initDomStructure(e),
                    this.initLanguage(),
                    document.addEventListener("keyup", this.keyUpHandler.bind(this)),
                    document.addEventListener("keydown", this.keyDownHandler.bind(this)),
                    document.addEventListener("mouseup", this.mouseUpHandler.bind(this)),
                    this.element.addEventListener("mousedown", this.mouseDownHandler.bind(this));
            }
        })().initKeyboard(c.ROWS);
    },
    function (e, s) {},
]);
