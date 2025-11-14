import React from 'react'
import { motion } from 'framer-motion'

const TimelineItem = ({ year, title, isActive, isFirst, isLast, onClick }) => {
  return (
    <div className='relative flex flex-1 cursor-pointer items-center' onClick={onClick}>
      {/* 垂直连接线容器 */}
      <div className='absolute bottom-0 left-[143px] top-0 flex w-0.5 flex-col'>
        {!isFirst && (
          <div
            className={`flex-1 transition-colors duration-300 ${isActive || isFirst ? 'bg-primary' : 'bg-base-300'}`}
          />
        )}
        {!isLast && (
          <div
            className={`flex-1 transition-colors duration-300 ${isActive ? 'bg-primary' : 'bg-base-300'}`}
          />
        )}
      </div>

      {/* 内容区域 */}
      <div className='relative z-10 flex w-full items-center gap-6 py-4'>
        {/* 年份 - 左侧 */}
        <div className='w-28 text-right'>
          <motion.div
            className={`
              inline-block rounded-xl px-4 py-2 shadow-lg transition-all duration-300 hover:scale-105
              ${
                isActive
                  ? 'bg-primary text-lg font-bold text-primary-content'
                  : 'bg-base-200 text-base font-semibold text-base-content/70 hover:bg-base-300'
              }
            `}
            animate={{
              scale: isActive ? 1.1 : 1,
              x: isActive ? 5 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {year}
          </motion.div>
        </div>

        {/* 中间节点 */}
        <div className='flex-shrink-0 relative z-20'>
          <motion.div
            animate={{
              scale: isActive ? 2 : 1,
              backgroundColor: isActive ? 'hsl(222.2 84% 4.9%)' : 'hsl(220 13% 91%)',
            }}
            transition={{ duration: 0.3 }}
            className='w-4 h-4 rounded-full shadow-xl border-4 border-base-100'
          />
        </div>

        {/* 项目名 - 右侧 */}
        <div className='flex-1'>
          <motion.div
            className={`
              max-w-xs rounded-xl px-5 py-3 shadow-lg transition-all duration-300 hover:scale-105
              ${
                isActive
                  ? 'border-2 border-primary bg-primary/10 text-lg font-bold text-primary'
                  : 'border border-base-300 bg-base-200 text-base font-medium text-base-content/60 hover:bg-base-300'
              }
            `}
            animate={{
              scale: isActive ? 1.05 : 1,
              x: isActive ? -5 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const Timeline = ({ projects, activeIndex, onItemClick }) => {
  return (
    <motion.div
      className='flex h-full w-full items-stretch py-8'
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className='flex h-full w-full flex-col justify-between'>
        {projects.map((project, index) => (
          <TimelineItem
            key={index}
            year={project.year}
            title={project.title}
            isActive={activeIndex === index}
            isFirst={index === 0}
            isLast={index === projects.length - 1}
            onClick={() => onItemClick && onItemClick(index)}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Timeline
