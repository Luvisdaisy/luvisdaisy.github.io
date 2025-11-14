import React from 'react'
import Lottie from 'lottie-react' // 使用默认导入
import constructionAnimation from '../assets/loader_cat.json'

function WaitingforConstruction() {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <Lottie animationData={constructionAnimation} loop autoplay className='w-104' />
      <h1 className='text-4xl font-bold mt-4'>页面建设中，敬请期待！</h1>
    </div>
  )
}

export default WaitingforConstruction
