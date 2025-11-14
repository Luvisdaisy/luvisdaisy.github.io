import React, { useState, useRef, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import Layout from '../components/Layout'
import Timeline from '../components/Timeline'
import ProjectCard from '../components/ProjectCard'

function ProjectPage() {
  const projects = [
    {
      year: '2021年',
      title: '电商平台重构',
      description:
        '主导完成电商平台的前端架构重构,采用微前端方案,提升了系统的可维护性和开发效率。使用React + TypeScript技术栈,实现了组件库的统一管理。',
    },
    {
      year: '2022年',
      title: '数据可视化大屏',
      description:
        '开发企业级数据可视化大屏项目,整合多源数据,实现实时数据展示。使用ECharts和D3.js构建交互式图表,支持自定义配置和主题切换。',
    },
    {
      year: '2023年',
      title: 'AI助手集成',
      description:
        '将AI对话能力集成到现有产品中,设计并实现了智能客服系统。优化了对话流程,提升了用户满意度30%以上。',
    },
    {
      year: '2024年',
      title: '移动端应用开发',
      description:
        '使用React Native开发跨平台移动应用,实现了与Web端的数据同步。优化了性能,应用启动时间减少50%,获得AppStore 4.8分好评。',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const scrollContainerRef = useRef(null)

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
      <div className='max-w-7xl mx-auto h-full flex flex-col'>
        <div className='flex gap-8'>
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
              className='h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth'
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#570df8 transparent',
              }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className='h-full flex items-center justify-center snap-center p-4'
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0.4,
                    scale: activeIndex === index ? 1 : 0.85,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    isActive={activeIndex === index}
                  />
                </motion.div>
              ))}
            </div>

            {/* 滚动提示 */}
            {activeIndex < projects.length - 1 && (
              <motion.div
                className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <div className='text-center text-base-content/50'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 mx-auto'
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
                  <span className='text-xs'>滚动查看更多</span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* 底部导航点 */}
        <div className='flex justify-center gap-2 mt-8'>
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-primary w-8' : 'bg-base-300 hover:bg-base-content/30'
              }`}
              aria-label={`跳转到项目 ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ProjectPage
