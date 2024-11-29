import './App.css';
import Header from './components/Header';
import Table from './components/Table';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';

import { Provider, useSelector } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

function Main() {
  const { user } = useSelector((state) => state.user);
  const userToken = user?.access

  return (
    <>
      <ToastContainer position="top-right" theme="colored" />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/table" element={user && <Table userToken={userToken} />} />
      </Routes>
    </>
  );
}

export default App;