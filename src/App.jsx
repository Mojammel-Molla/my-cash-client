import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './pages/home-page/navbar/Navbar';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

function App() {
  // const [balance, setBalance] = useState([])

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
