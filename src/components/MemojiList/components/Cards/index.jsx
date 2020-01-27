import cn from 'classnames';
import React from 'react';

import Card from '../Card/index.jsx';
import commonStyles from '../../commonStyles.css';
import styles from './styles.css';

const test = cn(commonStyles.card, commonStyles.card_state_close);

const Cards = () => (
    <div className={styles.content}>
        <ul className={styles.cards}>
            <li className={test} data-index="1" data-type="🐶">
                <Card data={{ type: '🐶', label: 'dog' }} />
            </li>
            <li className={test} data-index="2" data-type="🐞">
                <Card data={{ type: '🐞', label: 'ladybug' }} />
            </li>
            <li className={test} data-index="3" data-type="🐟">
                <Card data={{ type: '🐟', label: 'fish' }} />
            </li>
            <li className={test} data-index="4" data-type="🐸">
                <Card data={{ type: '🐸', label: 'frog' }} />
            </li>
            <li className={test} data-index="5" data-type="🐼">
                <Card data={{ type: '🐼', label: 'panda' }} />
            </li>
            <li className={test} data-index="6" data-type="🦄">
                <Card data={{ type: '🦄', label: 'unicorn' }} />
            </li>
            <li className={test} data-index="7" data-type="🐟">
                <Card data={{ type: '🐟', label: 'fish' }} />
            </li>
            <li className={test} data-index="8" data-type="🐼">
                <Card data={{ type: '🐼', label: 'panda' }} />
            </li>
            <li className={test} data-index="9" data-type="🦄">
                <Card data={{ type: '🦄', label: 'unicorn' }} />
            </li>
            <li className={test} data-index="10" data-type="🐶">
                <Card data={{ type: '🐶', label: 'dog' }} />
            </li>
            <li className={test} data-index="11" data-type="🐞">
                <Card data={{ type: '🐞', label: 'ladybug' }} />
            </li>
            <li className={test} data-index="12" data-type="🐸">
                <Card data={{ type: '🐸', label: 'frog' }} />
            </li>
        </ul>
    </div>
);

export default Cards;
