import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'

function EducationPage() {
  useEffect(() => {
    document.title = 'haotiantzz - 教育经历'
  }, [])

  const TiltCard = ({ children, imageSrc, altText, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: index * 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 },
        }}
        className='card group relative flex-1 overflow-hidden rounded-lg bg-base-100 shadow-2xl image-full'
      >
        <figure className='h-full w-full'>
          <img src={imageSrc} alt={altText} className='aspect-auto object-cover w-full h-full' />
        </figure>
        {children}
      </motion.div>
    )
  }

  return (
    <Layout>
      <div className='flex h-full flex-col'>
        <div className='flex flex-1 flex-col gap-6 overflow-hidden p-4 md:p-6 lg:p-8'>
          <TiltCard imageSrc='/img/henu.jpeg' altText='Henan University' index={0}>
            <div className='card-body flex items-center justify-center'>
              <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-6xl font-bold md:text-8xl'>河南大学</h1>
                <p className='mt-4 px-4 text-lg md:text-xl'>软件工程学士</p>
              </div>
            </div>
            <div className='absolute inset-0 flex flex-col items-center justify-center bg-base-100 bg-opacity-70 p-4 text-base-content opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              <h2 className='text-2xl font-bold md:text-4xl'>2020 - 2024</h2>
              <p className='mt-4 text-center text-sm md:text-lg'>
                课程内容：数据算法结构，操作系统，计算机网络，数据库系统，软件工程等。
                <br />
                竞赛成果：大学生创新创业大赛国家级二等奖，互联网+项目校级三等奖等。
              </p>
            </div>
          </TiltCard>

          <TiltCard imageSrc='/img/monash.jpeg' altText='Monash University' index={1}>
            <div className='card-body flex items-center justify-center'>
              <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-6xl font-bold md:text-8xl'>莫那什大学</h1>
                <p className='mt-4 px-4 text-lg md:text-xl'>信息技术硕士</p>
              </div>
            </div>
            <div className='absolute inset-0 flex flex-col items-center justify-center bg-base-100 bg-opacity-70 p-4 text-base-content opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              <h2 className='text-2xl font-bold md:text-4xl'>2024 - 2026</h2>
              <p className='mt-4 text-center text-sm md:text-lg'>
                课程内容：项目管理，网络应用开发，云计算，UIUX等。
              </p>
            </div>
          </TiltCard>
        </div>
      </div>
    </Layout>
  )
}

export default EducationPage
