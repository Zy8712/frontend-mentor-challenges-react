import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import QRCode from './pages/qr-code-component/App';
import AdviceGen from './pages/advice-generator-app/App';
 
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/qr-code-component' element={<QRCode />} />
                <Route exact path='/advice-generator-app' element={<AdviceGen />} />
            </Routes>
            <NavBar />
        </Router>
    );
}
 
export default App;