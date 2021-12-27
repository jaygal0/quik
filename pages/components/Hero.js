import React from 'react'
import styles from './Hero.module.css'
import TypingEffect from './TypingEffect'

const Hero = () => {
  return (
    <section className={styles.container}>
      <h1>
        helping struggling
        <TypingEffect />
        build
        <span className="italic"> beautiful, fast </span>
        websites that
        <span className="italic"> convert</span> customers.
      </h1>
    </section>
  )
}

export default Hero
