import React, {useState, useEffect} from 'react';
import Nav from './components/Nav';
import Title from './components/Title';
import About from './components/About';
import Projects from './components/Projects';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {

  const stars:number = 30;
  const location = useLocation();
  const [iconClass, setIconClass] = useState<string>('');

  const addClass = (sec:number, classname:string) => {
    return new Promise((res, _) => {
      setTimeout(() => {
        setIconClass(classname);
        res('class added');
      }, sec);
    });
  }

  useEffect (() => {
    let color:string;

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

    if(iconClass === '') addClass(0, color); //don't fade

    else {
      let classes = 'fade '.concat(iconClass);  
      addClass(1000, classes).then(() => addClass(1000, color)); //fade current color in 1 sec, then switch to new
    }  

  }, [location.pathname]);

  return (
    
      <div className='row'>
        <AnimatePresence exitBeforeEnter> {/**without exit the next element is partially shown */}
        <Routes location={location} key={location.key}>
          <Route path='/' element={<Title stars={stars} />} />
          <Route path='/projects' element={<Projects />}/>
          <Route path='/about' element={<About stars={stars} />}/>
        </Routes>
        </AnimatePresence> 
        <Nav iconClass={iconClass}/>  
      </div>
  );
}

export default App;
