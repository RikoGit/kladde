import Popup from '../Popup/index.js';
import Timer from '../Timer/index.js';
import Card from '../Card/index.js';
import styles from './styles.css';

export default class Game {
    constructor(gameModel) {
        this.gameModel = gameModel;
        this.createRootElement();
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
        // eslint-disable-next-line no-restricted-syntax
        for (const [cardModel, cardComponent] of this.cardByModel.entries()) {
            cardModel.onChange = () => cardComponent.render();
        }
        this.cardModelByRootElement = new Map(
            [...this.cardByModel.entries()].map(([cardModel, cardComponent]) => [
                cardComponent.rootElement,
                cardModel,
            ]),
        );
        this.renderCards();
        this.setClickCardHandler();
        this.gameModel.onShuffle = () => this.renderCards();
        this.appendTimer();
        this.appendPopup();
    }

    createRootElement() {
        this.rootElement = document.createElement('div');
        this.rootElement.className = styles.root;
        this.rootElement.innerHTML = `<ul class="${styles.cards}"></ul>`;
    }

    appendTimer() {
        this.timer = new Timer(this.gameModel.timer);
        this.gameModel.timer.onChange = () => this.timer.render();
        this.rootElement.append(this.timer.rootElement);
    }

    appendPopup() {
        this.popup = new Popup({
            gameModel: this.gameModel,
            onClick: () => this.gameModel.onPopupClick(),
        });
        this.gameModel.onChange = () => this.popup.render();
        this.rootElement.append(this.popup.rootElement);
    }

    setClickCardHandler() {
        this.cardsElement.addEventListener('click', ({ target }) => {
            let currentElement = target;
            while (currentElement && currentElement !== this.cardsElement) {
                if (this.cardModelByRootElement.has(currentElement)) {
                    this.gameModel.onClickCard(this.cardModelByRootElement.get(currentElement));
                    return;
                }
                currentElement = currentElement.parentElement;
            }
        });
    }

    renderCards() {
        this.gameModel.cards.forEach(card =>
            this.cardsElement.append(this.cardByModel.get(card).rootElement),
        );
    }
}
