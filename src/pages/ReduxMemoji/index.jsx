import React from 'react';
import { Provider } from 'react-redux';

import Game from './components/Game/index.jsx';
import MemojiWrapper from '../../components/MemojiWrapper/index.jsx';
import store from './store.js';

const Memoji = () => {
    return (
        <Provider store={store}>
            <MemojiWrapper>
                <Game />
            </MemojiWrapper>
        </Provider>
    );
};

export default Memoji;
