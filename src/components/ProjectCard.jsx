import React from 'react'

const ProjectCard = ({ title, description, isActive }) => {
  return (
    <div
      className={`
      card bg-base-100 shadow-xl transition-all duration-300
      ${isActive ? 'border-2 border-primary' : 'border border-base-300'}
    `}
    >
      <div className='card-body'>
        <h2 className='card-title text-2xl'>{title}</h2>
        <p className='text-base-content/70'>{description}</p>
        <div className='card-actions justify-end mt-4'>
          <button className='btn btn-primary btn-sm'>查看详情</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
