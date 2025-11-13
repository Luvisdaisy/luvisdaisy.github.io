import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Education from './pages/Education'
import React from 'react'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/education' element={<Education />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
