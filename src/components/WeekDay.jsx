import React from 'react'
import { FaAngleDown, FaAngleUp} from 'react-icons/fa'
import {useState} from 'react'

const WeekDay = ({day, isActive}) => {

  const [weekDayActive, setWeekDayActive] = useState(false);

  const isActiveColour = {
    backgroundColor: '#CEEFC3',
  }

  const notActiveColour = {
    backgroundColor: '#F7F7F7',
  }
  

  return (
    <div className='weekday-container' style={weekDayActive ?isActiveColour : notActiveColour}>
        <div className='weekday-width-container'>
            <div className='weekday-title-container'>
                <h3>{day}</h3>
            </div>
            <div className='weekday-expand-container'>
                {!weekDayActive && <div className='weekday-expand-circle' onClick={() => setWeekDayActive((prevState) => !prevState)}>
                    <div className='weekday-dropdown'>
                      <FaAngleDown></FaAngleDown>
                    </div>
                </div>} 
            </div>
        </div>
        {weekDayActive &&<div className='weekday-open'>
          <div className='weekday-content-container'>
            <div className='weekday-instruct'>
              <p>Enter an ingredient and press enter</p>
            </div>
            <div className='weekday-input-container'>
              <input type="text"></input>
              <select name="meal">
                <option value="volvo">Breakfast</option>
                <option value="saab">Lunch</option>
                <option value="fiat">Dinner</option>
                <option value="audi">Snacks</option>
              </select>
            </div>
            <div className='weekday-ingredients-container'>
              <div className='weekday-meal-container'>
                <div className='weekday-meal-title'>
                  <h4>Breakfast</h4>
                </div>
                <div className='weekday-ingredients-list'>
                  <p>Apple, Orange, Pear</p>
                </div>
              </div>
              <div className='weekday-meal-container'>
                <div className='weekday-meal-title'>
                  <h4>Lunch</h4>
                </div>
                <div className='weekday-ingredients-list'>
                  <p>Apple, Orange, Pear</p>
                </div>
              </div>
              <div className='weekday-meal-container'>
                <div className='weekday-meal-title'>
                  <h4>Dinner</h4>
                </div>
                <div className='weekday-ingredients-list'>
                  <p>Apple, Orange, Pear</p>
                </div>
              </div>
              <div className='weekday-meal-container'>
                <div className='weekday-meal-title'>
                  <h4>Snacks</h4>
                </div>
                <div className='weekday-ingredients-list'>
                  <p>Apple, Orange, Pear</p>
                </div>
              </div>
            </div>
          </div> 
          <div className='weekday-expand-close'>
            <div className='weekday-expandclose-circle' onClick={() => setWeekDayActive((prevState) => !prevState)}>
              <div className='weekday-close-up'>
                <FaAngleUp></FaAngleUp>
              </div>
            </div>
          </div>
        </div>}
    </div>
  )

}

export default WeekDay
