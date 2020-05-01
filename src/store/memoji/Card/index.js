export default class Card {
    constructor({ value, name, onChange }) {
        this.value = value;
        this.name = name;
        this.onChange = onChange;
        this.setState('close');
    }

    setState(state) {
        this.state = state;
    }

    get state() {
        return this.innerState;
    }

    set state(state) {
        if (this.innerState === state) return;
        this.innerState = state;
        if (this.onChange) this.onChange();
    }
}
