import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopy} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faHtml5, faCss3Alt, faJs, faPhp, faReact, faNodeJs} from '@fortawesome/free-brands-svg-icons';
import './About.css';

const About = () => {

  const copyContact = () => {
    
  }

  return (
    <div className='Main-container'>
      <h1>ABOUT</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Asperiores sit temporibus exercitationem amet. Ea aperiam totam eveniet, a autem, asperiores pariatur, aliquam impedit nemo porro at consequatur provident fuga facere?</p>
      <p><a href='https://www.github.com/Monara' target='_blank' rel='noopener noreferer'><FontAwesomeIcon className='project-icon' icon={faGithub} /></a></p>   
      <div className="row"><p>
        <FontAwesomeIcon className='project-icon' icon={faHtml5} />&emsp; 
        <FontAwesomeIcon className='project-icon' icon={faCss3Alt} />&emsp;
        <FontAwesomeIcon className='project-icon' icon={faJs} />&emsp;
        <FontAwesomeIcon className='project-icon' icon={faReact} />&emsp;
        <FontAwesomeIcon className='project-icon' icon={faNodeJs} />&emsp;
        <FontAwesomeIcon className='project-icon' icon={faPhp} />
      </p></div>  
      <h2>CONTACT ME</h2>
      <p id='email'>me@email.com</p>
      <button onClick={copyContact}><FontAwesomeIcon icon={faCopy}/></button>
    </div>    
  )
}

export default About;