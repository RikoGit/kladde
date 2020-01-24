/* eslint-disable max-classes-per-file */
import styles from '../components/MemojiList/styles.css';

/* eslint-disable max-classes-per-file */
const jstest = () => {
    // eslint-disable-next-line func-names
    function getGridTemplateAreas(indices, number, separator = "'") {
        return indices.reduce((str, indicesItem, index) => {
            if (!(index % number)) {
                // eslint-disable-next-line no-param-reassign
                str = `${str} ${separator}`;
            }
            // eslint-disable-next-line no-param-reassign
            str = `${str} ${indicesItem}`;
            if (!((index + 1) % number)) {
                // eslint-disable-next-line no-param-reassign
                str = `${str} ${separator}`;
            }

            return str;
        }, '');
    }

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
    }

    Popup.CLASSES = {
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
        buttontext: styles.popup__buttontext,
        buttontextwin: styles.popup__buttontext_type_win,
        buttontextlose: styles.popup__buttontext_type_lose,
    };

    class Timer {
        constructor({ timeout, onTimerEnd, parentNode }) {
            this.domElement = document.createElement('div');
            this.step = 1000;
            this.timerId = 0;
            this.timeout = timeout;
            this.result = timeout;
            this.setDomElementClass();
            if (parentNode) {
                this.renderTo(parentNode);
            }
            this.onTimerEnd = onTimerEnd;
        }

        setDomElementClass() {
            this.domElement.className = Timer.CLASSES.name;
        }

        renderTo(parentNode) {
            parentNode.appendChild(this.domElement);
        }

        show() {
            const time = new Date(this.result);
            this.domElement.textContent = `${String(time.getMinutes()).padStart(2, 0)} : ${String(
                time.getSeconds(),
            ).padStart(2, 0)}`;
            this.result -= this.step;

            if (this.result === -this.step) {
                this.onTimerEnd();

                return this;
            }

            return this;
        }

        start() {
            if (!this.timerId) {
                this.timerId = setInterval(() => this.show(), 1000);
            }

            return this;
        }

        stop() {
            if (this.timerId) {
                clearInterval(this.timerId);
            }
            this.timerId = 0; // обнулим счетчик
            this.result = this.timeout;

            return this;
        }
    }

    Timer.CLASSES = {
        name: styles.timer,
    };

    class Card {
        constructor({ domElement, type, index, state, gridArea = `card${index}` }) {
            this.domElement = domElement;
            this.type = type;
            this.index = index;
            this.state = state;
            this.gridArea = gridArea;
        }

        setGridArea() {
            this.domElement.style.gridArea = this.gridArea;

            return this;
        }

        open() {
            this.domElement.classList.remove(Card.CLASSES.state.close);
            this.domElement.classList.add(Card.CLASSES.state.open);
            this.state = 'open';

            return this;
        }

        close() {
            if (this.state === 'close') {
                return;
            }
            this.domElement.classList.remove(Card.CLASSES.state.open);
            this.domElement.classList.add(Card.CLASSES.state.close);
            this.domElement.classList.remove(Card.CLASSES.state.identical);
            this.domElement.classList.remove(Card.CLASSES.state.different);
            this.state = 'close';

            // eslint-disable-next-line consistent-return
            return this;
        }

        setStateIdentical() {
            this.domElement.classList.remove(Card.CLASSES.state.open);
            this.domElement.classList.add(Card.CLASSES.state.identical);
            this.state = 'identical';

            return this;
        }

        setStateDifferent() {
            this.domElement.classList.remove(Card.CLASSES.state.open);
            this.domElement.classList.add(Card.CLASSES.state.different);
            this.state = 'different';

            return this;
        }
    }

    Card.CLASSES = {
        state: {
            open: styles.card_state_open,
            close: styles.card_state_close,
            identical: styles.card_state_identical,
            different: styles.card_state_different,
        },
    };

    class Game {
        constructor({ cardsContainer, cardElements, width, timeout }) {
            this.cardsContainer = cardsContainer;
            this.width = width;
            this.cards = cardElements.map(
                card =>
                    new Card({
                        domElement: card,
                        type: card.dataset.type,
                        index: card.dataset.index,
                        state: 'close',
                    }),
            );
            this.timer = new Timer({
                timeout,
                onTimerEnd: () => this.onTimerEnd(),
                parentNode: cardsContainer.parentNode,
            });
            this.popup = new Popup({
                onClick: () => this.onPopupClick(),
                parentNode: cardsContainer.parentNode.parentNode,
            });
            this.state = '';
            this.transition = 500;
            this.gridAreas = [];

            this.setTransition()
                .setGridAreaCards()
                .onClickCard()
                .start();
        }

        onClickCard() {
            this.cardsContainer.addEventListener(
                'click',
                event => {
                    const { target } = event;

                    if (target.classList.contains(styles.card__back) && this.state === 'ready') {
                        this.timer.start(); // запустили таймер
                        this.cards[target.parentNode.dataset.index - 1].open(); // открыли текущую карту
                        this.closeDifferentCards() // закрыли пару разных карт, если такие есть
                            .setStateCards() // добавили state(different/identical) паре открытых карт
                            .stop();
                    }
                },
                true,
            );

            return this;
        }

        setGridAreaCards() {
            this.cards.forEach(card => {
                card.setGridArea();
                this.gridAreas.push(card.gridArea);
            });

            return this;
        }

        setTransition() {
            const elem = document.createElement('style');
            elem.innerText = `.${styles.card} {transition: ${this.transition / 1000}s}`;
            document.head.appendChild(elem);

            return this;
        }

        onTimerEnd() {
            this.state = 'lose';
            this.timer.stop();
            this.popup.show(this.state);
        }

        onPopupClick() {
            this.popup.hide();
            this.timer.stop();
            this.restart();
        }

        sortCardsByRandom() {
            // добавим style grid-template-areas cardsContainer
            this.cardsContainer.style.gridTemplateAreas = getGridTemplateAreas(
                this.gridAreas.sort(() => 0.5 - Math.random()),
                this.width,
            );

            return this;
        }

        reset() {
            this.cards.forEach(card => card.close());

            return this;
        }

        start() {
            this.sortCardsByRandom();
            this.state = 'ready';
            this.timer.show();

            return this;
        }

        restart() {
            this.reset();
            setTimeout(() => {
                this.start();
            }, this.transition);

            return this;
        }

        // метод выделения пары - одинаковая или нет
        setStateCards() {
            const openCards = this.cards.filter(card => card.state === 'open');

            if (openCards.length === 2) {
                if (openCards[0].type === openCards[1].type) {
                    openCards.forEach(card => card.setStateIdentical());
                } else {
                    openCards.forEach(card => card.setStateDifferent());
                }
            }

            return this;
        }

        closeDifferentCards() {
            this.cards.filter(card => card.state === 'different').forEach(card => card.close());

            return this;
        }

        stop() {
            if (this.cards.every(card => card.state === 'identical')) {
                this.state = 'win';
            }

            if (this.state === 'win') {
                this.timer.stop(); // остановим таймер
                this.popup.show(this.state);
            }

            return this;
        }
    }

    const init = () => {
        const cardsContainer = document.getElementById('cards');
        const cardElements = [...cardsContainer.querySelectorAll(`.${styles.card}`)];

        // eslint-disable-next-line no-new
        new Game({
            cardsContainer,
            cardElements,
            width: 4,
            timeout: 20000,
        });
    };

    return init();
    /* document.addEventListener('DOMContentLoaded', init); */
};

export default jstest;
