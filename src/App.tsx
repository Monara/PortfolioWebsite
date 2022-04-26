import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Title from './components/Title';
import About from './components/About';
import Projects from './components/Projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const stars:number = 50;

  return (
    <BrowserRouter>
      <div className="App">
        <div className="row">
          <Routes>
            <Route path='/' element={<Title stars={stars}/>} />
            <Route path='/projects' element={<Projects />}/>
            <Route path='/about' element={<About />}/>
          </Routes>
          <Nav />  
        </div>
      </div>
    </BrowserRouter>  
  );
}

export default App;
