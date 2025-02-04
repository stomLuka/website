import { HashLink } from "react-router-hash-link";
import "../../styles/DocumentsPage/DocumentsPageMain.css";

const DocumentsPageMain = () => {
    return (
        <main className="doc-main">
            <HashLink className="doc-back-to-top" to="#top">
                ↑
            </HashLink>
            <div className="doc-main-container">
                <h1 className="doc-page-title">Документы</h1>

                <div className="doc-content-container">
                    <div className="doc-item-container">
                        <h2 className="doc-item-title">ИНН и ОГРН</h2>
                        <iframe
                            src="/website/inn_ogrn.pdf"
                            width="100%"
                            height="600px"
                            title="ИНН и ОГРН"
                            frameBorder="0"
                            className="doc-iframe"
                        />
                        <a href="/website/inn_ogrn.pdf" download className="doc-download-link">
                            Скачать ИНН и ОГРН
                        </a>
                    </div>

                    <div className="doc-item-container">
                        <h2 className="doc-item-title">Лицензия</h2>
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
            </div>
        </main>
    );
};

export default DocumentsPageMain;
