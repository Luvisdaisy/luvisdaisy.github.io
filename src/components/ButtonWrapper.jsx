import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import React from 'react'

const SpotlightButton = ({ text = 'Hover me' }) => {
  const btnRef = useRef(null)
  const spanRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect()
      const offset = e.offsetX
      const left = `${(offset / width) * 100}%`

      if (spanRef.current) {
        spanRef.current.animate({ left }, { duration: 250, fill: 'forwards' })
      }
    }

    const handleMouseLeave = () => {
      if (spanRef.current) {
        spanRef.current.animate({ left: '50%' }, { duration: 100, fill: 'forwards' })
      }
    }

    if (btnRef.current) {
      btnRef.current.addEventListener('mousemove', handleMouseMove)
      btnRef.current.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (btnRef.current) {
        btnRef.current.removeEventListener('mousemove', handleMouseMove)
        btnRef.current.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className='relative w-full max-w-xs overflow-hidden rounded-lg bg-base-300 px-4 py-3 text-lg font-medium text-base-content transition-transform'
    >
      <span className='pointer-events-none relative z-10 mix-blend-difference'>{text}</span>
      <span
        ref={spanRef}
        className='pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-base-100'
      />
    </motion.button>
  )
}

export default SpotlightButton
