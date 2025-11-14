import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import EducationPage from './pages/EducationPage'
import ProjectPage from './pages/ProjectPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import React from 'react'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/education' element={<EducationPage />} />
        <Route path='/projects' element={<ProjectPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
