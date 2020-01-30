import cn from 'classnames';
import React from 'react';

import Card from '../Card/index.jsx';
import commonStyles from '../../commonStyles.css';
import gameData from './gameData.js';
import styles from './styles.css';

const test = cn(commonStyles.card, commonStyles.card_state_close);

const Game = () => {
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
