export default class Card {
    constructor({ value, name }) {
        this.value = value;
        this.name = name;
        this.setState('close');
    }

    setState(state) {
        this.state = state;
    }
}
