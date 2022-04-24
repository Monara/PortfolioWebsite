import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Title from './components/Title';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const stars:number = 20;

  return (
    <BrowserRouter>
      <div className="App">
        <div className="row">
          <Title stars={stars}/>
          <Nav />
          <Routes>
            <Route path='/' />
            <Route path='/' />
            <Route path='/' />
          </Routes>  
        </div>
      </div>
    </BrowserRouter>  
  );
}

export default App;
