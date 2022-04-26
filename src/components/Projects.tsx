import React, {useState} from 'react';
import './Projects.css';
import Project from './Project';
import Modal from './Modal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon} from '@fortawesome/free-solid-svg-icons';
import img2 from '../img/cp1.png';
import img3 from '../img/aof3.png';
import {Images1, Images2} from './Modal-content'; //images themselves in PUBLIC

const Projects = () => {

  const [showModal1, setShowModal1] = useState<boolean>(false);
  const [showModal2, setShowModal2] = useState<boolean>(false);

  return (
    <div className='Main-container'>
      <h1>PROJECTS</h1>

      { showModal1 ?
      <Modal
        isShown={showModal1} 
        show={setShowModal1}
        images={Images1}
        /> :
      <div className='project' onClick={()=>{setShowModal1(true); setShowModal2(false);}}>
        <Project 
          title='COCKTAIL WEBSITE' 
          img={img2}
          description='HTML, CSS, JavaScript, React.js, Node.js, SQL, Express.js. Bilingual, responsive, has a custom API.'
          github='https://www.github.com/' 
          website='https://www.example.com'
        /> 
      </div> }
      
      { showModal2 ?
      <Modal 
        isShown={showModal2} 
        show={setShowModal2}
        images={Images2}
      /> :
      <div className='project' onClick={()=>{setShowModal2(true); setShowModal1(false);}}>
        <Project 
          title='HOBBY WEBSITE' 
          img={img3} 
          description='Back-to-basics tech stack (HTML, CSS, JavaScript, PHP, SQL). Contains a custom calculation widget.' 
          github='https://www.github.com/' 
          website='https://www.example.com'
        />
        </div> }

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