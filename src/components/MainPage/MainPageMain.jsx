import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "../../styles/MainPage/MainPageMain.css";
import MainPictureBig from "../../assets/MainPictureBig.png";

const MainPageMain = () => {
    return (
        <main className="main">
            {/*<HashLink className="back-to-top" to="#top">↑</HashLink>*/}
            <div className="main-container">
                <img className="main-img" src={MainPictureBig} alt="Персонал" />
                <Link className="main-btn" to="/services-and-prices">Услуги и цены</Link>

                <div className="main-txt">
                    <ul className="txt-list">
                        <li className="list-element">Адрес: 663606, Красноярский край, г.Канск, ул.40 лет Октября, д.62, строение 4, пом.75 </li>
                        <li className="list-element">ИНН: 2450023724, КПП: 245001001, ОГРН: 1072450001304</li>
                        <li className="list-element">Часы работы:
                            <ul className="list-element-time">
                                <li>Пн - Пт: 9:00 - 19:00</li>
                                <li>Сб: 9:00 - 14:00</li>
                                <li>Вс: выходной</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>


        </main>
    );
};

export default MainPageMain;
