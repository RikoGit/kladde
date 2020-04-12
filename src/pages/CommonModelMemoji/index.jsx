import React, { useEffect, useRef } from 'react';

import MemojiWrapper from '../../components/MemojiWrapper/index.jsx';
import GameModel from '../../store/memoji/Game/index.js';
import Game from './components/Game/index.js';

const init = rootElement => {
    const game = new GameModel({ timeout: 20000 });
    rootElement.replaceWith(new Game(game).rootElement);
};

const CommonModelMemoji = () => {
    const rootElementRef = useRef();
    useEffect(() => init(rootElementRef.current), []);

    return (
        <MemojiWrapper>
            <div ref={rootElementRef} />
        </MemojiWrapper>
    );
};

export default CommonModelMemoji;
