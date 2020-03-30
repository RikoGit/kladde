import React, { useEffect } from 'react';

import init from './store/init.js';
import MemojiWrapper from '../../components/MemojiWrapper/index.jsx';
import Game from './components/Game/index.jsx';

const VanillaMemoji = () => {
    useEffect(init, []);

    return (
        <MemojiWrapper>
            <Game />
        </MemojiWrapper>
    );
};

export default VanillaMemoji;
