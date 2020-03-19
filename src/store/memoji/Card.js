class Card {
    constructor({ type, index, state }) {
        this.type = type;
        this.index = index;
        this.state = state;
    }

    open() {
        this.state = 'open';

        return this;
    }

    close() {
        if (this.state === 'close') {
            return undefined;
        }
        this.state = 'close';

        return this;
    }

    setStateIdentical() {
        this.state = 'identical';

        return this;
    }

    setStateDifferent() {
        this.state = 'different';

        return this;
    }
}

export default Card;
