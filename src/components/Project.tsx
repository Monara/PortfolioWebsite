import React from 'react';
import './Project.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';

const Project = ({title, img, description, github, website, setState, imgs} : {title:string, img:string, description:string, github:string, website?:string, setState?:Function, imgs?:string[]}) => {

  return (

    <div className='Project-container'>

      <h2>{title} <a href={github} target='_blank' rel='noopener noreferrer'><FontAwesomeIcon className='link-icon' icon={faGithub} /> </a> 
        { website && 
          <a href={website} target='_blank' rel='noopener noreferrer'><FontAwesomeIcon className='link-icon' icon={faArrowUpRightFromSquare} /></a>}
      </h2>

      { setState && imgs ?

      <div className='image-container' onClick={() => setState({show: true, images: imgs})}>
        <img style={{cursor: 'pointer'}} src={img} alt='Portfolio website screenshot'/>
        <div className='text-container'>
          <p>{description}</p>   
        </div>
      </div> 
      :
      <div className='image-container'>
        <img src={img} alt='Portfolio website screenshot'/>
        <div className='text-container'>
          <p>{description}</p>   
        </div>
      </div> }
      
    </div>
  )
}

export default Project;
//Portfolio website won't have an external link