import React from 'react';
import Nav from './components/Nav';
import Title from './components/Title';
import About from './components/About';
import Projects from './components/Projects';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {

  const stars:number = 10;
  const location = useLocation();

  return (
    
      <div className='row'>
        <AnimatePresence exitBeforeEnter> {/**without exit the next element is partially shown */}
        <Routes location={location} key={location.key}>
          <Route path='/' element={<Title stars={stars} />} />
          <Route path='/projects' element={<Projects stars={stars} />}/>
          <Route path='/about' element={<About stars={stars} />}/>
        </Routes>
        </AnimatePresence> 
        <Nav />  
      </div>
  );
}

export default App;
