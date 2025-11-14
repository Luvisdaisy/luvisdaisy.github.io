import React from 'react'

const BubbleText = ({ text = 'Bubbbbbbbble text' }) => {
  return (
    <h2 className='text-center text-2xl text-base-content'>
      {text.split('').map((child, idx) => (
        <span
          className='transition-all duration-300 hover:font-extrabold hover:text-base-100'
          key={idx}
        >
          {child}
        </span>
      ))}
    </h2>
  )
}

export default BubbleText
