import cn from 'classnames';
import React from 'react';

import styles from './styles.css';

const Harvest = () => (
    <div className={styles.root}>
        <div className={styles.content}>
            <input
                id="harvest-radio__1"
                name="harvest-radio"
                type="radio"
                className={cn(styles['harvest-radio'], styles['harvest-radio_type_1'])}
                defaultChecked
            />
            <label htmlFor="harvest-radio__1" />
            <input
                id="harvest-radio__2"
                name="harvest-radio"
                type="radio"
                className={cn(styles['harvest-radio'], styles['harvest-radio_type_2'])}
            />
            <label htmlFor="harvest-radio__2" />
            <input
                id="harvest-radio__3"
                name="harvest-radio"
                type="radio"
                className={cn(styles['harvest-radio'], styles['harvest-radio_type_3'])}
            />
            <label htmlFor="harvest-radio__3" />
            <ul className={styles['harvest-list']}>
                <li className={styles.harvest}>
                    <input
                        id="harvest__checkbox-1"
                        name="harvest__checkbox"
                        type="checkbox"
                        className={styles.harvest__checkbox}
                    />
                    <label htmlFor="harvest__checkbox-1" className={styles.harvest__label}>
                        <img
                            alt=""
                            src="images/harvest/5.jpg"
                            className={styles.harvest__preview}
                            width="200"
                        />
                        <span className={styles.harvest__info}>
                            <img alt="" src="images/harvest/5.jpg" />
                            <span className={styles.harvest__text}>
                                По содержанию каротина морковь уступает лишь сладкому перцу. Морковь
                                и морковный сок назначают больным с гипо- и авитаминозом А.
                                Экспериментально установлено, что морковь активизирует
                                внутриклеточные окислительно-восстановительные процессы, регулирует
                                углеводный обмен, обладает антисептическим, противовоспалительным,
                                обезболивающим и ранозаживляющим свойствами. Лечение морковным соком
                                рекомендуют при заболеваниях, связанных с нарушением минерального
                                обмена (жёлчнокаменная болезнь, метаболические полиартриты),
                                показано употребление морковного сока в первые дни после инфаркта
                                миокарда, а также для беременных женщин, кормящих матерей, детей.
                                Свежий морковный сок используется также при анемии, гипоацидных
                                гастритах. Однако свежая морковь и морковный сок противопоказаны при
                                обострении язвенной болезни и энтеритах.
                            </span>
                        </span>
                    </label>
                    <div className={styles.harvest__photo}>
                        <img alt="" src="images/harvest/5.jpg" />
                    </div>
                </li>
                <li className={styles.harvest}>
                    <input
                        id="harvest__checkbox-2"
                        name="harvest__checkbox"
                        type="checkbox"
                        className={styles.harvest__checkbox}
                    />
                    <label htmlFor="harvest__checkbox-2" className={styles.harvest__label}>
                        <img
                            alt=""
                            src="images/harvest/1.jpg"
                            className={styles.harvest__preview}
                        />
                        <span className={styles.harvest__info}>
                            <img alt="" src="images/harvest/1.jpg" />
                            <span className={styles.harvest__text}>
                                По содержанию каротина морковь уступает лишь сладкому перцу.
                            </span>
                        </span>
                    </label>
                    <div className={styles.harvest__photo}>
                        <img alt="" src="images/harvest/1.jpg" />
                    </div>
                </li>
                <li className={styles.harvest}>
                    <input
                        id="harvest__checkbox-3"
                        name="harvest__checkbox"
                        type="checkbox"
                        className={styles.harvest__checkbox}
                    />
                    <label htmlFor="harvest__checkbox-3" className={styles.harvest__label}>
                        <img
                            alt=""
                            src="images/harvest/9.jpg"
                            className={styles.harvest__preview}
                            width="150"
                        />
                        <span className={styles.harvest__info}>
                            <img alt="" src="images/harvest/9.jpg" />
                            <span className={styles.harvest__text}>
                                По содержанию каротина морковь уступает лишь сладкому перцу. Морковь
                                и морковный сок назначают больным с гипо- и авитаминозом А.
                            </span>
                        </span>
                    </label>
                    <div className={styles.harvest__photo}>
                        <img alt="" src="images/harvest/9.jpg" />
                    </div>
                </li>
                <li className={styles.harvest}>
                    <input
                        id="harvest__checkbox-4"
                        name="harvest__checkbox"
                        type="checkbox"
                        className={styles.harvest__checkbox}
                    />
                    <label htmlFor="harvest__checkbox-4" className={styles.harvest__label}>
                        <img
                            alt=""
                            src="images/harvest/3.jpg"
                            className={styles.harvest__preview}
                            width="180"
                        />
                        <span className={styles.harvest__info}>
                            <img alt="" src="images/harvest/3.jpg" />
                            <span className={styles.harvest__text}>
                                По содержанию каротина морковь уступает лишь сладкому перцу. Морковь
                                и морковный сок назначают больным с гипо- и авитаминозом А.
                                Экспериментально установлено, что морковь активизирует
                                внутриклеточные окислительно-восстановительные процессы, регулирует
                                углеводный обмен, обладает антисептическим, противовоспалительным,
                                обезболивающим и ранозаживляющим свойствами.
                            </span>
                        </span>
                    </label>
                    <div className={styles.harvest__photo}>
                        <img alt="" src="images/harvest/3.jpg" />
                    </div>
                </li>
                <li className={styles.harvest}>
                    <input
                        id="harvest__checkbox-5"
                        name="harvest__checkbox"
                        type="checkbox"
                        className={styles.harvest__checkbox}
                    />
                    <label htmlFor="harvest__checkbox-5" className={styles.harvest__label}>
                        <img
                            alt=""
                            src="images/harvest/2.jpg"
                            className={styles.harvest__preview}
                        />
                        <span className={styles.harvest__info}>
                            <img alt="" src="images/harvest/2.jpg" />
                            <span className={styles.harvest__text}>
                                По содержанию каротина морковь уступает лишь сладкому перцу. Морковь
                                и морковный сок назначают больным с гипо- и авитаминозом А.
                                Экспериментально установлено, что морковь активизирует
                                внутриклеточные окислительно-восстановительные процессы, регулирует
                                углеводный обмен, обладает антисептическим, противовоспалительным,
                                обезболивающим и ранозаживляющим свойствами. Лечение морковным соком
                                рекомендуют при заболеваниях, связанных с нарушением минерального
                                обмена (жёлчнокаменная болезнь, метаболические полиартриты),
                                показано употребление морковного сока в первые дни после инфаркта
                                миокарда, а также для беременных женщин, кормящих матерей, детей.
                            </span>
                        </span>
                    </label>
                    <div className={styles.harvest__photo}>
                        <img alt="" src="images/harvest/2.jpg" />
                    </div>
                </li>
                <li className={styles.harvest}>
                    <input
                        id="harvest__checkbox-6"
                        name="harvest__checkbox"
                        type="checkbox"
                        className={styles.harvest__checkbox}
                    />
                    <label htmlFor="harvest__checkbox-6" className={styles.harvest__label}>
                        <img
                            alt=""
                            src="images/harvest/11.jpeg"
                            className={styles.harvest__preview}
                        />
                        <span className={styles.harvest__info}>
                            <img alt="" src="images/harvest/11.jpeg" />
                            <span className={styles.harvest__text}>
                                По содержанию каротина морковь уступает лишь сладкому перцу. Морковь
                                и морковный сок назначают больным с гипо- и авитаминозом А.
                                Экспериментально установлено, что морковь активизирует
                                внутриклеточные окислительно-восстановительные процессы, регулирует
                                углеводный обмен, обладает антисептическим, противовоспалительным,
                                обезболивающим и ранозаживляющим свойствами.
                            </span>
                        </span>
                    </label>
                    <div className={styles.harvest__photo}>
                        <img alt="" src="images/harvest/11.jpeg" />
                    </div>
                </li>
                <li className={styles.harvest}>
                    <input
                        id="harvest__checkbox-7"
                        name="harvest__checkbox"
                        type="checkbox"
                        className={styles.harvest__checkbox}
                    />
                    <label htmlFor="harvest__checkbox-7" className={styles.harvest__label}>
                        <img
                            alt=""
                            src="images/harvest/6.jpg"
                            className={styles.harvest__preview}
                            width="180"
                        />
                        <span className={styles.harvest__info}>
                            <img alt="" src="images/harvest/6.jpg" />
                            <span className={styles.harvest__text}>
                                По содержанию каротина морковь уступает лишь сладкому перцу. Морковь
                                и морковный сок назначают больным с гипо- и авитаминозом А.
                            </span>
                        </span>
                    </label>
                    <div className={styles.harvest__photo}>
                        <img alt="" src="images/harvest/6.jpg" />
                    </div>
                </li>
                <li className={styles.harvest}>
                    <input
                        id="harvest__checkbox-9"
                        name="harvest__checkbox"
                        type="checkbox"
                        className={styles.harvest__checkbox}
                    />
                    <label htmlFor="harvest__checkbox-9" className={styles.harvest__label}>
                        <img
                            alt=""
                            src="images/harvest/14.jpg"
                            className={styles.harvest__preview}
                        />
                        <span className={styles.harvest__info}>
                            <img alt="" src="images/harvest/14.jpg" />
                            <span className={styles.harvest__text}>
                                По содержанию каротина морковь уступает лишь сладкому перцу.
                            </span>
                        </span>
                    </label>
                    <div className={styles.harvest__photo}>
                        <img alt="" src="images/harvest/14.jpg" />
                    </div>
                </li>
                <li className={styles.harvest}>
                    <input
                        id="harvest__checkbox-10"
                        name="harvest__checkbox"
                        type="checkbox"
                        className={styles.harvest__checkbox}
                    />
                    <label htmlFor="harvest__checkbox-10" className={styles.harvest__label}>
                        <img
                            alt=""
                            src="images/harvest/4.jpg"
                            className={styles.harvest__preview}
                            width="200"
                        />
                        <span className={styles.harvest__info}>
                            <img alt="" src="images/harvest/4.jpg" />
                            <span className={styles.harvest__text}>
                                По содержанию каротина морковь уступает лишь сладкому перцу. Морковь
                                и морковный сок назначают больным с гипо- и авитаминозом А.
                                Экспериментально установлено, что морковь активизирует
                                внутриклеточные окислительно-восстановительные процессы, регулирует
                                углеводный обмен, обладает антисептическим, противовоспалительным,
                                обезболивающим и ранозаживляющим свойствами. Лечение морковным соком
                                рекомендуют при заболеваниях, связанных с нарушением минерального
                                обмена (жёлчнокаменная болезнь, метаболические полиартриты),
                                показано употребление морковного сока в первые дни после инфаркта
                                миокарда, а также для беременных женщин, кормящих матерей, детей.
                            </span>
                        </span>
                    </label>
                    <div className={styles.harvest__photo}>
                        <img alt="" src="images/harvest/4.jpg" />
                    </div>
                </li>
                <li className={styles.harvest}>
                    <input
                        id="harvest__checkbox-12"
                        name="harvest__checkbox"
                        type="checkbox"
                        className={styles.harvest__checkbox}
                    />
                    <label htmlFor="harvest__checkbox-12" className={styles.harvest__label}>
                        <img
                            alt=""
                            src="images/harvest/16.jpg"
                            className={styles.harvest__preview}
                        />
                        <span className={styles.harvest__info}>
                            <img alt="" src="images/harvest/16.jpg" />
                            <span className={styles.harvest__text}>
                                По содержанию каротина морковь уступает лишь сладкому перцу. Морковь
                                и морковный сок назначают больным с гипо- и авитаминозом А.
                                Экспериментально установлено, что морковь активизирует
                                внутриклеточные окислительно-восстановительные процессы, регулирует
                                углеводный обмен, обладает антисептическим, противовоспалительным,
                                обезболивающим и ранозаживляющим свойствами.
                            </span>
                        </span>
                    </label>
                    <div className={styles.harvest__photo}>
                        <img alt="" src="images/harvest/16.jpg" />
                    </div>
                </li>
            </ul>
        </div>
    </div>
);

export default Harvest;
