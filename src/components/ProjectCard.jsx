import React from 'react'
import { motion } from 'framer-motion'

const ProjectCard = ({ title, description, isActive, year, stack = [] }) => {
  return (
    <motion.div
      className={`
        card w-full max-w-2xl bg-base-100 shadow-2xl transition-all duration-300
        ${isActive ? 'border-2 border-primary' : 'border border-base-300'}
      `}
      whileHover={isActive ? { scale: 1.02 } : {}}
    >
      <div className='card-body p-4 md:p-8'>
        <div className='mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3'>
          {/* <div className='badge badge-primary badge-lg'>{year}</div> */}
          <h2 className='card-title text-2xl font-bold md:text-3xl'>{title}</h2>
        </div>
        <p className='text-base leading-relaxed text-base-content/80 md:text-lg'>{description}</p>
        <div className='card-actions mt-6 items-center justify-between'>
          <div className='flex flex-wrap gap-2'>
            {stack.map((tech, index) => (
              <div key={index} className='badge badge-outline'>
                {tech}
              </div>
            ))}
          </div>
        </div>
        <button className='btn btn-primary btn-disabled mt-5'>查看详情</button>
      </div>
    </motion.div>
  )
}

export default ProjectCard
