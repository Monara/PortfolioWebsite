import React, {useState} from 'react';
import './Modal.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight, faChevronLeft, faXmark} from '@fortawesome/free-solid-svg-icons';


//edit state type

const Modal = ({state, images} : {state:any, images:any}) => {

    let [index, setIndex] = useState<number>(0);
    
    return (
        
        <div className='Modal-container'>
            <div className='xmark'><FontAwesomeIcon icon={faXmark} id='xmark-icon' onClick={()=>{state[1]({...state[0], show: false});}}/></div>
            <div id='gallery-row' className='row'>
                <div className='gallery-icon' >
                    <FontAwesomeIcon icon={faChevronLeft} className='arrow-icon' onClick={()=> { index > 0 ? setIndex(--index) : setIndex(images.length-1) }}/>
                </div>
                <div className='image'>
                   <img src={images[index]} alt='Screenshot of website'/>
                </div>
                <div className='gallery-icon'>
                    <FontAwesomeIcon icon={faChevronRight} className='arrow-icon' onClick={()=> { index === images.length-1 ? setIndex(0) : setIndex(++index) }}/>
                </div>
            </div>
        </div> 
    )
}
   
export default Modal;