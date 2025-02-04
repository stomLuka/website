import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import ServAndPrices from './pages/ServAndPrices.jsx';
import NotFound from './pages/NotFound.jsx';
import Personnel from './pages/Personnel.jsx';
import Contacts from './pages/Contacts.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/main-page"
          element={<MainPage />} />

        <Route
          path="/personnel"
          element={<Personnel />} />

        <Route
          path="/services-and-prices"
          element={<ServAndPrices />} />

        <Route
          path="/contacts"
          element={<Contacts />} />

        <Route
          path="/"
          element={<Navigate to="/main-page" />} />

        <Route
          path="*"
          element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App;
