import Timer from '../Timer/index.js';
import Card from '../Card/index.js';
import icons from './icons.js';

const doubleIcons = [...icons, ...icons];

class Game {
    constructor({ timeout }) {
        this.cards = doubleIcons.map(icon => new Card(icon));
        this.timer = new Timer({
            timeout,
            onTimerEnd: () => this.onTimerEnd(),
        });
        this.shuffle();
    }

    shuffle() {
        this.cards.sort(() => 0.5 - Math.random());
    }

    onClickCard() {
        this.cardsContainer.addEventListener(
            'click',
            event => {
                const { target } = event;
                if (target.classList.contains('card__back') && this.state === 'ready') {
                    this.timer.start(); // запустили таймер
                    this.cards[target.parentNode.dataset.index - 1].open(); // открыли текущую карту
                    this.closeDifferentCards() // закрыли пару разных карт, если такие есть
                        .setStateCards() // добавили state(different/identical) паре открытых карт
                        .stop();
                }
            },
            true,
        );

        return this;
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
        // this.sortCardsByRandom();
        this.state = 'ready';
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

    // метод выделения пары - одинаковая или нет
    setStateCards() {
        const openCards = this.cards.filter(card => card.state === 'open');

        if (openCards.length === 2) {
            if (openCards[0].type === openCards[1].type) {
                openCards.forEach(card => card.setStateIdentical());
            } else {
                openCards.forEach(card => card.setStateDifferent());
            }
        }

        return this;
    }

    closeDifferentCards() {
        this.cards.filter(card => card.state === 'different').forEach(card => card.close());

        return this;
    }

    stop() {
        if (this.cards.every(card => card.state === 'identical')) {
            this.state = 'win';
        }

        if (this.state === 'win') {
            this.timer.stop(); // остановим таймер
            // this.popup.show(this.state);
        }

        return this;
    }
}

export default Game;
