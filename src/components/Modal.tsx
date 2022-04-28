import React, {useState} from 'react';
import './Modal.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight, faChevronLeft, faXmark} from '@fortawesome/free-solid-svg-icons';


const Modal = ({isShown, show, images} : {isShown:boolean, show(b:boolean):void, images:any}) => {

    let [index, setIndex] = useState<number>(0);
    
    return (
        
        <div className='Modal-container'>
            {isShown ?
            <div className='row'>
                <div className='gallery-icon' onClick={()=> { index > 0 ? setIndex(--index) : setIndex(images.length-1) }}>
                    <FontAwesomeIcon icon={faChevronLeft} className='arrow-icon'/>
                </div>
                <div className='image'>
                    <img src={images[index].image} alt='Screenshot of website'/>
                </div>
                <div className='gallery-icon' onClick={()=> { index === images.length-1 ? setIndex(0) : setIndex(++index) }}>
                    <FontAwesomeIcon icon={faChevronRight} className='arrow-icon' />
                </div>
                <div className='xmark'><FontAwesomeIcon icon={faXmark} id='xmark-icon' onClick={()=>{show(false);}}/></div>
            </div> : <></> }
        </div> 
    )
}
   
export default Modal;