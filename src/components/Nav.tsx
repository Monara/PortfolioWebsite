import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';


const Nav = () => {
    
  return (
    <ul className="Nav">
       <li>
          <Link to="/">
            <span className='gradient'>hOMe</span>
            <span className='Nav-text'>HOME</span>
          </Link>  
        </li>
        <li>
          <Link to="/projects">
            <span className='gradient'>PRoJecTs</span>
            <span className='Nav-text'>PROJECTS</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <span className='gradient'>ABouT</span>
            <span className='Nav-text'>ABOUT</span>
          </Link>
        </li>
    </ul>
  )
}

export default Nav;