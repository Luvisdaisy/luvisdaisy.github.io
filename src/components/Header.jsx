import React, { useState, useEffect } from 'react'
import { AiOutlineAlignRight } from 'react-icons/ai'
import { useLocation, NavLink, Link } from 'react-router-dom'

function Header() {
  const themes = ['cupcake', 'night', 'garden', 'sunset']
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('theme') || 'cupcake'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
    localStorage.setItem('theme', currentTheme)
  }, [currentTheme])

  return (
    <header className='navbar bg-base-100 shadow-sm'>
      <div className='navbar-start'>
        <Link to='/' className='btn btn-ghost text-xl'>
          HAOTIANTZZ
        </Link>
      </div>

      <nav className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal gap-1 px-1'>
          <li>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'menu-active' : '')}>
              简介
            </NavLink>
          </li>
          <li>
            <NavLink to='/education' className={({ isActive }) => (isActive ? 'menu-active' : '')}>
              教育经历
            </NavLink>
          </li>
          <li>
            <NavLink to='/projects' className={({ isActive }) => (isActive ? 'menu-active' : '')}>
              项目经历
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'menu-active' : '')}>
              关于我
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={({ isActive }) => (isActive ? 'menu-active' : '')}>
              联系
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className='navbar-end'>
        <select
          id='theme-selector'
          value={currentTheme}
          onChange={(e) => setCurrentTheme(e.target.value)}
          className='select select-bordered select-sm mr-4 w-24'
        >
          {themes.map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>

        <div className='dropdown dropdown-bottom dropdown-end'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <AiOutlineAlignRight className='h-7 w-7' />
          </div>

          <ul
            tabIndex='-1'
            className='menu dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow-lg'
          >
            <li>
              <NavLink to='/' className={({ isActive }) => (isActive ? 'menu-active' : '')}>
                简介
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/education'
                className={({ isActive }) => (isActive ? 'menu-active' : '')}
              >
                教育经历
              </NavLink>
            </li>
            <li>
              <NavLink to='/projects' className={({ isActive }) => (isActive ? 'menu-active' : '')}>
                项目经历
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' className={({ isActive }) => (isActive ? 'menu-active' : '')}>
                关于我
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' className={({ isActive }) => (isActive ? 'menu-active' : '')}>
                联系
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
