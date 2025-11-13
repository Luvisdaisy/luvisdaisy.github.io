import React from 'react'
import Layout from '../components/Layout'
import TechStack from '../components/TechStack'

function Home() {
  return (
    <Layout>
      <div
        className='hero h-full'
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
    </Layout>
  )
}

export default Home
