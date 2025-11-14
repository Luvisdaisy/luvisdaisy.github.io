import React from 'react'
import { motion } from 'framer-motion'

const ProjectCard = ({ title, description, isActive, year, stack = [] }) => {
  return (
    <motion.div
      className={`
        card bg-base-100 shadow-2xl transition-all duration-300 w-full max-w-2xl
        ${isActive ? 'border-2 border-primary' : 'border border-base-300'}
      `}
      whileHover={isActive ? { scale: 1.02 } : {}}
    >
      <div className='card-body p-8'>
        <div className='flex items-center gap-3 mb-4'>
          <div className='badge badge-primary badge-lg'>{year}</div>
          <h2 className='card-title text-3xl font-bold'>{title}</h2>
        </div>
        <p className='text-base-content/80 text-lg leading-relaxed'>{description}</p>
        <div className='card-actions justify-between items-center mt-6'>
          <div className='flex gap-2 flex-wrap'>
            {stack.map((tech, index) => (
              <div key={index} className='badge badge-outline'>
                {tech}
              </div>
            ))}
          </div>
        </div>
        <button className='mt-5 btn btn-primary btn-disabled'>查看详情</button>
      </div>
    </motion.div>
  )
}

export default ProjectCard
