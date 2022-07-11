import React, {useState} from 'react';
import './Modal.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight, faChevronLeft, faXmark, faCircle} from '@fortawesome/free-solid-svg-icons';

const Modal = ({state, images} : {state:[{}, Function], images:string[]}) => {

    let [index, setIndex] = useState<number>(0);
    
    return (
        <div className='Modal-container'>
            <div className='Modal'>   
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
            <div id='circles-div'>{Array.from(Array(images.length), (_, i) => i < index+1 ? 
                <FontAwesomeIcon icon={faCircle} className='circle-marker marked' key={i} /> 
                :
                <FontAwesomeIcon icon={faCircle} className='circle-marker' key={i}/>)}
            </div> 
            </div>
        </div> 
    )
}
   
export default Modal;