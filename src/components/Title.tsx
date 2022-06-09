import React from 'react';
import './Title.css';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Star from  '../components/Star';
import { motion} from 'framer-motion';

const Title = ({stars} : {stars:number}) => {

  const orbitBigVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      skewX: '10deg',
      skewY: '10deg',
      transition: {duration: 2}
    },
    exit: {
      skewX: '-10deg',
      skewY: '-10deg',
      overflow: 'hidden',
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
      y: '-100vh',
      x: '-50vw',
      width: '50vw',
      height: '50vw',
      transition: {duration: 2}
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

    <div className='Main-container'>
      <div className='circle-container'>        
        <motion.div className='orbit-big'
          variants={orbitBigVariants}
          initial='initial' 
          animate='animate'
          exit='exit'>
          
          <motion.div className='orbit-small'/>
        </motion.div>
        <motion.div className='glowing-circle'
          variants={circleVariants}
          initial='initial' 
          animate='animate'
          exit='exit'>
        </motion.div>
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

/**<motion.div className='orbit-big'
                variants={orbitVariants}
                initial='initial' 
                animate='animate'
                exit='exit'>
              <motion.div className='orbit-small'
                variants={orbitVariants}
                initial='initial' 
                animate='animate'
                exit='exit'
              />
            </motion.div> 
            
            
            <motion.div className='text'
              variants={headingVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              >
                <h1>HI, I'M <span className='gradient'>M</span>ONARA,</h1>
                <h2>SUBTITLE<FontAwesomeIcon icon={faMeteor}/></h2>
            </motion.div>
            
            
            
            
            
            */