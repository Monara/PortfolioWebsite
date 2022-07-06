import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopy} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faHtml5, faCss3Alt, faJs, faPhp, faReact, faNodeJs} from '@fortawesome/free-brands-svg-icons';
import './About.css';
import moon from '../img/moon.png';
import trees from '../img/trees.png';
import { motion } from 'framer-motion';
import Star from  '../components/Star';
import {Separator, BackgroundImage} from '../components/Elements';

const About = ({stars} : {stars:number}) => {

  const email = 'my_very_long_email@gmail.com';
  
  const copyContact = (str:string) => {
    navigator.clipboard.writeText(str);
    alert('Email copied!');
  }

  const moonVariants = {
    initial: {
      opacity: 0.1,
    },
    animate: {
      opacity: 1, //limited brightness in css. Can't change filter here
      y: '-50%',
      x: '70%',
      rotate: 180,
      transition: {duration: 8}
    },
    exit: {
      opacity: 0,
      y: 0,
      x: 0,
      rotate: 0,
      transition: {duration: 2}
    }
  }

  const contentVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {duration: 2}
    },
    exit: {
      opacity: 0,
      transition: {duration: 2}
    }
  }

  return (
    <div className='Main-container'>
      {/*<div className='star-field'>{Array.from(Array(stars), (_, i) => <Star key={i} delay={7} />)}</div>*/}
      <motion.div
        id='moon'
        variants={moonVariants}
        initial='initial'
        animate='animate'
        exit='exit'
      ><img src={moon} alt='' />
      </motion.div>

      <motion.div
        id='about-content'
        variants={contentVariants}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <h1 id='about-title'>ABOUT</h1>
        <p id='about-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione delectus culpa quos quam harum iste, numquam voluptatibus exercitationem, perspiciatis impedit officia inventore, recusandae dolorum voluptas ab fugiat laudantium? Voluptates, perspiciatis.
        <br /><br />Neque dolores dicta hic voluptates nemo molestiae consequuntur in, ut quod delectus, maiores cumque rerum accusantium aspernatur modi sit similique cum numquam earum quibusdam quia. Vero dolores similique quasi id?
        <br /><br />Aspernatur laboriosam temporibus perferendis quis commodi exercitationem, quaerat unde sit recusandae molestiae maiores ex fugiat qui labore mollitia, sed possimus minus eveniet vel iusto ad iste molestias illo.
        <br /><br />Aspernatur laboriosam temporibus perferendis quis commodi exercitationem, quaerat unde sit recusandae molestiae maiores ex fugiat qui labore mollitia, sed possimus minus eveniet vel iusto ad iste molestias illo.</p>
        <p className='icons'><a href='https://www.github.com/Monara' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon className='project-icon' id='github' icon={faGithub} /></a></p>   
        <div className="row"><p className='icons'>
          <FontAwesomeIcon icon={faHtml5} />&ensp; 
          <FontAwesomeIcon icon={faCss3Alt} />&ensp;
          <FontAwesomeIcon icon={faJs} />&ensp;
          <FontAwesomeIcon icon={faReact} />&ensp;
          <FontAwesomeIcon icon={faNodeJs} />&ensp;
          <FontAwesomeIcon icon={faPhp} />
        </p></div>  
        <h2 id='contact-title'>CONTACT ME</h2>

        <div className='row' id='contact-content'>
          <input type='text' id='email' value={email} readOnly/>
          <FontAwesomeIcon id='copy-icon' icon={faCopy} onClick={() => copyContact(email)}/>
        </div>
        <Separator />
        <BackgroundImage imgSource={trees} />
      </motion.div>
    </div>    
  )
}

export default About;