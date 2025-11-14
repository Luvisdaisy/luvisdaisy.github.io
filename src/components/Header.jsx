import React, { useState, useEffect } from 'react'
import { AiOutlineAlignRight } from 'react-icons/ai'
import { useLocation, NavLink, Link } from 'react-router-dom'

function Header() {
  const themes = ['light', 'dark', 'garden', 'sunset']
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
    localStorage.setItem('theme', currentTheme)
  }, [currentTheme])

  return (
    <div className='navbar bg-base-100 shadow-sm'>
      <div className='navbar-start'>
        <Link className='btn btn-ghost text-xl' to='/'>
          HAOTIANTZZ
        </Link>
      </div>

      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
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
      </div>

      <div className='navbar-end'>
        <select
          id='theme-selector'
          value={currentTheme}
          onChange={(e) => setCurrentTheme(e.target.value)}
          className='select select-bordered select-sm w-24 mr-4'
        >
          {themes.map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>

        <div className='dropdown dropdown-end dropdown-bottom'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <AiOutlineAlignRight className='h-7 w-7' />
          </div>

          <ul
            tabIndex='-1'
            className='dropdown-content menu bg-base-100 rounded-box z-1 w-52 mt-3 p-2 shadow-sm'
          >
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
    </div>
  )
}

export default Header
