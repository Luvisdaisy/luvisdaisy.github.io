import React from 'react'
import Lottie from 'lottie-react' // 使用默认导入
import constructionAnimation from '../assets/loader_cat.json'

function WaitingforConstruction() {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-4 p-4'>
      <Lottie animationData={constructionAnimation} loop autoplay className='max-w-md' />
      <h1 className='text-2xl font-bold text-base-content md:text-4xl'>页面建设中，敬请期待！</h1>
    </div>
  )
}

export default WaitingforConstruction
