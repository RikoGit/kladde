import styles from './styles.css';

class Card {
    constructor({ rootElementType = 'div', card: { value, name } }) {
        this.rootElement = document.createElement(rootElementType);
        this.rootElement.className = styles.root;
        this.rootElement.innerHTML = [
            `<div class="${styles.card__face}" aria-label="${name}" role="img">${value}</div>`,
            `<div class="${styles.card__back}"></div>`,
        ].join('');

        // this.domElement = domElement;
        // this.type = type;
        // this.index = index;
        // this.state = state;
        // this.gridArea = gridArea;
        this.render();
    }

    render() {
        this.rootElement.classList.add(styles.card_state_close);
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
            return undefined;
        }
        this.domElement.classList.remove(Card.CLASSES.state.open);
        this.domElement.classList.add(Card.CLASSES.state.close);
        this.domElement.classList.remove(Card.CLASSES.state.identical);
        this.domElement.classList.remove(Card.CLASSES.state.different);
        this.state = 'close';

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

    static CLASSES = {
        state: {
            open: styles.card_state_open,
            close: styles.card_state_close,
            identical: styles.card_state_identical,
            different: styles.card_state_different,
        },
    };
}

export default Card;
