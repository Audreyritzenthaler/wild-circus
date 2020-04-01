import React from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Prices from './components/Prices';
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
      <AboutUs image = "https://www.lilavert.com/blog_lilavert/wp-content/uploads/2016/01/Joel-Peter-Witkin-photography-le-baiser-1006x1024.jpg" title = "About Us" textAboutUs="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                onsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu."/>
      <Prices />
    </div>
  );
}

export default App;
