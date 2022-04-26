import React, {useState} from 'react';
import './Modal.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import Images from './Modal-content'; //images themselves in PUBLIC


const Modal = () => {

    let [index, setIndex] = useState(0);
    
    return (
        
        <div className='Modal-container'>
            <div className='row'>
                <div className='arrow left-arrow' onClick={()=> { index > 0 ? setIndex(--index) : setIndex(Images.length-1) }}><FontAwesomeIcon className='arrow-icon' icon={faChevronLeft} /></div>
                <div className='image'>
                    <img src={Images[index].image} alt='Screenshot of website'/>
                </div>
                <div className='arrow right-arrow' onClick={()=> { index === Images.length-1 ? setIndex(0) : setIndex(++index) }}><FontAwesomeIcon className='arrow-icon' icon={faChevronRight} /></div>
            </div>
        </div>
       
    )
}
   
export default Modal;