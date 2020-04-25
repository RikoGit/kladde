import Timer from '../Timer/index.js';
import Card from '../Card/index.js';
import icons from './icons.js';

const doubleIcons = [...icons, ...icons];

class Game {
    constructor({ timeout }) {
        this.cards = doubleIcons.map(icon => new Card(icon));
        this.state = 'stop';
        this.timer = new Timer({
            timeout,
            onTimerEnd: () => this.onTimerEnd(),
        });
        this.shuffle();
    }

    shuffle() {
        this.cards.sort(() => 0.5 - Math.random());
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
        this.state = 'lose';
        this.timer.stop();
        // this.popup.show(this.state);
    }

    onPopupClick() {
        // this.popup.hide();
        this.timer.stop();
        this.restart();
    }

    reset() {
        this.cards.forEach(card => card.close());

        return this;
    }

    start() {
        this.state = 'play';
        this.timer.show();

        return this;
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
        this.state = state;
        /*
        if (this.state === 'win') {
            this.timer.stop(); // остановим таймер
            // this.popup.show(this.state);
        }
        */
    }
}

export default Game;
