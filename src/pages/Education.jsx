import React from 'react'
import Layout from '../components/Layout'

function Education() {
  return (
    <Layout>
      <div className='h-full flex flex-col'>
        <div className='flex-1 flex flex-col gap-6 overflow-hidden p-4'>
          <div className='card bg-base-100 image-full flex-1 shadow-lg overflow-hidden relative group rounded-lg'>
            <figure>
              <img
                src='/img/henu.jpeg'
                alt='Henan University'
                className='object-cover w-full h-full'
              />
            </figure>
            <div className='card-body flex items-center justify-center'>
              <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-6xl md:text-8xl font-bold text-white'>河南大学</h1>
                <p className='text-lg md:text-xl mt-4 px-4'>软件工程学士</p>
              </div>
            </div>
            <div className='absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4'>
              <h2 className='text-2xl md:text-4xl font-bold'>2020 - 2024</h2>
              <p className='text-sm md:text-lg mt-4 text-center'>
                课程内容：数据算法结构，操作系统，计算机网络，数据库系统，软件工程等。
                <br />
                竞赛成果：大学生创新创业大赛国家级二等奖，互联网+项目校级三等奖等。
              </p>
            </div>
          </div>

          <div className='card bg-base-100 image-full flex-1 shadow-lg overflow-hidden relative group rounded-lg'>
            <figure>
              <img
                src='/img/monash.jpeg'
                alt='Monash University'
                className='object-cover w-full h-full'
              />
            </figure>
            <div className='card-body flex items-center justify-center'>
              <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-6xl md:text-8xl font-bold text-white'>莫那什大学</h1>
                <p className='text-lg md:text-xl mt-4 px-4'>信息技术硕士</p>
              </div>
            </div>
            <div className='absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4'>
              <h2 className='text-2xl md:text-4xl font-bold'>2024 - 2026</h2>
              <p className='text-sm md:text-lg mt-4 text-center'>
                课程内容：项目管理，网络应用开发，云计算，UIUX等。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Education
