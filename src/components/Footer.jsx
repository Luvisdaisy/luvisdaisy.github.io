import React from 'react'
import { AiOutlineWechat, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'

function Footer() {
  return (
    <footer className='bg-neutral text-neutral-content p-4'>
      <div className='container mx-auto flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between'>
        {/* 左侧版权信息 */}
        <aside className='text-sm text-center md:text-left'>
          Copyright © {new Date().getFullYear()} Haotian - All rights reserved
        </aside>

        {/* 右侧图标组 */}
        <nav className='flex gap-6'>
          <a
            href='mailto:haotiantzz@163.com'
            className='transition-opacity hover:opacity-70'
            aria-label='Email'
          >
            <AiOutlineMail size={24} />
          </a>

          <a
            href='https://github.com/luvisdaisy'
            target='_blank'
            rel='noopener noreferrer'
            className='transition-opacity hover:opacity-70'
            aria-label='GitHub'
          >
            <AiOutlineGithub size={24} />
          </a>

          <button type='button' className='transition-opacity hover:opacity-70' aria-label='WeChat'>
            <AiOutlineWechat size={24} />
          </button>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
