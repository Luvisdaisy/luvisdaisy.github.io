import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import EducationPage from './pages/EducationPage'
import ProjectPage from './pages/ProjectPage'
import React from 'react'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/education' element={<EducationPage />} />
        <Route path='/projects' element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
