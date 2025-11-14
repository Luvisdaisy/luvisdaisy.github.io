import React from 'react'
import { motion } from 'framer-motion'

const TimelineItem = ({ year, title, isActive, onClick }) => {
  return (
    <li className='relative'>
      <hr className={isActive ? 'bg-primary' : 'bg-base-300'} />
      <div
        className='timeline-start timeline-box cursor-pointer hover:bg-base-200 transition-colors'
        onClick={onClick}
      >
        <div className={`font-bold text-lg ${isActive ? 'text-primary' : ''}`}>{year}</div>
      </div>
      <div className='timeline-middle'>
        <motion.div
          animate={{
            scale: isActive ? 1.5 : 1,
            backgroundColor: isActive ? '#570df8' : '#a6adbb',
          }}
          transition={{ duration: 0.3 }}
          className='w-3 h-3 rounded-full cursor-pointer'
          onClick={onClick}
        />
      </div>
      <div
        className='timeline-end timeline-box cursor-pointer hover:bg-base-200 transition-colors'
        onClick={onClick}
      >
        <div className={`${isActive ? 'font-semibold text-primary' : 'text-base-content/70'}`}>
          {title}
        </div>
      </div>
      <hr className={isActive ? 'bg-primary' : 'bg-base-300'} />
    </li>
  )
}

const Timeline = ({ projects, activeIndex, onItemClick }) => {
  return (
    <motion.div
      className='w-2/5 flex items-center'
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <ul className='timeline timeline-vertical timeline-snap-icon w-full'>
        {projects.map((project, index) => (
          <TimelineItem
            key={index}
            year={project.year}
            title={project.title}
            isActive={activeIndex === index}
            onClick={() => onItemClick(index)}
          />
        ))}
      </ul>
    </motion.div>
  )
}

export default Timeline
