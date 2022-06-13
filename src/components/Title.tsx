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
      transition: {duration: 2}
    }
  };

  const circleVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {duration: 2}
    },
    exit: {
      x: '-100vw',
      width: '30vw',
      height: '30vw',
      transition: { duration: 2}
    }
  };

  const headingVariants = {
    initial: {
      x: '-100vw'
    },
    animate: {
      x: 0,
      transition: {duration: 1, delay: 0.5}
    },
    exit: {
      opacity: 0,
      transition: {duration: 1}
    }
  }

  return (

    <div id='title-page' className='Main-container'>
      <div className='circle-container'>        
        <motion.div className='orbit-big'
          variants={orbitBigVariants}
          initial='initial' 
          animate='animate'
          exit='exit'>
          <motion.div className='orbit-small' />
        </motion.div>
        <motion.div className='glowing-circle'
            variants={circleVariants}
            initial='initial' 
            animate='animate'
            exit='exit'
        />
        <motion.div className='text'
          variants={headingVariants}
          initial='initial'
          animate='animate'
          exit='exit'
        >
            <h1>HI, I'M <span className='gradient'>M</span>ONARA,</h1>
            <h2>MY LONG SUBTITLE</h2>
        </motion.div>      
      </div>
      <div>{Array.from(Array(stars), (_, i) => <Star key={i} delay={1}/>)}</div>
    </div>
  )
}

export default Title;