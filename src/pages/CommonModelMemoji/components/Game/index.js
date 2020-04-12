// import Popup from '../Popup/index.js';
// import Timer from '../Timer/index.js';
import Card from '../Card/index.js';
import styles from './styles.css';

class Game {
    // constructor({ cardsContainer, cardElements, width, timeout }) {
    constructor(gameModel) {
        this.gameModel = gameModel;
        this.rootElement = document.createElement('div');
        this.rootElement.className = styles.root;
        this.rootElement.innerHTML = `<ul class="${styles.cards}"></ul>`;
        this.cardsElement = this.rootElement.querySelector(`.${styles.cards}`);
        this.cardByModel = new Map(
            this.gameModel.cards.map(card => [
                card,
                new Card({
                    rootElementType: 'li',
                    card,
                }),
            ]),
        );
        this.cardModelByRootElement = new Map();
        this.renderCards();

        /*    this.cardsContainer = cardsContainer;
        this.width = width;
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
    */
    }

    renderCards() {
        this.gameModel.cards.forEach(card =>
            this.cardsElement.append(this.cardByModel.get(card).rootElement),
        );
    }

    onClickCard() {
        this.cardsElement.addEventListener('click', event => {
            this.gameModel.onClickCard();
            const { target } = event;
            if (target.classList.contains(styles.card__back) && this.state === 'ready') {
                this.timer.start(); // запустили таймер
                this.cards[target.parentNode.dataset.index - 1].open(); // открыли текущую карту
                this.closeDifferentCards() // закрыли пару разных карт, если такие есть
                    .setStateCards() // добавили state(different/identical) паре открытых карт
                    .stop();
            }
        });

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
        /*  this.cardsContainer.style.gridTemplateAreas = getGridTemplateAreas(
            this.gridAreas.sort(() => 0.5 - Math.random()),
            this.width,
        );
        */
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

export default Game;
