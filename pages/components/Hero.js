import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <h1>
      helping struggling <span className="focus">freelancers</span>
      <br /> build
      <span className="italic"> beautiful, fast</span> websites that{' '}
      <span className="italic">convert</span> customers.
    </h1>
  )
}

export default Hero
