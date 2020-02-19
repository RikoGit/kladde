import cn from 'classnames';
import React from 'react';

import Card from '../Card/index.jsx';
import commonStyles from '../../commonStyles.css';
import gameData from './gameData.js';
import styles from './styles.css';

const test = cn(commonStyles.card, commonStyles.card_state_close);

const Game = () => {
    /*
    const cardsContainer = document.querySelector(`.${styles.cards}`);
    const cardElements = [...cardsContainer.querySelectorAll(`.${commonStyles.card}`)];

    const [cardsContainer, setCardsContainer] = useState(cardsContainer);
    const [width, setWidht] = useState(4);
    const [cards, setCards] = useState(cardElements.map(
        card =>
            new Card({
                domElement: card,
                type: card.dataset.type,
                index: card.dataset.index,
                state: 'close',
            }),
    ););
    const [state, setState] = useState('');
    const [transition, setTransition] = useState(500);
    const [gridAreas, setGridAreas] = useState([]);

    // const [todos, setTodos] = useState([{ text: 'Изучить хуки' }]);
*/
    /*
            constructor({ cardsContainer, cardElements, width, timeout }) {
            this.cardsContainer = cardsContainer;
            this.width = width;
            this.cards = cardElements.map(
                card =>
                    new Card({
                        domElement: card,
                        type: card.dataset.type,
                        index: card.dataset.index,
                        state: 'close',
                    }),
            );
            this.timer = new Timer({
                timeout,
                onTimerEnd: () => this.onTimerEnd(),
                parentNode: cardsContainer.parentNode,
            });
            this.popup = new Popup({
                onClick: () => this.onPopupClick(),
                parentNode: cardsContainer.parentNode.parentNode,
            });
            this.state = '';
            this.transition = 500;
            this.gridAreas = [];

            this.setTransition()
                .setGridAreaCards()
                .onClickCard()
                .start();
        }

    */

    /*
    cardsContainer,
    cardElements,
    width: 4,
    timeout: 20000,
    */

    const gameItem = gameData.map(card => (
        <li className={test} key={card.index} data-index={card.index} data-type={card.type}>
            <Card data={{ type: card.type, label: card.label }} />
        </li>
    ));

    return (
        <div className={styles.content}>
            <ul className={styles.cards}>{gameItem}</ul>
        </div>
    );
};

export default Game;
