import styles from './styles.css';

export default class Card {
    constructor({ rootElementType = 'div', cardModel }) {
        this.rootElement = document.createElement(rootElementType);
        this.rootElement.innerHTML = [
            `<div class="${styles.card__face}" aria-label="${cardModel.name}" role="img">${cardModel.value}</div>`,
            `<div class="${styles.card__back}"></div>`,
        ].join('');
        this.cardModel = cardModel;

        this.render();
    }

    render() {
        this.rootElement.className = `${styles.root} ${
            styles[`card_state_${this.cardModel.state}`]
        }`;
    }
}
