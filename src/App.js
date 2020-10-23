import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';

function App() {
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

export default App;
