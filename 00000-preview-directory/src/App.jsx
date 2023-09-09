import './App.css';
import React from "react";
import { Route, Router } from "wouter";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import PriceGrid from "./pages/single-price-grid-component-directory-ver/App";
import QRCode from "./pages/qr-code-component-directory-ver/App";
import NewsletterSignUp from "./pages/newsletter-sign-up-with-success-message-directory-ver/App"


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" component={Home} />
        <Route path="/single-price-grid-component" component={PriceGrid} />
        <Route path="/qr-code-component" component={QRCode} />
        <Route path="/newsletter-sign-up-with-success-message" component={NewsletterSignUp} />

      </Router>
    </>
  )
}

export default App;
