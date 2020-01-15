import cn from 'classnames';
import React from 'react';

import styles from './styles.css';

const Kittens = () => (
    <div>
        <header className={styles.header}>Бабуленькины котятки</header>
        <div className={styles.content}>
            <input
                id="menu__radio1"
                name="menu-radio"
                type="radio"
                className={cn(styles.menu__radio, styles.menu__radio_type_abyss)}
            />
            <input
                id="menu__radio2"
                name="menu-radio"
                type="radio"
                className={cn(styles.menu__radio, styles.menu__radio_type_brit)}
            />
            <input
                id="menu__radio3"
                name="menu-radio"
                type="radio"
                className={cn(styles.menu__radio, styles.menu__radio_type_rg)}
            />
            <input
                id="menu__radio4"
                name="menu-radio"
                type="radio"
                className={cn(styles.menu__radio, styles.menu__radio_type_siam)}
            />
            <div className={styles.column1}>
                <ul className={styles.menu}>
                    <li className={cn(styles.menu__item, styles.menu__item_type_rg, styles.р)}>
                        <label htmlFor="menu__radio3" className={styles.menu__label} />
                        Русская голубая
                    </li>
                    <li className={cn(styles.menu__item, styles.menu__item_type_siam, styles.с)}>
                        <label htmlFor="menu__radio4" className={styles.menu__label} />
                        Сиамская
                    </li>
                    <li className={cn(styles.menu__item, styles.menu__item_type_abyss, styles.а)}>
                        <label htmlFor="menu__radio1" className={styles.menu__label} />
                        Абиссинская
                    </li>
                    <li className={cn(styles.menu__item, styles.menu__item_type_brit, styles.б)}>
                        <label htmlFor="menu__radio2" className={styles.menu__label} />
                        Британская
                    </li>
                </ul>
            </div>
            <div className={styles.column2}>
                <ul className={styles.cards}>
                    <li
                        className={cn(styles.cards__item, styles.cards__item_type_rg)}
                        data-title="Dunloe Domokovitch"
                    >
                        <img src="images/kittens/rg/5.jpg" alt="" />
                    </li>
                    <li
                        className={cn(styles.cards__item, styles.cards__item_type_siam)}
                        data-title="Сиамские кошки"
                    >
                        <img src="images/kittens/siam/1.jpeg" alt="" />
                    </li>
                    <li
                        className={cn(styles.cards__item, styles.cards__item_type_rg)}
                        data-title="Иванович, 1911 год"
                    >
                        <img src="images/kittens/rg/2.jpg" alt="" />
                    </li>
                    <li
                        className={cn(styles.cards__item, styles.cards__item_type_siam)}
                        data-title="Оливия_де_Хэвиленд_со_своей_сиамской_кошкой, 1949 год"
                    >
                        <img src="images/kittens/siam/2.jpg" alt="" />
                    </li>
                    <li
                        className={cn(styles.cards__item, styles.cards__item_type_rg)}
                        data-title="Баярд, 1903 год"
                    >
                        <img src="images/kittens/rg/1.jpg" alt="" />
                    </li>
                    <li
                        className={cn(styles.cards__item, styles.cards__item_type_abyss)}
                        data-title="Sedgemere Peaty, 1894 год"
                    >
                        <img src="images/kittens/abyss/2.jpg" alt="" />
                    </li>
                    <li
                        className={cn(styles.cards__item, styles.cards__item_type_brit)}
                        data-title="CHAMPION_BALLOCHMYLE_BROTHER_BUMP, 1902 г"
                    >
                        <img src="images/kittens/brit/1.jpeg" alt="" />
                    </li>
                    <li
                        className={cn(styles.cards__item, styles.cards__item_type_rg)}
                        data-title="Ashbrittle Peter, 1902 год"
                    >
                        <img src="images/kittens/rg/3.jpg" alt="" />
                    </li>
                    <li
                        className={cn(styles.cards__item, styles.cards__item_type_abyss)}
                        data-title="Абиссинская кошка"
                    >
                        <img src="images/kittens/abyss/4.jpg" alt="" />
                    </li>
                    <li
                        className={cn(styles.cards__item, styles.cards__item_type_abyss)}
                        data-title="Zula, 1868 год"
                    >
                        <img src="images/kittens/abyss/1.jpg" alt="" />
                    </li>
                    <li
                        className={cn(styles.cards__item, styles.cards__item_type_siam)}
                        data-title="New Boy, 1946 год"
                    >
                        <img src="images/kittens/siam/3.jpg" alt="" />
                    </li>
                    <li
                        className={cn(styles.cards__item, styles.cards__item_type_rg)}
                        data-title="Krimsky of Coryton, 1936 год"
                    >
                        <img src="images/kittens/rg/4.jpg" alt="" />
                    </li>
                    <li
                        className={cn(styles.cards__item, styles.cards__item_type_siam)}
                        data-title="Чесс, 1935 год"
                    >
                        <img src="images/kittens/siam/6.jpg" alt="" />
                    </li>
                </ul>
            </div>
            <div className={styles.column3}>
                <div className={styles.rating}>
                    <div className={styles.rating__title}>РЕЙТИНГ</div>
                    <input
                        id="rating-checkbox"
                        name="rating-checkbox"
                        className={styles.rating__checkbox}
                        type="checkbox"
                    />
                    <label htmlFor="rating-checkbox" className={styles.rating__label}>
                        по убыванию
                    </label>
                    <ul className={styles.rating__list}>
                        <li
                            className={cn(
                                styles.rating__item,
                                styles.rating__item_value_9,
                                styles.а,
                            )}
                        >
                            <div className={styles.rating__category}>Абиссинская</div>
                            <div className={styles.rating__scale} />
                            <div className={styles.rating__value}>9</div>
                        </li>
                        <li
                            className={cn(
                                styles.rating__item,
                                styles.rating__item_value_10,
                                styles.р,
                            )}
                        >
                            <div className={styles.rating__category}>Русская голубая</div>
                            <div className={styles.rating__scale} />
                            <div className={styles.rating__value}>10</div>
                        </li>
                        <li
                            className={cn(
                                styles.rating__item,
                                styles.rating__item_value_4,
                                styles.с,
                            )}
                        >
                            <div className={styles.rating__category}>Сиамская</div>
                            <div className={styles.rating__scale} />
                            <div className={styles.rating__value}>4</div>
                        </li>
                        <li
                            className={cn(
                                styles.rating__item,
                                styles.rating__item_value_8,
                                styles.б,
                            )}
                        >
                            <div className={styles.rating__category}>Британская</div>
                            <div className={styles.rating__scale} />
                            <div className={styles.rating__value}>8</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <span className={styles.footer__corp}>@ ООО Бабуленькины котятки, 2019</span>
                <span className={styles.footer__address}>Наш адрес: улица Котовая, д.5</span>
            </div>
        </footer>
    </div>
);

export default Kittens;
