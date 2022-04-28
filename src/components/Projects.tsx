import React, {useState} from 'react';
import Project from './Project';
import Modal from './Modal';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import {faMoon} from '@fortawesome/free-solid-svg-icons';
import img2 from '../img/cp1.png';
import img3 from '../img/aof3.png';
import {Images1, Images2} from './Modal-content'; //images themselves in PUBLIC

const Projects = () => {

  const [modal1, setModal1] = useState<boolean>(false); //for children: set true on img div click in Project, set false on clicking X icon in Modal
  const [modal2, setModal2] = useState<boolean>(false);

  return (
    <div className='Main-container'>
      <h1>PROJECTS</h1>
      { modal1 ?
      <Modal
        isShown={modal1} 
        show={setModal1}
        images={Images1}
        /> :
        <Project 
          title='COCKTAIL WEBSITE' 
          img={img2}
          description='HTML, CSS, JavaScript, React.js, Node.js, SQL, Express.js. Bilingual, responsive, has a custom API.'
          github='https://www.github.com/' 
          website='https://www.example.com'
          show={setModal1}
        /> } {/*data from child https://www.freecodecamp.org/news/pass-data-between-components-in-react/*/}
      { modal2 ?
      <Modal 
        isShown={modal2} 
        show={setModal2}
        images={Images2}
      /> :
      <Project 
        title='HOBBY WEBSITE' 
        img={img3} 
        description='Back-to-basics tech stack (HTML, CSS, JavaScript, PHP, SQL). Contains a custom calculation widget.' 
        github='https://www.github.com/' 
        website='https://www.example.com'
        show={setModal2}
        /> }  
      <Project 
        title='THIS WEBSITE'
        description='HTML, CSS, TypeScript, React.js.' 
        github='https://www.github.com/'
        show={()=>{}} 
      /> {/*no modal gallery */}
    </div>
  )
}

export default Projects;
/*
 * <FontAwesomeIcon icon={faMoon} id='moon' />
*/