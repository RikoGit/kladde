import React, { useMemo } from 'react';

import MemojiWrapper from '../../components/MemojiWrapper/index.jsx';
import GameModel from '../../store/memoji/Game/index.js';
import Game from './components/Game/index.jsx';

const Memoji = () => {
    const gameModel = useMemo(() => new GameModel({ timeoutInSeconds: 20 }), []);

    return (
        <MemojiWrapper>
            <Game model={gameModel} />
        </MemojiWrapper>
    );
};

export default Memoji;
