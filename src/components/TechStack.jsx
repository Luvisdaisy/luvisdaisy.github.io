import { div } from 'motion/react-client'
import React from 'react'

function TechStack() {
  const techList = {
    Nodejs: './icons/nodejs.png',
    React: './icons/react.png',
    JavaScript: './icons/javascript.jpg',
  }
  return (
    <div>
      {Object.entries(techList).map(([tech, imgSrc]) => (
        <div key={tech} className='hover-3d'>
          <figure className='max-w-25 rounded-2xl'>
            <img src={imgSrc} alt={`${tech} logo`} />
          </figure>
          {/* 8 empty divs needed for the 3D effect */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ))}
    </div>
  )
}

export default TechStack
