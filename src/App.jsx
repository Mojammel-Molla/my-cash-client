import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './pages/home-page/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
