import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';


const Nav = () => {
    
  return (
    <div className='Nav'>
      <ul>
        <li>
            <Link to="/">
              <span className='gradient'>hOMe</span>
              <span className='cross-text'>HOME</span>
            </Link>  
        </li>
        <li>
            <Link to="/projects">
              <span className='gradient'>PRoJecTs</span>
              <span className='cross-text'>PROJECTS</span>
            </Link>
        </li>
        <li>
            <Link to="/about">
              <span className='gradient'>ABouT</span>
              <span className='cross-text'>ABOUT</span>
            </Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav;