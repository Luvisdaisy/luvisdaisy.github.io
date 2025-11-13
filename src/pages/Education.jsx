import React from 'react'
import Layout from '../components/Layout'

function Education() {
  return (
    <Layout>
      <div className='h-full flex flex-col'>
        <div className='flex-1 flex flex-col gap-4 overflow-hidden'>
          {/* 河南大学卡片 */}
          <div className='card bg-base-100 image-full flex-1 shadow-sm overflow-hidden relative group'>
            <figure>
              <img
                src='/img/henu.jpeg'
                alt='Henan University'
                className='object-cover w-full h-full'
              />
            </figure>
            <div className='card-body'>
              <div className='flex items-center justify-center h-full'>
                <h1 className='text-8xl font-bold text-white'>河南大学</h1>
              </div>
            </div>
            {/* 悬浮显示的具体信息 */}
            <div className='absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <h2 className='text-4xl font-bold'>河南大学</h2>
              <p className='mt-4 text-center px-4'>
                河南大学，简称河大，位于中国河南省开封市，是一所历史悠久的综合性大学。
              </p>
            </div>
          </div>

          {/* 莫那什大学卡片 */}
          <div className='card bg-base-100 image-full flex-1 shadow-sm overflow-hidden relative group'>
            <figure>
              <img
                src='/img/monash.jpeg'
                alt='Monash University'
                className='object-cover w-full h-full'
              />
            </figure>
            <div className='card-body'>
              <div className='flex items-center justify-center h-full'>
                <h1 className='text-8xl font-bold text-white'>莫那什大学</h1>
              </div>
            </div>
            {/* 悬浮显示的具体信息 */}
            <div className='absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <h2 className='text-4xl font-bold'>莫那什大学</h2>
              <p className='mt-4 text-center px-4'>
                莫那什大学，位于澳大利亚，是世界著名的研究型大学，以卓越的教育和研究闻名。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Education
