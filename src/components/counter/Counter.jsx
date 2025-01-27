import React, { useState } from 'react'
import cl from './Counter.module.css'
import Countdown from 'react-countdown';

const Counter = ({deadline, date}) => {
    
    // console.log(deadline.getTime())
    const deff = deadline - date
  return (
    <div className={cl.counter__container}>
        <p className={cl.counter}>До конца практики осталось: <Countdown date={Date.now() + deff} /></p>
    </div>
  )
}

export default Counter