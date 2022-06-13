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
import Star from './Star';
import waves from '../img/waves.mp4';

const Projects = ({stars} : {stars:number}) => {

  const [modal, setModal] = useState({show: false, images: ['']});//for children: set true on img div click in Project, set false on clicking X icon in Modal
  //which images modal will show

  const contentVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 2}
    },
    exit: {
      opacity: 0,
      transition: {delay: 1, duration: 1}
    }
  }

  return (
    <motion.div 
      className='Main-container'
      variants={contentVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
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
      { modal.show ?
      <Modal
        state={[modal, setModal]}
        images={modal.images}
        /> : <></> }
        <Project 
          title='COCKTAIL WEBSITE' 
          img={img1}
          description='HTML, CSS, JavaScript, React.js, Node.js, SQL, Express.js. Bilingual, responsive, with a custom API.'
          github='https://www.github.com/' 
          website='https://www.example.com'
          state={setModal}
          imgs={Images1}
          
        /> {/*data from child https://www.freecodecamp.org/news/pass-data-between-components-in-react/*/}
        <Project 
          title='EVENTS APP' 
          img={img2}
          description='HTML, Tailwind CSS, JavaScript, React.js, Node.js, Express.js. Uses MyHelsinki Open API.'
          github='https://www.github.com/' 
          website='https://www.example.com'
          state={setModal}
          imgs={Images2}
          
        />
      <Project 
        title='HOBBY WEBSITE' 
        img={img3} 
        description='Back-to-basics tech stack (HTML, CSS, JavaScript, PHP, SQL). Contains a custom calculation widget.' 
        github='https://www.github.com/' 
        website='https://www.example.com'
        state={setModal}
        imgs={Images3}
        
        /> 
      <Project 
        title='THIS WEBSITE'
        img={img4}
        description='HTML, CSS, TypeScript, React.js.' 
        github='https://www.github.com/'
      /> {/*no modal gallery */}
      <div id='video-div'>
        <video autoPlay loop muted><source src={waves} type='video/mp4' /></video>
      </div>
    </motion.div>
  )
}

export default Projects;