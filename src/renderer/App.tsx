import { useState, useEffect } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import './App.css';
import Home from './pages/Home';
import Form1 from './pages/Form-1';
import Form2 from './pages/Form-2';
import Reports from './pages/Reports';
import Certificates from './pages/Certificates';

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
        )
    },[])

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
                        <Route path="/form-1" element={<Form1 />} />
                        <Route path="/form-2" element={<Form2 />} />
                        <Route path="/certificates" element={<Certificates />} />
                        <Route path="/reports" element={<Reports />} />
                    </Routes>
                </Router>
            )}
        </div>
    );
}
