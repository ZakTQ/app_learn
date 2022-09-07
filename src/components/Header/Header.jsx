import React from 'react';
import classes from '../Header/Header.module.css'
// import s from '../Header/Header.module.css'


let topMenu = () => {


    return (
        <div className={classes.topMenu_active}>
            <ul className={classes.topMenu__list}>
                <li className={classes.topMenu__item}>Наборы</li>
                <li className={classes.topMenu__item}>Наборы</li>
                <li className={classes.topMenu__item}>Наборы</li>
                <li className={classes.topMenu__item}>Наборы</li>
            </ul>
        </div>
    )
}

function topMenuOn() {

    return
}

const Header = () => {

    return (
        <div>
            <div className={classes.menu}>
                <div className={classes.menu__wrapper}>
                    <div onClick={topMenuOn} className={classes.menuTopBtn}>Меню</div>
                    <div>Город</div>
                    <div>+7(812) 999-99-99</div>
                    <div>
                        <a href="s#">Logo</a>
                    </div>
                    <div>Работа</div>
                    <div>Акции</div>
                    <div>Вход</div>
                    <div>
                        <a href="s#">Bucket</a>
                    </div>
                </div>
            </div>
            <div className={classes.topMenu_active}>
                <ul className={classes.topMenu__list}>
                    <li className={classes.topMenu__item}>Наборы</li>
                    <li className={classes.topMenu__item}>Наборы</li>
                    <li className={classes.topMenu__item}>Наборы</li>
                    <li className={classes.topMenu__item}>Наборы</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;