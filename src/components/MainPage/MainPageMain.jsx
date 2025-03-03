import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import "../../styles/MainPage/MainPageMain.css"
import MainPictureBig from "../../assets/MainPictureBig.png"

const MainPageMain = () => {
    return (
        <main className="main">
            <HashLink className="back-to-top" to="#top">
                ↑
            </HashLink>
            <div className="main-container">
                <div className="contacts-info-item phone">
                    <strong>Телефон:</strong>
                    <br />
                    <a href="tel:+79135520282">+7 (913) 552 02 82</a>
                </div>
                <h1 className="main-title-text">Добро пожаловать
                    В стоматологический кабинет <br />
                    Оказываем взрослому населению медицинскую стоматологическую помощь</h1>
                <img className="main-img" src={MainPictureBig || "/placeholder.svg"} alt="Персонал клиники" />
                <Link className="main-btn" to="/services-and-prices">
                    Прейскурант
                </Link>

                <div className="contacts-info-container">
                    <div className="contacts-info-box">
                        <ul className="contacts-info-list">
                            <li className="contacts-info-item">
                                <strong>Телефон:</strong>
                                <br />
                                <a href="tel:+79135520282">+7 (913) 552 02 82</a>
                            </li>
                            <li className="contacts-info-item">
                                <strong>Адрес:</strong>
                                <br />
                                663606, Красноярский край, г.Канск,
                                <br />
                                ул.40 лет Октября, д.62, строение 4, пом.75
                                <br />
                                ТРЦ "Порт Артур" 1 этаж
                            </li>
                            <li className="contacts-info-item">
                                <strong>Часы работы:</strong>
                                <ul className="contacts-work-hours">
                                    <li>Пн - Пт: 9:00 - 19:00</li>
                                    <li>Сб: 9:00 - 14:00</li>
                                    <li>Вс: выходной</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="contacts-info-row">
                    <span>ИНН: 2450023724</span>
                    <span>ОГРН: 1072450001304</span>
                    <span>ОКВЭД: 86.23</span>
                </div>
                <h2 className="main-title">Мы на карте</h2>

                <div className="map">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=95.700087%2C56.234255&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjI1Njg5ORJk0KDQvtGB0YHQuNGPLCDQmtGA0LDRgdC90L7Rj9GA0YHQutC40Lkg0LrRgNCw0LksINCa0LDQvdGB0LosINGD0LvQuNGG0LAgNDAg0LvQtdGCINCe0LrRgtGP0LHRgNGPLCA2MiIKDXJmv0IV4e9gQg%2C%2C&tab=inside&z=16.61"
                        width="100%"
                        height="400"
                        frameBorder="0"
                        allowFullScreen={true}
                    ></iframe>
                </div>
            </div>
        </main>
    )
}

export default MainPageMain

