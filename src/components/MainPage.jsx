import React from 'react'
import EnterPoints from './EnterPoints'
import PlantGraph from './PlantGraph'

const MainPage = () => {
  return (
    <>
        <div className='mainpage-container'>
            <PlantGraph></PlantGraph>
            <EnterPoints></EnterPoints>
        </div>
    </>
  )
}

export default MainPage
