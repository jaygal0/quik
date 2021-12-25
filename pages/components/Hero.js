import React from 'react'
import styles from './Hero.module.css'
import TypingEffect from './TypingEffect'

const Hero = () => {
  return (
    <section>
      <h1>
        helping struggling
        <br />
        <TypingEffect />
        build
        <span className="italic"> beautiful, fast</span>
        <br />
        websites that
        <br />
        <span className="italic">convert</span> customers.
      </h1>
    </section>
  )
}

export default Hero
