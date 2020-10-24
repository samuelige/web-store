import React from 'react';
import './Homepage.css';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Main from '../../main/Main';
import Sidebar from '../../sidebar/Sidebar';

function Homepage() {
  return (
    <div className="App">
      <div className="grid-container">
      <Header />
      <div className="content">
        <Sidebar />
        <Main />
      </div>
      <Footer />
      </div>
    </div>
  );
}

export default Homepage;
