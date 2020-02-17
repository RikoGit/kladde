import React, { useState } from 'react';

import styles from '../../styles.css';

const MemeContent = () => {
    const [form, setForm] = useState({
        topText: '',
        bottomText: '',
        randomImg: 'http://i.imgflip.com/1bij.jpg',
        allMemeImgs: [],
    });

    /* fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(response => setForm({ ...form, allMemeImgs: response.data.memes }));
    */

    const handleChange = event => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <div>
            <form className={styles.meme_form}>
                <input type="text" name="topText" placeholder="topText" onChange={handleChange} />
                <input
                    type="text"
                    name="bottomText"
                    placeholder="bottomText"
                    onChange={handleChange}
                />
                <button type="button">Gen</button>
                <div className={styles.meme}>
                    <img align="center" src={form.randomImg} alt="" />
                    <h2 className={styles.top}>{form.topText}</h2>
                    <h2 className={styles.bottom}>{form.bottomText}</h2>
                </div>
            </form>
        </div>
    );
};

export default MemeContent;
