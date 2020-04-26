import styles from './styles.css';

class Card {
    constructor({ rootElementType = 'div', cardModel }) {
        this.rootElement = document.createElement(rootElementType);
        this.rootElement.className = styles.root;
        this.rootElement.innerHTML = [
            `<div class="${styles.card__face}" aria-label="${cardModel.name}" role="img">${cardModel.value}</div>`,
            `<div class="${styles.card__back}"></div>`,
        ].join('');
        this.cardModel = cardModel;

        this.render();
    }

    render() {
        this.rootElement.classList.remove(styles.card_state_close);
        this.rootElement.classList.remove(styles.card_state_open);
        this.rootElement.classList.remove(styles.card_state_identical);
        this.rootElement.classList.remove(styles.card_state_different);

        this.rootElement.classList.add(styles[`card_state_${this.cardModel.state}`]);
    }
}

export default Card;
