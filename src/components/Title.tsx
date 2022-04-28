import React from 'react';
import './Title.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMeteor} from '@fortawesome/free-solid-svg-icons';
import Star from  '../components/Star';

const Title = ({stars} : {stars:number}) => {

  return (
    
    <div className='Main-container'>
        <div className='orbit-big'>
            <div className='orbit-small'>
              <div className='glowing-circle'></div>
            </div>
            <div className='text'>
              <h1>HI, I'M <span className='gradient'>M</span>ONARA,</h1>
              <h2>SUBTITLE<FontAwesomeIcon icon={faMeteor}/></h2>
            </div>
        </div>
        <div>{Array.from(Array(stars), (_, i) => <Star key={i} />)}</div>
    </div>
  )
}

export default Title;