import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import boxesData from './components/Boxes/boxesData.js';
import reducer from './reducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const boxes = boxesData.map(box => {
    return { ...box, isActive: false };
});
const initialState = {
    boxes,
    boxIdsInTheRound: [],
    round: 0,
    isNeedClickHandler: false,
    timer: '1000',
    sound: '',
    message: '',
    clickNumberInTheRound: 0,
};

export default createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));
