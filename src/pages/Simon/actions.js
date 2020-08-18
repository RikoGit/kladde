export const SET_START_STATE = 'SET_START_STATE';
export const START_ROUND = 'START_ROUND';
export const SET_ROUND = 'SET_ROUND';
export const END = 'END';
export const SET_SOUND = 'SET_SOUND';
export const SET_CLICK_NUMBER_IN_THE_ROUND = 'SET_CLICK_NUMBER_IN_THE_ROUND';
export const SET_ISACTIVE_BOX = 'SET_ISACTIVE_BOX';
export const SET_IS_NEED_CLICK_HANDLER = 'SET_IS_NEED_CLICK_HANDLER';

export const setStartState = () => ({ type: SET_START_STATE });
export const end = () => ({ type: END });
export const setSound = sound => ({ type: SET_SOUND, payload: sound });
export const setRound = () => ({ type: SET_ROUND });
export const setClickNumberInTheRound = () => ({ type: SET_CLICK_NUMBER_IN_THE_ROUND });
export const setIsActiveBox = (id, isActive) => ({
    type: 'SET_ISACTIVE_BOX',
    payload: { id, isActive },
});
export const setIsNeedClickHandler = isActive => ({
    type: SET_IS_NEED_CLICK_HANDLER,
    payload: isActive,
});

export const setActiveBox = id => (dispatch, getState) => {
    dispatch(setIsActiveBox(id, true));
    const state = getState();
    dispatch(setSound(state.boxes.filter(box => box.id === id)[0].sound));
    setTimeout(() => {
        dispatch(setIsActiveBox(id, false));
        dispatch(setSound());
    }, state.timer - 100);
};

export const startRound = () => (dispatch, getState) => {
    dispatch(setRound());
    const state = getState();
    setTimeout(() => {
        dispatch(setSound());
        state.boxIdsInTheRound.forEach((id, index) =>
            setTimeout(() => dispatch(setActiveBox(id)), state.timer * index),
        );
    }, 600);
    setTimeout(() => {
        dispatch(setIsNeedClickHandler(true));
    }, state.timer * state.boxIdsInTheRound.length + 600);
};

export const start = () => dispatch => {
    dispatch(setStartState());
    dispatch(startRound());
};

export const mouseDownBoxHandler = id => (dispatch, getState) => {
    const state = getState();
    if (!state.isNeedClickHandler) return;

    dispatch(setSound());
    dispatch(setIsActiveBox(id, true));
    const { sound } = state.boxes.filter(box => box.id === id)[0];
    setTimeout(() => dispatch(setSound(sound)), 1);
};

export const mouseUpBoxHandler = id => (dispatch, getState) => {
    const state = getState();
    if (!state.isNeedClickHandler) return;

    dispatch(setIsActiveBox(id, false)); // нужно ли обновить состояние?

    if (state.boxIdsInTheRound[state.clickNumberInTheRound] !== id) {
        dispatch(end());

        return;
    }
    if (state.clickNumberInTheRound === state.round - 1) {
        dispatch(startRound());
    } else dispatch(setClickNumberInTheRound());
};
