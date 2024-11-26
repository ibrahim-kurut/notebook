import './App.css';
import Header from './components/Header';
import Table from './components/Table';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      <ToastContainer position="top-right" theme="colored" />
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/table" element={<Table />} />
      </Routes>

    </div>
  );
}

export default App;
