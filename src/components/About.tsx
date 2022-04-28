import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopy} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faHtml5, faCss3Alt, faJs, faPhp, faReact, faNodeJs} from '@fortawesome/free-brands-svg-icons';

const About = () => {

  const copyContact = () => {
    
  }

  return (
    <div className='Main-container'>
      <h1>ABOUT</h1>
      <p id='about'><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione delectus culpa quos quam harum iste, numquam voluptatibus exercitationem, perspiciatis impedit officia inventore, recusandae dolorum voluptas ab fugiat laudantium? Voluptates, perspiciatis.</span><span>Neque dolores dicta hic voluptates nemo molestiae consequuntur in, ut quod delectus, maiores cumque rerum accusantium aspernatur modi sit similique cum numquam earum quibusdam quia. Vero dolores similique quasi id?</span><span>Aspernatur laboriosam temporibus perferendis quis commodi exercitationem, quaerat unde sit recusandae molestiae maiores ex fugiat qui labore mollitia, sed possimus minus eveniet vel iusto ad iste molestias illo. Placeat, ad.</span><span>Temporibus laborum eaque illo aperiam totam. Inventore nam voluptate voluptatibus, aspernatur nobis facere quod odit quas expedita distinctio assumenda optio quam asperiores iste suscipit tempora atque placeat! Veniam, repellendus nulla.</span><span>Optio, ex dolor id a fugiat sapiente odio nisi numquam non reiciendis, vitae vel ducimus asperiores distinctio dolorem nemo possimus ipsum unde ab? Ullam eligendi accusantium facilis exercitationem, ipsum praesentium.</span></p>
      <p><a href='https://www.github.com/Monara' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon className='project-icon' icon={faGithub} /></a></p>   
      <div className="row"><p>
        <FontAwesomeIcon className='project-icon' icon={faHtml5} />&emsp; 
        <FontAwesomeIcon className='project-icon' icon={faCss3Alt} />&emsp;
        <FontAwesomeIcon className='project-icon' icon={faJs} />&emsp;
        <FontAwesomeIcon className='project-icon' icon={faReact} />&emsp;
        <FontAwesomeIcon className='project-icon' icon={faNodeJs} />&emsp;
        <FontAwesomeIcon className='project-icon' icon={faPhp} />
      </p></div>  
      <h2>CONTACT ME</h2>
      <p id='email'>me@email.com &ensp;<FontAwesomeIcon id='copy-icon' icon={faCopy} onClick={copyContact}/></p>
    </div>    
  )
}

export default About;