import commonStyles from '../../commonStyles.css';

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
}
Card.CLASSES = {
    state: {
        open: commonStyles.card_state_open,
        close: commonStyles.card_state_close,
        identical: commonStyles.card_state_identical,
        different: commonStyles.card_state_different,
    },
};

export default Card;
