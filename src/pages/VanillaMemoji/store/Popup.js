import styles from '../styles.css';

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
                    <span class="${Popup.CLASSES.buttontextwin}">Play again</span>\
                    <span class="${Popup.CLASSES.buttontextlose}">Try again</span>\
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
        name: styles.popup,
        main: styles.popup__main,
        open: styles.popup_state_open,
        type: {
            win: styles.popup_type_win,
            lose: styles.popup_type_lose,
        },
        title: styles.popup__title,
        text: styles.popup__text,
        textwin: styles.popup__text_type_win,
        textlose: styles.popup__text_type_lose,
        letter: styles.popup__letter,
        button: styles.popup__button,
        buttonid: styles.popup__button,
        buttontextwin: styles.popup__buttontext_type_win,
        buttontextlose: styles.popup__buttontext_type_lose,
    };
}

export default Popup;
