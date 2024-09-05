import React from 'react'
import cl from "./Info.module.css"
import Counter from '../counter/Counter'

const Info = ({deadline, date, day, dayOfWeek}) => {
  return (
    <div className={cl.info}>
        <div className={cl.date__now}>
            <p className={cl.date}>{day}</p>
            <p className={cl.day}>{dayOfWeek}</p>
        </div>
        <Counter deadline={deadline} date={date}/>
    </div>
  )
}

export default Info