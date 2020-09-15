import React from 'react';
import { connect } from 'react-redux';

import { start, mouseDownBoxHandler, mouseUpBoxHandler, setTimer } from '../../actions.js';
import Boxes from '../Boxes/index.jsx';
import Modes from '../Modes/index.jsx';
import Audio from '../Audio/index.jsx';
import styles from './styles.css';

const Game = ({
    boxes,
    round,
    message,
    timer,
    sound,
    dispatchStart,
    dispatchMouseDownBoxHandler,
    dispatchMouseUpBoxHandler,
    dispatchSetTimer,
}) => (
    <div className={styles.game}>
        <Boxes
            boxes={boxes}
            dispatchMouseDownBoxHandler={dispatchMouseDownBoxHandler}
            dispatchMouseUpBoxHandler={dispatchMouseUpBoxHandler}
        />
        <section className={styles.round}>
            <h2 className={styles.round__header}>{round}</h2>
        </section>
        <Modes message={message} timer={timer} onChange={dispatchSetTimer} />
        <div className={styles.game__sound}>{sound && <Audio sound={sound} />}</div>
        <button className={styles.start} onClick={() => dispatchStart()} type="button">
            Start
        </button>
    </div>
);

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
    dispatchStart: start,
    dispatchMouseDownBoxHandler: mouseDownBoxHandler,
    dispatchMouseUpBoxHandler: mouseUpBoxHandler,
    dispatchSetTimer: setTimer,
})(Game);
