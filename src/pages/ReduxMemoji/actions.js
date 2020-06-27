import { TRANSITION_DURATION, GAME_STATE, CARD_STATE } from './constants.js';

export const SET_CARDS_STATE = 'SET_CARDS_STATE';
export const SET_CLOSING = 'SET_CLOSING';
export const SET_PLAY = 'SET_PLAY';
export const SET_READY_TO_PLAY = 'SET_READY_TO_PLAY';
export const SET_WIN = 'SET_WIN';
export const TIMER_TICK = 'TIMER_TICK';

export const setCardsState = () => ({ type: SET_CARDS_STATE });
export const setClosing = () => ({ type: SET_CLOSING });
export const setPlay = timerId => ({ type: SET_READY_TO_PLAY, payload: timerId });
export const setReadyToPlay = () => ({ type: SET_READY_TO_PLAY });
export const setWin = () => ({ type: SET_WIN });
export const timerTick = () => ({ type: TIMER_TICK });

export const tick = () => (dispatch, getState) => {
    const state = getState();

    if (state.timer.timeLeft === 1) {
        clearInterval(state.timer.timerId);
    }
    dispatch(timerTick());
};

export const cardClick = index => (dispatch, getState) => {
    const state = getState();
    const card = state.cards[index];

    if (card.state !== CARD_STATE.CLOSE) {
        return;
    }
    if (state.state !== GAME_STATE.READY_TO_PLAY && state.state !== GAME_STATE.PLAY) {
        return;
    }
    if (state.state === GAME_STATE.READY_TO_PLAY) {
        if (state.timer.timerId !== null) {
            clearInterval(state.timer.timerId);
        }
        const timerId = setInterval(() => {
            dispatch(tick());
        }, TRANSITION_DURATION);

        dispatch(setPlay(timerId));
    }
    dispatch(setCardsState(index));
    if (state.cards.every(({ state: cardState }) => cardState === CARD_STATE.IDENTICAL)) {
        if (state.timer.timerId) {
            clearInterval(state.timer.timerId);
        }
        dispatch(setWin());
    }
};

export const popupClick = () => dispatch => {
    dispatch(setClosing());
    setTimeout(() => {
        dispatch(setReadyToPlay());
    }, TRANSITION_DURATION);
};
