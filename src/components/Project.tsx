import React from 'react';
import './Project.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';

const Project = ({title, img, description, github, website} : {title:string, img?:string, description:string, github:string, website?:string} ) => {
  
  return (

    <div className='Project-container'>
      <h2>{title}</h2>
      {img ? <div className='image-container'><img src={img} alt='Portfolio website screenshot'/></div> : <></>}
      <div className='text-container'>
        <p>{description}</p>
        <div className='link-container'>
          <a href={github} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon className='project-icon' icon={faGithub} />&ensp;
          </a>
          {website ? 
          <a href={website} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon className='project-icon' icon={faArrowUpRightFromSquare} />
          </a> : <></>}
        </div>    
      </div>
    </div>
  )
}

export default Project;
//Portfolio website won't have an image or external link