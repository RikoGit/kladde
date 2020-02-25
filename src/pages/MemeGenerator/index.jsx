import React from 'react';

import MemeHeader from './components/MemeHeader/index.jsx';
import MemeContent from './components/MemeContent/index.jsx';
import styles from './styles.css';

const MemeGenerator = () => (
    <div className={styles.root}>
        <MemeHeader />
        <MemeContent />
    </div>
);

export default MemeGenerator;
