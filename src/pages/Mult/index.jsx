import cn from 'classnames';
import React from 'react';

import styles from './styles.css';

const Mult = () => (
    <div className={styles.canvas}>
        <div className={styles.box_front}>
            <div className={styles.sea} />
            <div className={styles.ship}>
                <div className={styles.smoke}>
                    <div className={styles.smoke1} />
                    <div className={styles.smoke2} />
                    <div className={styles.smoke3} />
                </div>
                <div className={styles.ship_smokestack} />
                <div className={styles.ship_window} />
            </div>
            <div className={styles.sunWrapper}>
                <div className={styles.sun}>
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
            <div className={cn(styles.cloud, styles.cloud1)} />
            <div className={cn(styles.cloud, styles.cloud2)} />
            <div className={cn(styles.cloud, styles.cloud3)} />
            <div className={cn(styles.cloud, styles.cloud4)} />
        </div>
    </div>
);

export default Mult;
