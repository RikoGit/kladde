import React from 'react';
import { connect } from 'react-redux';

import { start } from '../../actions.js';
// import Audio from '../Audio/index.jsx';
import Boxes from '../Boxes/index.jsx';
import Modes from '../Modes/index.jsx';
import styles from './styles.css';

const Game = ({ boxes, round, message, dispatchStart }) => (
    <div className={styles.game}>
        <Boxes boxes={boxes} />
        <section className={styles.round}>
            <h2 className={styles.round__header}>{round}</h2>
        </section>
        <Modes message={message} />
        <button className={styles.start} onClick={() => dispatchStart()} type="button">
            Start
        </button>
    </div>
);

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
    dispatchStart: start,
})(Game);
