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

                <h1 style={{ paddingBottom: '1rem' }} >Мы на карте</h1>

                <div className="map" style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href="https://yandex.ru/maps/11307/kansk/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                    >
                        Канск
                    </a>
                    <a
                        href="https://yandex.ru/maps/11307/kansk/house/ulitsa_40_let_oktyabrya_62/bUwYcQdgSU0AQFtsfX5ydX5mYQ==/inside/?ll=95.700087%2C56.234255&tab=inside&utm_medium=mapframe&utm_source=maps&z=16.61"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                    >
                        Улица 40 лет Октября, 62 — Яндекс Карты
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=95.700087%2C56.234255&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjI1Njg5ORJk0KDQvtGB0YHQuNGPLCDQmtGA0LDRgdC90L7Rj9GA0YHQutC40Lkg0LrRgNCw0LksINCa0LDQvdGB0LosINGD0LvQuNGG0LAgNDAg0LvQtdGCINCe0LrRgtGP0LHRgNGPLCA2MiIKDXJmv0IV4e9gQg%2C%2C&tab=inside&z=16.61"
                        width="560"
                        height="400"
                        frameBorder="1"
                        allowFullScreen="true"
                        style={{ position: 'relative' }}
                    ></iframe>
                </div>
            </div>


        </main>
    );
};

export default MainPageMain;
