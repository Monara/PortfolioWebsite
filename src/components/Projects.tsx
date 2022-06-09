import React, {useState} from 'react';
import Project from './Project';
import Modal from './Modal';
import img1 from '../img/cp1.png';
import img2 from '../img/he1.png';
import img3 from '../img/aof3.png';
import img4 from '../img/portf1.png';
import {Images1, Images2, Images3} from './Modal-content'; //images themselves in PUBLIC
import './Projects.css';
import cloud from '../img/cloud.png';
import saturn from '../img/saturn.png';
import {motion} from 'framer-motion';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import {faDroplet} from '@fortawesome/free-solid-svg-icons';
import Star from './Star';
import waves from '../img/waves.mp4';

const Projects = ({stars} : {stars:number}) => {

  const [modal1, setModal1] = useState(false); //for children: set true on img div click in Project, set false on clicking X icon in Modal
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  /*const cloudVariants = {
    initial: {
      y: '0vh',
      x: '-70vw',
    },
    animate: {
      y: '5vh',
      x: '22vw',
      transition: {duration: 10}
    },
    exit: {
      x: '100vw',
      transition: {duration: 2}
    }
  }*/

  return (
    <div className='Main-container'>
      <motion.div
        className='row'
        id='cloud1-div'
        exit={{x: '50vw', transition: {duration: 2}}}
      >
        <img src={cloud} alt='' />
      </motion.div>
      <div>{Array.from(Array(stars), (_, i) => <Star key={i} delay={2}/>)}</div>
      <h1 id='projects-title'>PROJECTS</h1>
      <div className='row' id='saturn-div'><img src={saturn} alt='' /></div>
      <motion.div 
        className='row'
        id='cloud2-div'
        exit={{x: '-50vw', transition: {duration: 2}}}>
          <img src={cloud} alt='' />
        </motion.div>
      { modal1 ?
      <Modal
        isShown={modal1} 
        show={setModal1}
        images={Images1}
        /> :
        <Project 
          title='COCKTAIL WEBSITE' 
          img={img1}
          description='HTML, CSS, JavaScript, React.js, Node.js, SQL, Express.js. Bilingual, responsive, with a custom API.'
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
          title='EVENTS APP' 
          img={img2}
          description='HTML, Tailwind CSS, JavaScript, React.js, Node.js, Express.js. Uses MyHelsinki Open API.'
          github='https://www.github.com/' 
          website='https://www.example.com'
          show={setModal2}
        /> }
      { modal3 ?
      <Modal 
        isShown={modal3} 
        show={setModal3}
        images={Images3}
      /> :
      <Project 
        title='HOBBY WEBSITE' 
        img={img3} 
        description='Back-to-basics tech stack (HTML, CSS, JavaScript, PHP, SQL). Contains a custom calculation widget.' 
        github='https://www.github.com/' 
        website='https://www.example.com'
        show={setModal3}
        /> }  
      <Project 
        title='THIS WEBSITE'
        img={img4}
        description='HTML, CSS, TypeScript, React.js.' 
        github='https://www.github.com/'
        show={()=>{}} 
      /> {/*no modal gallery */}
      <div id='video-div'>
        <video autoPlay loop muted><source src={waves} type='video/mp4' /></video>
      </div>
      
    </div>
  )
}

export default Projects;