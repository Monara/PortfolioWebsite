import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';


const Nav = () => {
    
  return (
    <ul className="Nav">
        <li>
          <Link to="/">
            <span className='gradient'>ABouT</span>
            <span className='Nav-text'>ABOUT</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className='gradient'>PRoJecTs</span>
            <span className='Nav-text'>PROJECTS</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className='gradient'>ConTacT</span>
            <span className='Nav-text'>CONTACT</span>
          </Link>  
        </li>
    </ul>
  )
}

export default Nav;