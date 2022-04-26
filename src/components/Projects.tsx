import React, {useState} from 'react';
import './Projects.css';
import Project from './Project';
import Modal from './Modal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon} from '@fortawesome/free-solid-svg-icons';
import img2 from '../img/cp1.png';
import img3 from '../img/aof3.png';

const Projects = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className='Main-container'>
      <h1>PROJECTS</h1>
      { showModal ? <Modal /> :
      <Project 
        title='COCKTAIL WEBSITE' 
        img={img2}
        description='HTML, CSS, JavaScript, React.js, Node.js, SQL, Express.js. Bilingual, responsive, has a custom API.'
        github='https://www.github.com/' 
        website='https://www.example.com'
      /> }
      <Project 
        title='HOBBY WEBSITE' 
        img={img3} 
        description='Back-to-basics tech stack (HTML, CSS, JavaScript, PHP, SQL). Contains a custom calculation widget.' 
        github='https://www.github.com/' 
        website='https://www.example.com'
      />
      <Project 
        title='THIS WEBSITE'
        description='HTML, CSS, TypeScript, React.js.' 
        github='https://www.github.com/'
      />
    </div>
  )
}

export default Projects;
/**<div>{Array.from(Array(20), (_, i) => <Star key={i} />)}</div> 
 * <FontAwesomeIcon icon={faMoon} id='moon' />
*/