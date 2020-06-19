import React, { useMemo } from 'react';
import { Provider } from 'react-redux';

import Game from './components/Game/index.jsx';
import GameModel from '../../store/memoji/Game/index.js';
import MemojiWrapper from '../../components/MemojiWrapper/index.jsx';
import store from './store.js';

const Memoji = () => {
    const gameModel = useMemo(() => new GameModel({ timeoutInSeconds: 20 }), []);

    return (
        <Provider store={store}>
            <MemojiWrapper>
                <Game model={gameModel} />
            </MemojiWrapper>
        </Provider>
    );
};

export default Memoji;
