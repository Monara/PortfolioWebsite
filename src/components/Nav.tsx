import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark, faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';

const NavLinks = ({fullscreen, iconColor} : {fullscreen:boolean, iconColor?:any}) => {
    
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


const Nav = () => {

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [iconColor, setIconColor] = useState<string>('gray'); //icon color passed from NavLinks depending on active link
 
  return (
    <>
    <div id='menu' onClick={() => setShowMenu(!showMenu)}> {/**fullscreen nav being within this div allows to click anywhere but links to exit */}
      { showMenu ?
      <>
      <div id='xmark' className={iconColor}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <NavLinks fullscreen={true} iconColor={setIconColor}/>
      </>  
      : 
      <div id='ellipsis' className={iconColor}><FontAwesomeIcon icon={faEllipsisVertical} /></div> }
    </div>
    <NavLinks fullscreen={false} />
    </>
  )
}

export default Nav;