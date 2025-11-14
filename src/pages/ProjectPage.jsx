import React, { useState, useRef, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import Layout from '../components/Layout'
import Timeline from '../components/Timeline'
import ProjectCard from '../components/ProjectCard'

function ProjectPage() {
  const [projects, setProjects] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollContainerRef = useRef(null)

  // 从Summary.json获取项目数据
  useEffect(() => {
    fetch('/projects/summary.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error loading projects:', error))
  }, [])

  // 使用 useScroll 监听滚动进度
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
  })

  // 监听滚动进度变化，更新活跃索引
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const newIndex = Math.round(latest * (projects.length - 1))
      setActiveIndex(newIndex)
    })

    return () => unsubscribe()
  }, [scrollYProgress, projects.length])

  // 滚动到指定项目
  const scrollToProject = (index) => {
    const container = scrollContainerRef.current
    if (!container) return

    const itemHeight = container.scrollHeight / projects.length
    container.scrollTo({
      top: itemHeight * index,
      behavior: 'smooth',
    })
  }

  return (
    <Layout>
      <div className='max-w-7xl mx-auto h-full'>
        <motion.div
          className='text-center mb-8'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className='mt-3 text-base-content/60 text-lg'>滚动查看我的项目历程</p>
        </motion.div>

        <div className='flex gap-8 h-[calc(100vh-240px)]'>
          {/* 左侧时间线 */}
          <Timeline projects={projects} activeIndex={activeIndex} onItemClick={scrollToProject} />

          {/* 右侧项目卡片滚动容器 */}
          <motion.div
            className='w-3/5 relative'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              ref={scrollContainerRef}
              className='h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth pr-4'
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#570df8 rgba(0,0,0,0.1)',
              }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className='h-full flex items-center justify-center snap-center px-4'
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0.3,
                    scale: activeIndex === index ? 1 : 0.85,
                    y: activeIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    year={project.year}
                    stack={project.stack}
                    isActive={activeIndex === index}
                  />
                </motion.div>
              ))}
            </div>

            {/* 滚动提示 */}
            {activeIndex < projects.length - 1 && (
              <motion.div
                className='absolute bottom-4 left-1/2 transform -translate-x-1/2 pointer-events-none'
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <div className='flex flex-col items-center gap-1 text-primary/60'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 9l-7 7-7-7'
                    />
                  </svg>
                  <span className='text-xs font-medium'>继续滚动</span>
                </div>
              </motion.div>
            )}

            {/* 进度指示器 */}
            {/* <div className='absolute top-1/2 right-0 transform -translate-y-1/2 flex flex-col gap-3'>
              {projects.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-1 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'h-12 bg-primary' : 'h-6 bg-base-300'
                  }`}
                  animate={{
                    height: activeIndex === index ? 48 : 24,
                  }}
                />
              ))}
            </div> */}
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectPage
