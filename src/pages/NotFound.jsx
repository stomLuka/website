import { Link } from "react-router-dom"
import "../styles/NotFound.css";
const NotFound = () => {
    return (
        <div className="notfound-container">
            <div className="notfound-content">
                <h1 className="notfound-title">404</h1>
                <h2 className="notfound-subtitle">Страница не найдена</h2>
                <p className="notfound-text">Извините, запрашиваемая страница не существует.</p>
                <Link className="notfound-button" to="/главная">
                    Вернуться на главную
                </Link>
            </div>
        </div>
    )
}

export default NotFound

