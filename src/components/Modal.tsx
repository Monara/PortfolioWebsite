import React, {useState} from 'react';
import './Modal.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight, faChevronLeft, faXmark} from '@fortawesome/free-solid-svg-icons';


const Modal = ({isShown, show, images} : {isShown:boolean, show:any, images:any}) => {

    let [index, setIndex] = useState(0);
    
    return (
        
        <div className='Modal-container'>
            {isShown ?
            <div className='row'>
                <div className='gallery-icon left-arrow' onClick={()=> { index > 0 ? setIndex(--index) : setIndex(images.length-1) }}><FontAwesomeIcon icon={faChevronLeft} /></div>
                <div className='image'>
                    <img src={images[index].image} alt='Screenshot of website'/>
                </div>
                <div className='gallery-icon right-arrow' onClick={()=> { index === images.length-1 ? setIndex(0) : setIndex(++index) }}><FontAwesomeIcon icon={faChevronRight} /></div>
                <div className='gallery-icon xmark' onClick={()=>{show(false);}}><FontAwesomeIcon icon={faXmark} /></div>
            </div> : <></> }
        </div>
       
    )
}
   
export default Modal;