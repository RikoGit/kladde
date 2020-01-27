import React from 'react';

import MemojiList from '../../components/MemojiList/index.jsx';
import jstest from './script.js';

class VanillaMemoji extends React.Component {
    componentDidMount() {
        jstest();
    }

    render() {
        return <MemojiList />;
    }
}
export default VanillaMemoji;
