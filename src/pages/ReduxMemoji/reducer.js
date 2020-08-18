import {
    SET_CARDS_STATE,
    SET_CLOSING,
    SET_PLAY,
    SET_READY_TO_PLAY,
    SET_WIN,
    TIMER_TICK,
} from './actions.js';
import { CARD_STATE, GAME_STATE, TIMEOUT_IN_SECONDS, TIMER_STATE } from './constants.js';
import { closeDifferentCards, setStateForPairOfCards } from './utils.js';

export default (state, { type, payload }) => {
    switch (type) {
        case SET_PLAY: {
            const timer = {
                ...state.timer,
                timeLeft: TIMEOUT_IN_SECONDS,
                state: TIMER_STATE.PLAY,
                timerId: payload,
            };

            return { ...state, state: GAME_STATE.PLAY, timer };
        }

        case SET_CARDS_STATE: {
            const cardsWithOpen = state.cards.map((card, index) =>
                index === payload ? { ...card, state: CARD_STATE.OPEN } : card,
            );
            const cards = setStateForPairOfCards(closeDifferentCards(cardsWithOpen));

            return { ...state, cards };
        }

        case SET_WIN: {
            const timer = {
                ...state.timer,
                state: TIMER_STATE.STOP,
                timerId: null,
            };

            return { ...state, state: GAME_STATE.WIN, timer };
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
        case TIMER_TICK: {
            let gameState = state.state;
            const timer = { ...state.timer };
            timer.timeLeft -= 1;

            if (timer.timeLeft === 0) {
                timer.state = TIMER_STATE.STOP;
                gameState = GAME_STATE.LOSE;
                timer.timerId = null;
            }

            return { ...state, timer, state: gameState };
        }

        case SET_READY_TO_PLAY: {
            const cards = [...state.cards].sort(() => 0.5 - Math.random());

            return { ...state, cards, state: GAME_STATE.READY_TO_PLAY };
        }

        default:
            return state;
    }
};
