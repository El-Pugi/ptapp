import React from 'react'
import {Route, Routes} from "react-router-dom" 
import NavBar from './components/NavBar'
import Customerlist from './components/Customerlist'
import Traininglist from './components/Traininglist'
import Calendar from './components/Calendar'

export default function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Customerlist/>}/>
        <Route path='/trainings' element={<Traininglist/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
      </Routes>
    </>
  )
}

