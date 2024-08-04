import { useState, useEffect } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import './App.css';
import Home from './pages/Home';
import Invoice from './pages/invoice';
import Customers from './pages/Customers';
import Daily from './pages/Daily';
import Products from './pages/Products';
import DepositeCylinder from './pages/DepositeCylinder';
import SalesReport from './pages/SalesReport';
import Statement from './pages/Statement';

export default function App() {
  const [isDBConnected, setIsDBConnected] = useState(false);

  useEffect(() => {
    const handleDBConnection = (arg: unknown) => {
      setIsDBConnected(arg === 'connected');
    };

    window.electron.ipcRenderer.connectToMondoDB();
    window.electron.ipcRenderer.once(
      'connect-to-mongodb',
      handleDBConnection as (...args: unknown[]) => void,
    );
  }, []);

  return (
    <div>
      {!isDBConnected && (
        <div className="flex justify-center items-center h-screen">
          <p className="text-2xl">Connecting to database...</p>
        </div>
      )}
      {isDBConnected && (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/daily" element={<Daily />} />
            <Route path="/products" element={<Products />} />
            <Route path="/deposite-cylinder" element={<DepositeCylinder />} />
            <Route path="/sales-report" element={<SalesReport />} />
            <Route path="/statement" element={<Statement />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}
