import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark, faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';

const NavLinks = ({fullscreen} : {fullscreen:boolean}) => {
    
  return (
  
    <div className='Nav' id={fullscreen ? 'Nav-fullscreen' : 'Nav-narrow'}>
      <ul>
        <li>
          <NavLink to='/' className={({isActive}) => isActive ? 'overline' : undefined}>
            home
          </NavLink>  
        </li>
        <li>
          <NavLink to='/projects' className={({isActive}) => isActive ? 'overline' : undefined}>
            projects
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className={({isActive}) => isActive ? 'overline' : undefined}>
            about
          </NavLink>
        </li>
      </ul>
    </div>
  )
}


const Nav = ({iconClass} : {iconClass: string}) => {

  const [showMenu, setShowMenu] = useState<boolean>(false);
 
  return (
    <>
    <div id='menu' onClick={() => setShowMenu(!showMenu)}>
      { showMenu ?
      <>
      <div id='xmark' className={iconClass}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <NavLinks fullscreen={true} />
      </>  
      : 
      <div id='ellipsis' className={iconClass}><FontAwesomeIcon icon={faEllipsisVertical} /></div> }
    </div>
    <NavLinks fullscreen={false} />
    </>
  )
}

export default Nav;