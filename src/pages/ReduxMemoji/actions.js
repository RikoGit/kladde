import { TRANSITION_DURATION, GAME_STATE, CARD_STATE } from './constants.js';

export const CARD_CLICK = 'CARD_CLICK';
export const SET_CLOSING = 'SET_CLOSING';
export const SET_PLAY = 'SET_PLAY';
export const TICK = 'TICK';
export const SET_READY_TO_PLAY = 'SET_READY_TO_PLAY';

export const tick = () => ({ type: TICK });

export const setPlay = timerId => ({ type: SET_READY_TO_PLAY, payload: timerId });

// export const cardClick = index => ({ type: CARD_CLICK, payload: index });
export const cardClick = index => (dispatch, getState) => {
    const state = getState();
    const card = state.cards[index];
    let timerId = null;

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
        timerId = setInterval(() => {
            dispatch(tick());
        }, TRANSITION_DURATION);

        dispatch(setPlay(timerId));
    }
    // dispatch(setCardsState());
    if (state.cards.every(({ state: cardState }) => cardState === CARD_STATE.IDENTICAL)) {
        if (state.timer.timerId) {
            clearInterval(state.timer.timerId);
        }
        // dispatch(setWin());
    }
};

export const setReadyToPlay = () => ({ type: SET_READY_TO_PLAY });

export const setClosing = () => ({ type: SET_CLOSING });

export const popupClick = () => dispatch => {
    dispatch(setClosing());
    setTimeout(() => {
        dispatch(setReadyToPlay());
    }, TRANSITION_DURATION);
};
