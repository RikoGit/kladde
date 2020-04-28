import Popup from '../Popup/index.js';
import Timer from '../Timer/index.js';
import Card from '../Card/index.js';
import styles from './styles.css';

class Game {
    constructor(gameModel) {
        this.gameModel = gameModel;
        this.rootElement = document.createElement('div');
        this.rootElement.className = styles.root;
        this.rootElement.innerHTML = `<ul class="${styles.cards}"></ul>`;
        this.cardsElement = this.rootElement.querySelector(`.${styles.cards}`);
        this.cardByModel = new Map(
            gameModel.cards.map(cardModel => [
                cardModel,
                new Card({
                    rootElementType: 'li',
                    cardModel,
                }),
            ]),
        );
        this.cardModelByRootElement = new Map(
            [...this.cardByModel.entries()].map(([cardModel, cardComponent]) => [
                cardComponent.rootElement,
                cardModel,
            ]),
        );
        this.renderCards();
        this.cardsElement.addEventListener('click', ({ target }) => {
            let currentElement = target;
            while (currentElement && currentElement !== this.cardsElement) {
                if (this.cardModelByRootElement.has(currentElement)) {
                    this.onClickCard(this.cardModelByRootElement.get(currentElement));

                    return;
                }
                currentElement = currentElement.parentElement;
            }
        });
        this.timer = new Timer(gameModel.timer);
        this.gameModel.timer.onTick = () => this.timer.render();
        this.rootElement.append(this.timer.rootElement);

        this.popup = new Popup({ gameModel });
        // this.rootElement.after(this.popup.rootElement);

        setTimeout(() => this.rootElement.after(this.popup.rootElement), 8);

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

    onClickCard(cardModel) {
        this.gameModel.onClickCard(cardModel);
        this.render();
    }

    render() {
        [...this.cardByModel.values()].forEach(card => card.render());
        this.timer.render();
        this.popup.render();
    }

    renderCards() {
        this.gameModel.cards.forEach(card =>
            this.cardsElement.append(this.cardByModel.get(card).rootElement),
        );
    }

    /*
    setTransition() {
        const elem = document.createElement('style');
        elem.innerText = `.${styles.card} {transition: ${this.transition / 1000}s}`;
        document.head.appendChild(elem);

        return this;
    }
    */

    onTimerEnd() {
        this.state = 'lose';
        this.timer.stop();
        this.popup.show(this.state);
        this.render();
    }

    onPopupClick() {
        this.popup.hide();
        this.timer.stop();
        this.restart();
    }

    reset() {
        this.cards.forEach(card => card.close());

        return this;
    }

    start() {
        this.sortCardsByRandom();
        this.state = 'ready';
        // this.timer.show();
    }

    restart() {
        this.reset();
        setTimeout(() => {
            this.start();
        }, this.transition);

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
