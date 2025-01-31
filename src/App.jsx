import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import ServAndPrices from './pages/ServAndPrices.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/main-page"
          element={<MainPage />} />

        <Route
          path="/personnel"
          element={<ServAndPrices />} />

        <Route
          path="/services-and-prices"
          element={<ServAndPrices />} />

        <Route
          path="/contacts"
          element={<ServAndPrices />} />

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
