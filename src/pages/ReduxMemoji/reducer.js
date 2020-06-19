import { CARD_CLICK, SET_CLOSING, TICK, SET_READY_TO_PLAY } from './actions.js';
import { CARD_STATE, GAME_STATE, TIMEOUT_IN_SECONDS } from './constants.js';

export default (state, { type, payload }) => {
    switch (type) {
        case CARD_CLICK: {
            const card = state.cards[payload];
            let gameState = state.state;

            if (card.state !== CARD_STATE.CLOSE) {
                return state;
            }
            if (state.state !== GAME_STATE.READY_TO_PLAY && state.state !== GAME_STATE.PLAY) {
                return state;
            }
            if (state.state === GAME_STATE.READY_TO_PLAY) {
                gameState = GAME_STATE.PLAY;
                if (state.timer.timerId) {
                    clearInterval(state.timer.timerId);
                }
            }

            return { state: gameState };
        }

        case SET_CLOSING: {
            const timer = { ...state.timer, timeLeft: TIMEOUT_IN_SECONDS };
            const cards = state.cards.map(card => ({ ...card, state: CARD_STATE.CLOSE }));

            return {
                cards,
                state: GAME_STATE.CLOSING,
                timer,
            };
        }
        case TICK:
            return state;

        case SET_READY_TO_PLAY: {
            const cards = [...state.cards].sort(() => 0.5 - Math.random());

            return { ...state, cards, state: GAME_STATE.READY_TO_PLAY };
        }

        default:
            return state;
    }
};
