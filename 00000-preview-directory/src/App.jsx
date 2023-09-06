import './App.css';
import React from "react";
import { Route, Router } from "wouter";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" component={Home} />

      </Router>
    </>
  )
}

export default App;
