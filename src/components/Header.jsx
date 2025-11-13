import React from 'react'
import { AiOutlineAlignRight } from 'react-icons/ai'
function Header() {
  return (
    <div className='navbar bg-base-100 shadow-sm'>
      <div className='navbar-start'>
        <a className='btn btn-ghost text-xl'>昊天的小站</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a>教育经历</a>
          </li>
          <li>
            <a>项目经历</a>
          </li>
          <li>
            <details>
              <summary>关于我</summary>
              <ul className='p-2'>
                <li>
                  <a>徒步</a>
                </li>
                <li>
                  <a>CS2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>联系</a>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <div className='dropdown dropdown-end dropdown-bottom'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <AiOutlineAlignRight className='h-7 w-7' />
          </div>
          <ul
            tabIndex='-1'
            className='dropdown-content menu bg-base-100 rounded-box z-1 w-52 mt-3 p-2 shadow-sm'
          >
            <li>
              <a>教育经历</a>
            </li>
            <li>
              <a>项目经历</a>
            </li>
            <li>
              <a>关于我</a>
              <ul className='p-2'>
                <li>
                  <a>徒步</a>
                </li>
                <li>
                  <a>CS2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>联系</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Header
