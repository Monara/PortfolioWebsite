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
import {Separator, BackgroundImage} from './Elements';
import city from '../img/future.png';

const Projects = () => {

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
    <>
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
      <div className='row' id='saturn-div'><img src={saturn} alt='' /></div>
      <motion.div 
        className='row'
        id='cloud2-div'
        exit={{x: '-50vw', transition: {duration: 2}}}>
          <img src={cloud} alt='' />
      </motion.div>

      <div id='projects-content'>
        <h1 id='projects-title'>PROJECTS</h1>
        
        {/*projects set show to TRUE, set image array*/}
        <Project
          title='COCKTAIL PARTY' 
          img={img1}
          description='HTML, CSS, JavaScript, React.js, Node.js, SQL, Express.js. Bilingual, responsive, with a custom API.'
          github='https://www.github.com/' 
          website='https://www.example.com'
          setState={setModal}
          imgs={Images1}
        /> 
        <Project
          title='HELSINKI EVENTS' 
          img={img2}
          description='HTML, Tailwind CSS, JavaScript, React.js, Node.js, Express.js. Uses MyHelsinki Open API.'
          github='https://www.github.com/' 
          website='https://www.example.com'
          setState={setModal}
          imgs={Images2}
        /> 
        <Project
          title='ART OF FORMULATION' 
          img={img3} 
          description='Back-to-basics tech stack (HTML, CSS, JavaScript, PHP, SQL). Contains a custom calculation widget.' 
          github='https://www.github.com/' 
          website='https://www.example.com'
          setState={setModal}
          imgs={Images3}
        />
        <Project 
          title='THIS WEBSITE'
          img={img4}
          description='HTML, CSS, TypeScript, React.js.' 
          github='https://www.github.com/'
        /> {/*no modal gallery */}

        <Separator />
      </div>
      <BackgroundImage imgSource={city} />
      {/*modal sets show to FALSE, sets image index to show*/}
    </motion.div>
    { modal.show &&
      <Modal state={[modal, setModal]}/>}
    </>   
  )
}

export default Projects;