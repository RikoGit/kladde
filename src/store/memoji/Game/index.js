import Timer from '../Timer/index.js';
import Card from '../Card/index.js';
import icons from './icons.js';

const doubleIcons = [...icons, ...icons];

export default class Game {
    constructor({ timeoutInSeconds, onChange, onShuffle }) {
        this.cards = doubleIcons.map(icon => new Card(icon));
        this.setState('stop');
        this.onChange = onChange;
        this.onShuffle = onShuffle;
        this.timer = new Timer({
            timeoutInSeconds,
            onTimerEnd: () => this.onTimerEnd(),
        });
        this.shuffle();
    }

    static transitionDuration = 500;

    setState(state) {
        if (this.state === state) return;
        this.state = state;
        if (this.onChange) this.onChange();
    }

    shuffle() {
        this.cards.sort(() => 0.5 - Math.random());
        if (this.onShuffle) this.onShuffle();
    }

    onClickCard(card) {
        if (card.state !== 'close') {
            return;
        }
        if (this.state === 'win' || this.state === 'lose') {
            return;
        }
        if (this.state === 'stop') {
            this.start();
        }
        card.setState('open');
        this.closeDifferentCards();
        this.setStateForPairOfCards();
        if (this.cards.every(({ state }) => state === 'identical')) {
            this.stop('win');
        }
    }

    onTimerEnd() {
        this.stop('lose');
    }

    onPopupClick() {
        this.setState('stop');
        this.closeAllCards();
        setTimeout(() => this.shuffle(), Game.transitionDuration);
        this.timer.setDefaultTimeLeft();
    }

    closeAllCards() {
        this.cards.forEach(card => card.setState('close'));
    }

    start() {
        this.setState('play');
        this.timer.start();
    }

    restart() {
        this.reset();
        setTimeout(() => {
            this.start();
        }, this.transition);

        return this;
    }

    setStateForPairOfCards() {
        const openCards = this.cards.filter(card => card.state === 'open');

        if (openCards.length === 2) {
            if (openCards[0].value === openCards[1].value) {
                openCards.forEach(card => card.setState('identical'));
            } else {
                openCards.forEach(card => card.setState('different'));
            }
        }
    }

    closeDifferentCards() {
        this.cards
            .filter(card => card.state === 'different')
            .forEach(card => card.setState('close'));
    }

    stop(state) {
        this.setState(state);
        this.timer.stop();
    }
}
