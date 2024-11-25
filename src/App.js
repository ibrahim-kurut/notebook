import './App.css';
import Header from './components/Header';
import Table from './components/Table';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer position="top-right" theme="colored" />
      <Header />
      <Table />
    </div>
  );
}

export default App;
