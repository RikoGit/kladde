import React from 'react';

import init from './store/init.js';
import MemojiWrapper from '../../components/MemojiWrapper/index.jsx';
import Game from './components/Game/index.jsx';

class VanillaMemoji extends React.Component {
    componentDidMount() {
        init();
    }

    render() {
        return (
            <MemojiWrapper>
                <Game />
            </MemojiWrapper>
        );
    }
}

export default VanillaMemoji;
