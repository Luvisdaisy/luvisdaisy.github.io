import React from 'react'

const BubbleText = ({ text = 'Bubbbbbbbble text' }) => {
  return (
    <h2 className='text-center text-2xl font-thin text-indigo-300'>
      {text.split('').map((child, idx) => (
        <span
          className='transition duration-300 hover:font-extrabold hover:text-indigo-50 group-hover:text-indigo-200'
          key={idx}
        >
          {child}
        </span>
      ))}
    </h2>
  )
}

export default BubbleText
