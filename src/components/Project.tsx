import React from 'react';
import './Project.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';

const Project = ({title, img, description, github, website, show} : {title:string, img:string, description:string, github:string, website?:string, show(b:boolean):void}) => {

  return (

    <div className='Project-container'>
      <h2>{title} <a href={github} target='_blank' rel='noopener noreferrer'><FontAwesomeIcon className='link-icon' icon={faGithub} /> </a> 
        {website ? 
          <a href={website} target='_blank' rel='noopener noreferrer'><FontAwesomeIcon className='link-icon' icon={faArrowUpRightFromSquare} /> </a> 
          : <></>}
      </h2>
      <div className='image-container' onClick={() => {show(true);}}><img src={img} alt='Portfolio website screenshot'/></div>
      <div className='text-container'>
        <p>{description}</p>   
      </div>
    </div>
  )
}

export default Project;
//Portfolio website won't have an external link