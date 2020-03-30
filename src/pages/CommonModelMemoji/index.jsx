import React, { useEffect, useRef } from 'react';

import MemojiWrapper from '../../components/MemojiWrapper/index.jsx';
import Game from './components/Game/index.js';

const init = rootElementRef => {
    rootElementRef.current.replaceWith(
        new Game({
            width: 4,
            timeout: 20000,
        }).rootElement,
    );
};

const CommonModelMemoji = () => {
    const rootElementRef = useRef();
    useEffect(() => init(rootElementRef), []);

    return (
        <MemojiWrapper>
            <div ref={rootElementRef} />
        </MemojiWrapper>
    );
};

export default CommonModelMemoji;
