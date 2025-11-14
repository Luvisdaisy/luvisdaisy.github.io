import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const CubeButton = ({ text = 'Button', to = '/' }) => {
  const navigate = useNavigate()

  return (
    <motion.div
      className='relative w-[150px] h-[50px] cursor-pointer'
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
      initial={{ rotateX: 0 }}
      whileHover={{ rotateX: 360 }}
      transition={{ duration: 4 }}
      onClick={() => navigate(to)}
    >
      <motion.span
        className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-black font-sans uppercase text-[22px] tracking-[2px] border-2 border-black box-border'
        style={{
          transform: 'rotateX(360deg) translateZ(25px)',
          boxShadow: 'inset 0 20px 50px rgba(0, 0, 0, 0.2)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        }}
        whileHover={{ color: '#fff', backgroundColor: 'rgba(3, 169, 244, 0.8)' }}
        transition={{ duration: 0.5 }}
      >
        {text}
      </motion.span>
      <motion.span
        className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-black font-sans uppercase text-[22px] tracking-[2px] border-2 border-black box-border'
        style={{
          transform: 'rotateX(270deg) translateZ(25px)',
          boxShadow: 'inset 0 20px 50px rgba(0, 0, 0, 0.2)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        }}
        whileHover={{ color: '#fff', backgroundColor: 'rgba(3, 169, 244, 0.8)' }}
        transition={{ duration: 0.5 }}
      >
        {text}
      </motion.span>
      <motion.span
        className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-black font-sans uppercase text-[22px] tracking-[2px] border-2 border-black box-border'
        style={{
          transform: 'rotateX(180deg) translateZ(25px)',
          boxShadow: 'inset 0 20px 50px rgba(0, 0, 0, 0.2)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        }}
        whileHover={{ color: '#fff', backgroundColor: 'rgba(3, 169, 244, 0.8)' }}
        transition={{ duration: 0.5 }}
      >
        {text}
      </motion.span>
      <motion.span
        className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-black font-sans uppercase text-[22px] tracking-[2px] border-2 border-black box-border'
        style={{
          transform: 'rotateX(90deg) translateZ(25px)',
          boxShadow: 'inset 0 20px 50px rgba(0, 0, 0, 0.2)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        }}
        whileHover={{ color: '#fff', backgroundColor: 'rgba(3, 169, 244, 0.8)' }}
        transition={{ duration: 0.5 }}
      >
        {text}
      </motion.span>
    </motion.div>
  )
}

export default CubeButton
