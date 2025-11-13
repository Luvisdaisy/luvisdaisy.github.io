import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TechStack from '../components/TechStack'

function Home() {
  return (
    <div>
      <Header />
      <div
        className='hero min-h-screen'
        style={{
          backgroundImage: 'url(./img/hero.jpeg)',
        }}
      >
        <div className='hero-overlay'></div>
        <div className='hero-content text-neutral-content text-center'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold italic underline underline-offset-8'>
              你好，这里是田昊天
            </h1>
            <p className='mb-5'>
              欢迎来到我的个人网站！这里记录了我的学习和项目经历，以及一些兴趣爱好。
            </p>
          </div>
        </div>
      </div>
      <TechStack />
      <Footer />
    </div>
  )
}

export default Home
