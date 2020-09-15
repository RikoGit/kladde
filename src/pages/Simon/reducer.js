import {
    SET_START_STATE,
    END,
    SET_SOUND,
    SET_TIMER,
    SET_ISACTIVE_BOX,
    SET_ROUND,
    SET_CLICK_NUMBER_IN_THE_ROUND,
    SET_IS_NEED_CLICK_HANDLER,
} from './actions.js';

export default (state, { type, payload }) => {
    switch (type) {
        case SET_START_STATE: {
            return {
                ...state,
                message: '',
                isNeedClickHandler: false,
                boxIdsInTheRound: [],
                round: 0,
                clickNumberInTheRound: 0,
            };
        }
        case END: {
            return {
                ...state,
                message: `Sorry, you lost after ${state.round} rounds!`,
                round: 0,
                isNeedClickHandler: false,
            };
        }
        case SET_SOUND: {
            const sound = payload || '';

            return { ...state, sound };
        }
        case SET_TIMER: {
            return { ...state, timer: payload };
        }
        case SET_ROUND: {
            const randomNumber = Math.floor(Math.random() * state.boxes.length);
            const boxIdsInTheRound = [...state.boxIdsInTheRound];
            boxIdsInTheRound.push(state.boxes[randomNumber].id);
            const round = boxIdsInTheRound.length;

            return {
                ...state,
                boxIdsInTheRound,
                round,
                isNeedClickHandler: false,
                clickNumberInTheRound: 0,
            };
        }
        case SET_CLICK_NUMBER_IN_THE_ROUND: {
            return { ...state, clickNumberInTheRound: state.clickNumberInTheRound + 1 };
        }

        case SET_IS_NEED_CLICK_HANDLER: {
            return { ...state, isNeedClickHandler: payload };
        }

        case SET_ISACTIVE_BOX: {
            const boxes = state.boxes.map(box =>
                box.id === payload.id ? { ...box, isActive: payload.isActive } : { ...box },
            );
            return { ...state, boxes };
        }

        default:
            return state;
    }
};
