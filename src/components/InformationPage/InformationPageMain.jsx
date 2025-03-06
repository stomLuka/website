import { HashLink } from "react-router-hash-link";
import "../../styles/InformationPage/InformationPageMain.css";

const InformationPageMain = () => {
    return (
        <main className="info-main">
            <HashLink className="back-to-top" to="#top">↑</HashLink>
            <div className="info-container">
                <div className="contacts-info-item phone">
                    <strong>Телефон:</strong>
                    <br />
                    <a href="tel:+79135520282">+7 (913) 552 02 82</a>
                </div>

                <h1 className="personnel-title info-gap">Информация</h1>
                <p className="info-bold">СРОК ОЖИДАНИЯ ПЛАТНЫХ МЕДИЦИНСКИХ УСЛУГ СОСТАВЛЯЕТ ДО 1 МЕСЯЦА</p>

                <p>
                    <span className="info-bold">СРОК ПРЕДОСТАВЛЕНИЯ ПЛАТНЫХ МЕДИЦИНСКИХ УСЛУГ</span> устанавливается
                    «Договором на оказание платных медицинских услуг» в зависимости от индивидуального объёма оказываемых услуг.
                </p>

                <p>
                    <span className="info-bold">ПЛАТНЫЕ МЕДИЦИНСКИЕ УСЛУГИ</span> оказываются с согласия, по желанию пациента,
                    с соблюдением <span className="info-underline">«Порядками и стандартами медицинской помощи» </span>
                    (<a href="http://pravo.gov.ru/proxy/ips/?docbody=&prevDoc=102604893&backlink=1&&nd=102475204">www.pravo.gov.ru</a>) и
                    <span className="info-underline"> «Клиническими рекомендациями МЗ РФ» </span>
                    (<a href="https://minzdrav.gov.ru/ru">minzdrav.gov.ru</a>).
                </p>

                <p>
                    <span className="info-bold">Стоматология «Линия улыбки»</span> в соответствии с требованиями ФЗ
                    <span className="info-underline"> «Об основах охраны здоровья граждан в РФ»</span> от 21.11.2011г. №323-ФЗ,
                    информирует граждан о возможности получения стоматологических услуг бесплатно, в рамках программы государственных
                    гарантий и территориальной программы ОМС Красноярского края в КГАУЗ
                    «Канская межрайонная стоматологическая поликлиника» по адресу: г.Канск, ул.Каландаршвили, 45А, запись по тел.
                    8(39161)2-96-77 - регистратура.
                    (<a href="https://kraszdrav.ru/">kraszdrav.ru</a>).
                </p>

                <h1 className="info-subtitle">КОНТРОЛЬНО-НАДЗОРНЫЕ ОРГАНИЗАЦИИ</h1>

                <div className="info-org">
                    <p><span className="info-bold">Управление росздравнадзора по Красноярскому краю</span></p>
                    <p>Адрес: 660021, г.Красноярск, пр.Мира, 132</p>
                    <p>Тел: (391)221-11-41</p>
                    <p>Сайт: <a href="http://24reg.roszdravnadzor.ru/">24reg.roszdravnadzor.ru</a></p>
                </div>

                <div className="info-org">
                    <p><span className="info-bold">Управление федеральной службы по надзору в сфере защиты прав потребителей и благополучия человека по Красноярскому краю</span></p>
                    <p>Адрес: 660097, г.Красноярск, ул.Каратанова, 21</p>
                    <p>Тел: (391)226-89-50</p>
                    <p>Сайт: <a href="https://24.rospotrebnadzor.ru/">24rospotrenadzor.ru</a></p>
                </div>

                <div className="info-org">
                    <p><span className="info-bold">Территориальный отдел управления роспотребнадзора по Красноярскому краю в г.Канске</span></p>
                    <p>Адрес: 663613, г.Канск, ул.Эйдемана, 4</p>
                    <p>Тел: (39161)2-71-88</p>
                </div>

                <p>
                    <span className="info-bold">Рассмотрение жалоб и предложений</span> осуществляется только при личном обращении или оправленные письменно по адресу:
                    663606, г.Канск, ул.40 лет Октября, зд.62, строение 4, пом.75
                </p>
            </div>
        </main>
    );
};

export default InformationPageMain;
