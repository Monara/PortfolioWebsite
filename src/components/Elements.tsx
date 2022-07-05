import React from 'react';
import './Elements.css';

const Separator = () => {
  return (
    <div className='separator' />
  )
}

const BackgroundImage = ({imgSource} : {imgSource : string}) => {
  return (
    <div className='background-img-container'><img src={imgSource} alt='' /></div>
  )
}

export {Separator, BackgroundImage};