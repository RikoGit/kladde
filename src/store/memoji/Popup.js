class Popup {
    constructor({ onClick, parentNode = document.body }) {
        this.domElement = document.createElement('div');
        this.createDomElement()
            .setDomElementClass()
            .renderTo(parentNode);
        if (onClick) {
            document.getElementById(Popup.CLASSES.buttonid).addEventListener('click', onClick);
        }
    }

    createDomElement() {
        this.domElement.innerHTML = `<div class="${Popup.CLASSES.main}">\
                <h1 class="${Popup.CLASSES.title}">\
                    <span class="${Popup.CLASSES.text} ${Popup.CLASSES.textwin}">\
                        <span class="${Popup.CLASSES.letter}">W</span>\
                        <span class="${Popup.CLASSES.letter}">i</span>\
                        <span class="${Popup.CLASSES.letter}">n</span>\
                    </span>\
                    <span class="${Popup.CLASSES.text} ${Popup.CLASSES.textlose}">\
                        <span class="${Popup.CLASSES.letter}">L</span>\
                        <span class="${Popup.CLASSES.letter}">o</span>\
                        <span class="${Popup.CLASSES.letter}">s</span>\
                        <span class="${Popup.CLASSES.letter}">e</span>\
                    </span>\
                </h1>\
                <div id="${Popup.CLASSES.buttonid}" class="${Popup.CLASSES.button}">\
                    <span class="${Popup.CLASSES.buttontext} ${Popup.CLASSES.buttontextwin}">Play again</span>\
                    <span class="${Popup.CLASSES.buttontext} ${Popup.CLASSES.buttontextlose}">Try again</span>\
                </div>\
            </div>`;

        return this;
    }

    setDomElementClass() {
        this.domElement.className = Popup.CLASSES.name;

        return this;
    }

    renderTo(parentNode) {
        parentNode.appendChild(this.domElement);

        return this;
    }

    show(state) {
        this.domElement.classList.add(Popup.CLASSES.open);
        if (state === 'win') {
            this.domElement.classList.remove(Popup.CLASSES.type.lose);
            this.domElement.classList.add(Popup.CLASSES.type.win);
        }
        if (state === 'lose') {
            this.domElement.classList.remove(Popup.CLASSES.type.win);
            this.domElement.classList.add(Popup.CLASSES.type.lose);
        }

        return this;
    }

    hide() {
        if (this.domElement) {
            this.domElement.classList.remove(Popup.CLASSES.open);
        }

        return this;
    }

    static CLASSES = {
        name: 'popup',
        main: 'popup__main',
        open: 'popup_state_open',
        type: {
            win: 'popup_type_win',
            lose: 'popup_type_lose',
        },
        title: 'popup__title',
        text: 'popup__text',
        textwin: 'popup__text_type_win',
        textlose: 'popup__text_type_lose',
        letter: 'popup__letter',
        button: 'popup__button',
        buttonid: 'popup__button',
        buttontext: 'popup__buttontext',
        buttontextwin: 'popup__buttontext_type_win',
        buttontextlose: 'popup__buttontext_type_lose',
    };
}

export default Popup;
