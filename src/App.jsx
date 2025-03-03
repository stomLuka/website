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
          path="/main-page"
          element={<MainPage />} />

        <Route
          path="/information"
          element={<InformationPage />} />

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
          path="/license"
          element={<License />} />

        <Route
          path="/documents"
          element={<Documents />} />

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
