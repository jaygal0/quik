import React from 'react'
import styles from './Hero.module.scss'
import TypingEffect from './TypingEffect'

const Hero = () => {
  return (
    <section className={styles.container}>
      <h1>
        helping struggling
        <TypingEffect />
        build
        <span className={styles.highlight}> beautiful, fast </span>
        websites that
        <span className={styles.highlight}> convert</span> customers.
      </h1>
    </section>
  )
}

export default Hero
