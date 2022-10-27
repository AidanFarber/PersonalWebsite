import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';

import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <>
      <header className="primary-header">
        <Navbar />
      </header>
      {/* Main Content */}
      <HomePage />
      <hr className="content-divider" />
      {/* About Section */}
      <AboutMe />
      <hr className="content-divider" />
      {/* Project Section */}
      
    </>
  );
}

export default App;
