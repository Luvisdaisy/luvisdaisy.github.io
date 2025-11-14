import React, { useState, useEffect } from 'react'
import { AiOutlineAlignRight } from 'react-icons/ai'
function Header() {
  const themes = ['light', 'dark', 'garden', 'sunset']
  const [currentTheme, setCurrentTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [currentTheme])

  const handleThemeChange = (event) => {
    setCurrentTheme(event.target.value)
  }

  return (
    <div className='navbar bg-base-100 shadow-sm'>
      <div className='navbar-start'>
        <a className='btn btn-ghost text-xl' href='/'>
          昊天的小站
        </a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a href='/education'>教育经历</a>
          </li>
          <li>
            <a href='/projects'>项目经历</a>
          </li>
          <li>
            <a href='/about'>关于我</a>
          </li>
          <li>
            <a href='/contact'>联系</a>
          </li>
        </ul>
      </div>
      {/* theme and language */}
      <div className='navbar-end'>
        <select
          id='theme-selector'
          value={currentTheme}
          onChange={handleThemeChange}
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
              <a href='/education'>教育经历</a>
            </li>
            <li>
              <a href='/projects'>项目经历</a>
            </li>
            <li>
              <a href='/about'>关于我</a>
            </li>
            <li>
              <a href='/contact'>联系</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Header
