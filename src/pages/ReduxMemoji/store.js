import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { GAME_STATE, TIMER_STATE, TIMEOUT_IN_SECONDS, CARD_STATE } from './constants.js';
import icons from '../../store/memoji/Game/icons.js';
import reducer from './reducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const cards = [...icons, ...icons]
    .map(({ name, value }) => ({
        state: CARD_STATE.CLOSE,
        name,
        value,
    }))
    .sort(() => 0.5 - Math.random());

const initialState = {
    cards,
    state: GAME_STATE.READY_TO_PLAY,
    timer: { state: TIMER_STATE.STOP, timeLeft: TIMEOUT_IN_SECONDS, timerId: null },
};

export default createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));
