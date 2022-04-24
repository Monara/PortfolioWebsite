import React, {useState, useEffect} from 'react';
import './Star.css';

const Star = () => {
  
  const randomXY = () => { //random Y position for stars
    while(true) {
      let y:number = Math.floor(Math.random() * (95-5+1) + 5);
      let x:number = Math.floor(Math.random() * (75-5+1) + 5);

      if(!((x>15 && x<45) && (y>25 && y<55))) { //don't overlap glowing circle...will need changing later
        return [x, y];
      }
    }
  }

  const randomInterval = () => {
    return Math.floor(Math.random() * (30-10+1) + 10); //random star glow interval, 10-30s
  }

  const [timer, setTimer] = useState(randomInterval());
  const [xy, setXY] = useState(randomXY());

  useEffect(() => {
    const interval = setInterval(() => {setTimer(randomInterval()); setXY(randomXY());}, (timer * 1000)); //timer in seconds
    return () => clearInterval(interval);
  }, [timer]);

  /**insert prop & random styling */
  const style1 = {
    left: `${xy[0]}%`,
    top: `${xy[1]}%`
  }

  const style2 = {
      animation: `glowing-star ${timer}s ease-in-out infinite`
  }

  return (
    <div className='star' style={style1}>
        <div className='glowing-star' style={style2}></div>
    </div>
  )
}

export default Star;