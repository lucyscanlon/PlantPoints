import React from 'react'
import WeekDay from './WeekDay'
import ClearInterface from './ClearInterface'

const EnterPoints = () => {
  return (
    <div className='enterpoints-container'>
        <div className='enterpoints-title-container'>
            <h1>Enter your plant points</h1>
        </div>
        <div className='enterpoints-description-container'>
            <p>Enter the ingredients for your meals this week</p>
        </div>
        <div className='enterpoints-weekdays-container'>
            <WeekDay day="Monday"></WeekDay>
            <WeekDay day="Tuesday"></WeekDay>
            <WeekDay day="Wednesday"></WeekDay>
            <WeekDay day="Thursday"></WeekDay>
            <WeekDay day="Friday"></WeekDay>
            <WeekDay day="Saturday"></WeekDay>
            <WeekDay day="Sunday"></WeekDay>
        </div>
        <ClearInterface></ClearInterface>
      
    </div>
  )
}

export default EnterPoints
