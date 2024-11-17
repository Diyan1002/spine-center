import React from "react";
import Header from "./components/Header";
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import './App.css';  

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Hero />
  </div>
  );
}

export default App;
