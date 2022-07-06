import React, {useState, useEffect} from 'react';
import Nav from './components/Nav';
import Title from './components/Title';
import About from './components/About';
import Projects from './components/Projects';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {

  const stars:number = 10;
  const location = useLocation();
  const [iconColor, setIconColor] = useState<string>('gradient'); //icon color passed from location

  useEffect (() => {
    const timer = setTimeout(() => {
      let color;
      switch(location.pathname) {
        case '/':
          color = 'gradient';
          break;
        case '/projects':
          color = 'orange';
          break;
        case '/about':   
          color = 'pink';
          break;
        default:
          color = 'gray';  
      }
      setIconColor(color); //so that menu icon color gets updated 2 seconds after nav link click: after exit animations of pages are done
    }, 2000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    
      <div className='row'>
        <AnimatePresence exitBeforeEnter> {/**without exit the next element is partially shown */}
        <Routes location={location} key={location.key}>
          <Route path='/' element={<Title stars={stars} />} />
          <Route path='/projects' element={<Projects stars={stars} />}/>
          <Route path='/about' element={<About stars={stars} />}/>
        </Routes>
        </AnimatePresence> 
        <Nav iconColor={iconColor}/>  
      </div>
  );
}

export default App;
