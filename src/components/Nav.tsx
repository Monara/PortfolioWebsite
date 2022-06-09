import React from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';


const Nav = () => {

  const overline = 'overline';
    
  return (
    <div className='Nav'>

      <ul>
        <li>
          <NavLink to="/" className={({isActive}) => isActive ? overline : undefined }>
            home
          </NavLink>  
        </li>
        <li>
          <NavLink to="/projects" className={({isActive}) => isActive ? overline : undefined }>
            projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) => isActive ? overline : undefined }>
            about
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav;