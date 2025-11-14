import React from 'react'
import Layout from '../components/Layout'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'

function EducationPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const ROTATION_RANGE = 15 // Reduced rotation range
  const HALF_ROTATION_RANGE = ROTATION_RANGE / 2

  const TiltCard = ({ children, imageSrc, altText }) => {
    const ref = React.useRef(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const xSpring = useSpring(x)
    const ySpring = useSpring(y)

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`

    const handleMouseMove = (e) => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()

      const width = rect.width
      const height = rect.height

      const mouseX = (e.clientX - rect.left) * ROTATION_RANGE
      const mouseY = (e.clientY - rect.top) * ROTATION_RANGE

      const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1
      const rY = mouseX / width - HALF_ROTATION_RANGE

      x.set(rX)
      y.set(rY)
    }

    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: 'preserve-3d',
          transform,
        }}
        className='relative card bg-base-100 image-full flex-1 shadow-2xl overflow-hidden group rounded-lg'
      >
        <figure className='w-full h-full'>
          <img src={imageSrc} alt={altText} className='aspect-auto object-cover w-full h-full' />
        </figure>
        {children}
      </motion.div>
    )
  }

  return (
    <Layout>
      <div className='h-full flex flex-col'>
        <div className='flex-1 flex flex-col gap-6 overflow-hidden p-4'>
          <TiltCard imageSrc='/img/henu.jpeg' altText='Henan University'>
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
          </TiltCard>

          <TiltCard imageSrc='/img/monash.jpeg' altText='Monash University'>
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
          </TiltCard>
        </div>
      </div>
    </Layout>
  )
}

export default EducationPage
