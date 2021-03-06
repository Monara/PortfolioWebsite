import React from 'react';
import './Title.css';
import Star from  '../components/Star';
import {motion} from 'framer-motion';

const Title = ({stars} : {stars:number}) => {

  const orbitBigVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {duration: 2}
    },
    exit: {
      opacity: 0,
      transition: {duration: 1}
    }
  };

  const lastToFadeVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {duration: 2}
    },
    exit: {
      opacity: 0,
      transition: {delay: 1, duration: 1}
    }
  };

  const headingVariants = {
    initial: {
      x: '-100vw'
    },
    animate: {
      x: 0,
      transition: {duration: 0.5, delay: 1.5}
    },
    exit: {
      opacity: 0,
      transition: {duration: 1}
    }
  }

  return (

    <div className='Main-container'>
      <motion.div
        variants={lastToFadeVariants}
        initial='initial' 
        animate='animate'
        exit='exit'>
      {Array.from({length: stars}, (_, i) => <Star key={i}/>)}</motion.div> 
      <div id='title-container'>
          <motion.div className='orbit-big'
            variants={orbitBigVariants}
            initial='initial' 
            animate='animate'
            exit='exit'>
            <motion.div className='orbit-small' />
          </motion.div>
          <motion.div className='glowing-circle'
            variants={lastToFadeVariants}
            initial='initial' 
            animate='animate'
            exit='exit'
          /> 
      </div>
      <div id='title-text'>
        <motion.div
          variants={headingVariants}
          initial='initial'
          animate='animate'
          exit='exit'
        >
          <h1>HI, I'M <span className='gradient'>M</span>ONARA</h1>
          <h2>MY LONG SUBTITLE</h2>
        </motion.div> 
        </div> 
    </div>
  )
}

export default Title;