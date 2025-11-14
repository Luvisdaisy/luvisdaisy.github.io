import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Education from './pages/Education'
import ProjectPage from './pages/ProjectPage'
import React from 'react'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/education' element={<Education />} />
        <Route path='/projects' element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
