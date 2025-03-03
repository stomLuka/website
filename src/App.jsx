import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import InformationPage from './pages/Information.jsx';
import ServAndPrices from './pages/ServAndPrices.jsx';
import NotFound from './pages/NotFound.jsx';
import Personnel from './pages/Personnel.jsx';
import License from './pages/License.jsx';
import Contacts from './pages/Contacts.jsx';
import Documents from './pages/Documents.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/главная"
          element={<MainPage />} />

        <Route
          path="/информация"
          element={<InformationPage />} />

        <Route
          path="/врачи"
          element={<Personnel />} />

        <Route
          path="/прейскурант"
          element={<ServAndPrices />} />

        <Route
          path="/контакты"
          element={<Contacts />} />

        <Route
          path="/лицензия"
          element={<License />} />

        <Route
          path="/документы"
          element={<Documents />} />

        <Route
          path="/"
          element={<Navigate to="/главная" />} />

        <Route
          path="*"
          element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App;
