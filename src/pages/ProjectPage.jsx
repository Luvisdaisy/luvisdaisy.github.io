import React, { useState, useRef, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import Layout from '../components/Layout'
import Timeline from '../components/Timeline'
import ProjectCard from '../components/ProjectCard'
import { AiOutlineDown } from 'react-icons/ai'

function ProjectPage() {
  const [projects, setProjects] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    document.title = 'haotiantzz - 项目经历'
  }, [])

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
      <div className='mx-auto h-full max-w-7xl p-4 md:p-6'>
        <motion.div
          className='mb-8 text-center'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className='mt-3 text-lg text-base-content/60'>滚动查看我的项目历程</p>
        </motion.div>

        <div className='flex h-[calc(100vh-240px)] gap-8'>
          {/* 左侧时间线 - 在大屏幕显示 */}
          <div className='hidden lg:block'>
            <Timeline projects={projects} activeIndex={activeIndex} onItemClick={scrollToProject} />
          </div>

          {/* 右侧项目卡片滚动容器 */}
          <motion.div
            className='relative w-full lg:w-3/5'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              ref={scrollContainerRef}
              className='h-full snap-y snap-mandatory scroll-smooth overflow-y-auto pr-4'
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'hsl(var(--p)) hsl(var(--b1) / 0.1)',
              }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className='flex h-full snap-center items-center justify-center px-4'
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
                className='pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 transform'
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <div className='flex flex-col items-center gap-1 text-primary/60'>
                  <AiOutlineDown />
                  <span className='text-lg font-medium'>继续滚动</span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectPage
