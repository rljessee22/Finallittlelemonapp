import React from 'react';
import './App.css';
import Nav from './components/Nav';
import APIbook from './components/APIbook';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <React.Fragment>
      <Nav/>
      <Header/>
      <APIbook/>
      <Footer/>
      </React.Fragment>
    </div>
  );
}

export default App;
