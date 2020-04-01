import React from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header';
import SectionPerformances from './components/SectionPerformances'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <SectionPerformances />
    </div>
  );
}

export default App;
