export default class Card {
    constructor({ value, name }) {
        this.value = value;
        this.name = name;
        this.setState('close');
    }

    setState(state) {
        this.state = state;
    }

    /*    open() {
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

 */
}
