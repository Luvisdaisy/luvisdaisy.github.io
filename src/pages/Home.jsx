import React, { useEffect } from 'react'
import { motion } from 'framer-motion' // 添加导入
import Layout from '../components/Layout'
import TechStack from '../components/TechStack'
import BubbleText from '../components/BubbleText'
import ButtonWrapper from '../components/ButtonWrapper'
import Typewrite from '../components/Typewrite'
import CubeButton from '../components/CubeButton'

function Home() {
  useEffect(() => {
    document.title = 'haotiantzz - 首页'
  }, [])

  const examples = [
    '您好，我是田昊天。',
    '欢迎来到我的个人网站！',
    '这里记录了我的学习和项目经历。',
    '希望你能喜欢这里的内容！',
  ]

  return (
    <Layout>
      <div
        className='hero h-full'
        style={{
          backgroundImage: 'url(./img/hero.jpeg)',
        }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='flex max-w-2xl flex-col items-center justify-center gap-6'>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <div className='avatar'>
                <div className='w-48 rounded-full'>
                  <img src='/img/avatar.jpeg' />
                </div>
              </div>
            </motion.div>
            <Typewrite examples={examples} />
            <hr className='border-base-300 w-full' />
            <BubbleText text='我正在学习全栈开发，寻找实习与工作机会。' />
            <BubbleText text='若您对我感兴趣请与我联系！' />
            <CubeButton text='联系我' to='/contact' />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
