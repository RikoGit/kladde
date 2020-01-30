import React from 'react';

import MemojiContent from '../../components/MemojiContent/index.jsx';
import init from '../../components/MemojiContent/components/Game/init.js';

class VanillaMemoji extends React.Component {
    componentDidMount() {
        init();
    }

    render() {
        return <MemojiContent />;
    }
}
export default VanillaMemoji;
