import React from 'react'

const WeekDay = ({day}) => {
  return (
    <div className='weekday-container'>
        <div className='weekday-width-container'>
            <div className='weekday-title-container'>
                <h3>{day}</h3>
            </div>
            <div className='weekday-expand-container'>
                <div className='weekday-expand-circle'>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeekDay
