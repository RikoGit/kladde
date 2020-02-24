import cn from 'classnames';
import React from 'react';

import Card from '../Card/index.jsx';
import styles from '../../styles.css';
import gameData from './gameData.js';

const test = cn(styles.card, styles.card_state_close);

const Game = () => {
    const gameItems = gameData.map((card, index) => (
        <Card
            as="li"
            key={`${index + 1}${card.type}`}
            className={test}
            index={index}
            type={card.type}
            label={card.label}
        />
    ));

    return (
        <div className={styles.content}>
            <ul className={styles.cards}>{gameItems}</ul>
        </div>
    );
};

export default Game;
