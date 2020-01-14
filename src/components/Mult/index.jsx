import cn from 'classnames';
import React from 'react';

import styles from './styles.css';

const Mult = () => (
    <div className={styles.canvas}>
        <div className={styles.box_front}>
            <div className={styles.sea} />
            <div className={styles.ship}>
                <div className={styles.smoke}>
                    <div className={cn({ [`${styles['smoke-1']}`]: true })} />
                    <div className={cn({ [`${styles['smoke-2']}`]: true })} />
                    <div className={cn({ [`${styles['smoke-3']}`]: true })} />
                </div>
                <div className={styles.ship_smokestack} />
                <div className={styles.ship_window} />
            </div>
            <div className={cn({ [`${styles['sun-wrapper']}`]: true })}>
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
            <div className={cn(styles.cloud, { [`${styles['cloud-1']}`]: true })} />
            <div className={cn(styles.cloud, { [`${styles['cloud-2']}`]: true })} />
            <div className={cn(styles.cloud, { [`${styles['cloud-3']}`]: true })} />
            <div className={cn(styles.cloud, { [`${styles['cloud-4']}`]: true })} />
        </div>
    </div>
);

export default Mult;
