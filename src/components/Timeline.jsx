import React from 'react'
import { motion } from 'framer-motion'

const TimelineItem = ({ year, title, isActive, isFirst, isLast, onClick }) => {
  return (
    <div className='relative flex-1 flex items-center cursor-pointer' onClick={onClick}>
      {/* 垂直连接线容器 */}
      <div className='absolute left-[143px] top-0 bottom-0 w-0.5 flex flex-col'>
        {!isFirst && (
          <div
            className={`flex-1 ${isActive || isFirst ? 'bg-primary' : 'bg-base-300'} transition-colors duration-300`}
          />
        )}
        {!isLast && (
          <div
            className={`flex-1 ${isActive ? 'bg-primary' : 'bg-base-300'} transition-colors duration-300`}
          />
        )}
      </div>

      {/* 内容区域 */}
      <div className='relative z-10 flex items-center gap-6 w-full py-4'>
        {/* 年份 - 左侧 */}
        <div className='w-28 text-right'>
          <motion.div
            className={`
              inline-block px-4 py-2 rounded-xl shadow-lg transition-all duration-300 hover:scale-105
              ${
                isActive
                  ? 'bg-primary text-primary-content font-bold text-lg'
                  : 'bg-base-200 text-base-content/70 font-semibold text-base hover:bg-base-300'
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
              backgroundColor: isActive ? '#570df8' : '#6b7280',
            }}
            transition={{ duration: 0.3 }}
            className='w-4 h-4 rounded-full shadow-xl border-4 border-base-100'
          />
        </div>

        {/* 项目名 - 右侧 */}
        <div className='flex-1'>
          <motion.div
            className={`
              px-5 py-3 rounded-xl shadow-lg transition-all duration-300 max-w-xs hover:scale-105
              ${
                isActive
                  ? 'bg-primary/10 text-primary font-bold text-lg border-2 border-primary'
                  : 'bg-base-200 text-base-content/60 font-medium text-base border border-base-300 hover:bg-base-300'
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
      className='w-2/5 h-full flex items-stretch py-8'
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className='w-full h-full flex flex-col justify-between'>
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
