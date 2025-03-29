import { HashLink } from "react-router-hash-link"
import "../../styles/PersonnelPage/PersonnelMain.css"

const PersonnelMain = () => {
    const personnel = [
        {
            name: "Богданова Любовь Ивановна",
            role: "врач стоматолог терапевт",
            education: "высшее, диплом Красноярского медицинского института, 1993г ШВ №093576",
            accreditation: "7723031495898",
            services: "стоматология терапевтическая",
        },
        {
            name: "Богданов Александр Анатольевич",
            role: "врач стоматолог ортопед",
            education: "высшее, диплом Красноярского медицинского института, 1993г НТВ №093601",
            accreditation: "772303222479",
            services: "стоматология ортопедическая",
        },
        {
            name: "Бунчук Ксения Николаевна",
            role: "врач стоматолог терапевт",
            education: "высшее, диплом Красноярского медицинского академия, 2006г ВСГ 0139642",
            accreditation: "7722029826022",
            services: "стоматология терапевтическая, высшая категория",
        },
        {
            name: "Коротаев Юрий Владимирович",
            role: "врач стоматолог",
            education: "высшее, диплом Красноярского медицинского университета, 2018г 102431 0111166",
            accreditation: "7723030257163",
            services: "стоматология",
        },
        {
            name: "Петров Михаил Андреевич",
            role: "врач стоматолог хирург",
            education: "высшее, диплом Красноярского медицинского института, 1992г ФВ №029819",
            accreditation: "7723031500332",
            services: "стоматология хирургическая, высшая категория",
        },
        {
            name: "Родина Ирина Владиславовна",
            role: "врач стоматолог терапевт",
            education: "высшее, диплом Красноярского медицинского института ,1993г TUB №094186",
            accreditation: "7723031610421",
            services: "стоматология терапевтическая, высшая категория",
        },
        {
            name: "Тарасов Сергей Владимирович",
            role: "врач стоматолог ортопед",
            education: "высшее, диплом Красноярского медицинского института, 1992г ФВ №029733",
            accreditation: "7723028498265",
            services: "стоматология ортопедическая",
        },
    ]

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

                <h1 className="personnel-title">Наши врачи</h1>

                <div className="personnel-container">
                    {personnel.map((person, index) => (
                        <div key={index} className="person-container">
                            <h2 className="person-name">{person.name} - {person.role}</h2>
                            <ul className="person-text">
                                <li className="person-text-el">
                                    <strong>Образование:</strong> {person.education}
                                </li>
                                <li className="person-text-el">
                                    <strong>Свидетельство об аккредитации:</strong> {person.accreditation}
                                </li>
                                <li className="person-text-el">
                                    <strong>Сфера оказания услуг:</strong> {person.services}
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default PersonnelMain;
