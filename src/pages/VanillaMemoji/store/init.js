import Popup from './Popup.js';
import Timer from './Timer.js';
import Card from './Card.js';
import styles from '../styles.css';

const init = () => {
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
            document.head.append(elem);

            return this;
        }

        onTimerEnd() {
            this.state = 'lose';
            // this.timer.stop();
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

    const cardsContainer = document.querySelector(`.${styles.cards}`);
    const cardElements = [...cardsContainer.querySelectorAll(`.${styles.card}`)];

    // eslint-disable-next-line no-new
    new Game({
        cardsContainer,
        cardElements,
        width: 4,
        timeout: 20000,
    });
};

export default init;
