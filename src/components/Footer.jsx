import React from 'react'
import { AiOutlineWechat } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
function Footer() {
  return (
    <footer className='footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4'>
      <aside className='grid-flow-col items-center'>
        {/* LOGO */}
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
        <a href='mailto:haotiantzz@163.com'>
          <AiOutlineMail size={24} />
        </a>
        <a href='https://github.com/luvisdaisy' target='_blank' rel='noopener noreferrer'>
          <AiOutlineGithub size={24} />
        </a>
        <a>
          <AiOutlineWechat size={24} />
        </a>
      </nav>
    </footer>
  )
}
export default Footer
