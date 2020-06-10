import React, { useState, useEffect, useMemo } from 'react';

import Card from '../Card/index.jsx';
import Timer from '../Timer/index.jsx';
import Popup from '../Popup/index.jsx';
import styles from './styles.css';

const Game = ({ model }) => {
    const initialModelPlainObject = useMemo(() => model.toPlainObject(), []);
    const [modelPlainObject, setModelPlainObject] = useState(initialModelPlainObject);

    useEffect(() => {
        const onChangeHandler = () => {
            setModelPlainObject(model.toPlainObject());
        };
        /* eslint-disable no-param-reassign */
        model.onChange = onChangeHandler;
        model.cards.forEach(card => {
            card.onChange = onChangeHandler;
        });
        model.timer.onChange = onChangeHandler;
        /* eslint-enable no-param-reassign */
    }, []);

    const cards = modelPlainObject.cards.map((card, index) => (
        <Card
            as="li"
            state={card.state}
            key={`${index + 1}${card.value}`}
            name={card.name}
            value={card.value}
            onClick={() => model.onClickCard(model.cards[index])}
        />
    ));

    return (
        <div className={styles.root}>
            <ul className={styles.cards}>{cards}</ul>
            <Timer timerModel={modelPlainObject.timer} />
            <Popup gameModel={model} state={modelPlainObject.state} />
        </div>
    );
};

export default Game;
