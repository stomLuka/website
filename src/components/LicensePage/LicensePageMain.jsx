import { HashLink } from "react-router-hash-link";
import "../../styles/LicensePage/LicensePageMain.css";

const DocumentsPageMain = () => {
    return (
        <main className="doc-main">
            <HashLink className="doc-back-to-top" to="#top">
                ↑
            </HashLink>
            <div className="doc-main-container">
                <div className="lic-item-container">
                    <div className="contacts-info-item phone">
                        <strong>Телефон:</strong>
                        <br />
                        <a href="tel:+79135520282">+7 (913) 552 02 82</a>
                    </div>

                    <h2 className="doc-page-title">Лицензия</h2>
                    <iframe
                        src="/website/litsenzia.pdf"
                        width="100%"
                        height="600px"
                        title="Лицензия"
                        frameBorder="0"
                        className="doc-iframe"
                    />
                    <a href="/website/litsenzia.pdf" download className="doc-download-link">
                        Скачать Лицензию
                    </a>
                </div>
            </div>
        </main>
    );
};

export default DocumentsPageMain;
