import React from 'react'
import Typewriter from 'typewriter-effect'

const TypingEffect = () => {
  return (
    <Typewriter
      options={{
        strings: ['Freelancers', 'Entrepreneurs', 'Small Businesses'],
        autoStart: true,
        loop: true,
        deleteSpeed: '20',
        changeDelay: '10',
      }}
    />
  )
}

export default TypingEffect
