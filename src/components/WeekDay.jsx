import React from 'react'
import { FaAngleDown, FaAngleUp} from 'react-icons/fa'
import {useState, useEffect} from 'react'

const WeekDay = ({day, isActive}) => {

  const [weekDayActive, setWeekDayActive] = useState(false);
  const [breakfastList, setBreakfastList] = useState(['Apple', 'Porridge', 'Milk']);
  const [lunchList, setLunchList] = useState([]);
  const [dinnerList, setDinnerList] = useState([]);
  const [snackList, setSnackList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [mealValue, setMealValue] = useState('Breakfast');
  const [clearAllButton, setClearAllButton] = useState(false);

  const isActiveColour = {
    backgroundColor: '#CEEFC3',
  }

  const notActiveColour = {
    backgroundColor: '#F7F7F7',
  }

  const handleRemove = (indexToRemove, setState, state) => {
    const updatedList = state.filter((_, index) => index !== indexToRemove);
    setState(updatedList);
  };

  const addItem = () => {
    if(inputValue.trim()) {

      if(mealValue === 'breakfast') {
        setBreakfastList((prevList) => [...prevList, inputValue.trim()]);
      } else if (mealValue === 'lunch') {
        setLunchList((prevList) => [...prevList, inputValue.trim()]);
      } else if (mealValue === 'dinner') {
        setDinnerList((prevList) => [...prevList, inputValue.trim()]);
      } else if (mealValue === 'snacks') {
        setSnackList((prevList) => [...prevList, inputValue.trim()]);
      }  
      setInputValue('');
    }
  }

  const handleKeyDown = event => {
    if(event.key === 'Enter') {
      addItem();
    }
  }

  console.log(mealValue);
  

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
              <input type="text" id="foodinput" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown}></input>
              <select name="meal" value={mealValue} onChange={(e) => setMealValue(e.target.value)}>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snacks">Snacks</option>
              </select>
            </div>
            <div className='weekday-ingredients-container'>
              <div className='weekday-meal-container'>
                <div className='weekday-meal-title'>
                  <h4>Breakfast</h4>
                </div>
                <div className='weekday-ingredients-list'>
                  <p>
                  { breakfastList.map((item, index) => ( // <- map function here
                    index === (breakfastList.length -1) ? <span onClick={() => handleRemove(index, setBreakfastList, breakfastList)} key={index}>{item}</span> : <span onClick={() => handleRemove(index, setBreakfastList, breakfastList)} key={index}>{item}, </span>
                  ))}
                  </p>
                </div>
              </div>
              <div className='weekday-meal-container'>
                <div className='weekday-meal-title'>
                  <h4>Lunch</h4>
                </div>
                <div className='weekday-ingredients-list'>
                  <p>
                  { lunchList.map((item, index) => ( // <- map function here
                    index === (lunchList.length -1) ? <span onClick={() => handleRemove(index, setLunchList, lunchList)} key={index}>{item}</span> : <span onClick={() => handleRemove(index, setLunchList, lunchList)} key={index}>{item}, </span>
                  ))}
                  </p>
                </div>
              </div>
              <div className='weekday-meal-container'>
                <div className='weekday-meal-title'>
                  <h4>Dinner</h4>
                </div>
                <div className='weekday-ingredients-list'>
                  <p>
                  { dinnerList.map((item, index) => ( // <- map function here
                    index === (dinnerList.length -1) ? <span onClick={() => handleRemove(index, setDinnerList, dinnerList)} key={index}>{item}</span> : <span onClick={() => handleRemove(index, setDinnerList, dinnerList)} key={index}>{item}, </span>
                  ))}
                  </p>
                </div>
              </div>
              <div className='weekday-meal-container'>
                <div className='weekday-meal-title'>
                  <h4>Snacks</h4>
                </div>
                <div className='weekday-ingredients-list'>
                  <p>
                  { snackList.map((item, index) => ( // <- map function here
                    index === (snackList.length -1) ? <span onClick={() => handleRemove(index, setSnackList, snackList)} key={index}>{item}</span> : <span onClick={() => handleRemove(index, setSnackList, snackList)} key={index}>{item}, </span>
                  ))}
                  </p>
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
