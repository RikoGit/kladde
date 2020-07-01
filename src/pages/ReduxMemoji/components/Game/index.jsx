import React from 'react';
import { connect } from 'react-redux';

import { cardClick, popupClick } from '../../actions.js';
import Card from '../Card/index.jsx';
import Timer from '../Timer/index.jsx';
import Popup from '../Popup/index.jsx';
import styles from './styles.css';

const Game = ({ cards, state, timer, dispatchCardClick, dispatchPopupClick }) => {
    // const initialModelPlainObject = useMemo(() => model.toPlainObject(), []);
    // const [modelPlainObject, setModelPlainObject] = useState(initialModelPlainObject);

    /* 
    useEffect(() => {
        const onChangeHandler = () => {
            setModelPlainObject(model.toPlainObject());
        };
        model.onChange = onChangeHandler;
        model.cards.forEach(card => {
            card.onChange = onChangeHandler;
        });
        model.timer.onChange = onChangeHandler;
    }, []);
    */

    const cardsElements = cards.map((card, index) => (
        <Card
            as="li"
            state={card.state}
            key={`${index + 1}${card.value}`}
            name={card.name}
            value={card.value}
            onClick={() => dispatchCardClick(index)}
        />
    ));

    return (
        <div className={styles.root}>
            <ul className={styles.cards}>{cardsElements}</ul>
            <Timer timerModel={timer} />
            <Popup state={state} onClick={dispatchPopupClick} />
        </div>
    );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
    dispatchCardClick: cardClick,
    dispatchPopupClick: popupClick,
})(Game);
