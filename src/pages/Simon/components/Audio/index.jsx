import React, { useEffect, useRef } from 'react';

import styles from './styles.css';

const Audio = ({ sound }) => {
    const audioRef = useRef(null);
    useEffect(() => sound && audioRef.current.play(), sound);

    return (
        <div className={styles.sound}>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <audio ref={audioRef}>
                <source src={`/sounds/${sound}.ogg`} type="audio/ogg" />
                <source src={`/sounds/${sound}.mp3`} type="audio/mpeg" />
            </audio>
        </div>
    );
};

export default Audio;
