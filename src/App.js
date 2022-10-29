import React from 'react';
import './App.css';

import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'
import ProjectContainer from './components/ProjectContainer';

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
      {/* <ProjectContainer /> */}
    </>
  );
}

export default App;
