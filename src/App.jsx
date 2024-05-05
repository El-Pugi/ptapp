import React from 'react'
import {Route, Routes} from "react-router-dom" 
import NavBar from './components/NavBar'
import Customerlist from './components/Customerlist'
import Traininglist from './components/Traininglist'
import Calender from './components/Calender'

export default function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Customerlist/>}/>
        <Route path='/trainings' element={<Traininglist/>}/>
        <Route path='/calender' element={<Calender/>}/>
      </Routes>
    </>
  )
}

