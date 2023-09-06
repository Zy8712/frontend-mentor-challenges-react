import React from 'react';
import './App.css'
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages';
import NewsLetter from '../../newsletter-sign-up-with-success-message/my-react-work-v1/src/App';
import Price from './pages/single-price-grid-component-directory-ver/App';


function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/price' element={<Price />} />
          <Route exact path='/newsletter' element={<NewsLetter />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
