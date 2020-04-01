import React from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header';
import './App.css';
import SectionPerformances from './components/SectionPerformances'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="card">
        <SectionPerformances />
      </div>
    </div>
  );
}

export default App;
