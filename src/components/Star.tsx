import React, {useState, useEffect} from 'react';
import './Star.css';

const Star = () => {
  
  const randomXY = () => { //random XY position for stars, but not on edges
    let y:number = Math.floor(Math.random() * (97-3+1) + 3);
    let x:number = Math.floor(Math.random() * (82-3+1) + 3);
    return [x, y];
  }

  const randomInterval = () => {
    return Math.floor(Math.random() * (30-10+1) + 10); //random star glow interval, 10-30s.
  }

  const [timer, ] = useState(randomInterval());
  const [xy, setXY] = useState(randomXY());

  useEffect(() => { //position changes
    let pos = randomXY();
    const interval = setInterval(() => {
      setXY(pos);}, (timer * 1000)); //timer in seconds
    return () => clearInterval(interval);
  }, [xy, timer]);

  /*insert prop & random styling */
  const style1 = {
    left: `${xy[0]}%`,
    top: `${xy[1]}%`
  }

  //error if shorthands are mixed with separate values, so all separate:
  const style2 = {
    animationName: 'glowing-star',
    animationDuration: `${timer}s`,
    animationTimingFunction: 'ease',
    animationIterationCount: 'infinite'
  }

  return (
    <div className='star-div' style={style1}>
        <div className='star' style={style2}></div>
    </div>
  )
}

export default Star;