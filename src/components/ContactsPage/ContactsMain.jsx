import { HashLink } from "react-router-hash-link"
import "../../styles/ContactsPage/ContactsMain.css"

const ContactsMain = () => {
    return (
        <main className="contacts-main">
            <HashLink className="contacts-back-to-top" to="#top">
                ↑
            </HashLink>
            <div className="contacts-main-container">
                <h1 className="contacts-page-title">Контакты</h1>

                <div className="contacts-inform-container">
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
                            </li>
                            <li className="contacts-info-item">
                                <strong>Директор:</strong>
                                <br />
                                ФИО: Петров Михаил Андреевич
                                <br />
                                <span>Телефон:</span><a href="tel:+79232936919"> +7 (923) 293 69 19</a>
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
            </div>
        </main>
    )
}

export default ContactsMain;
