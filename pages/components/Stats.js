import React from 'react'
import styles from './Stats.module.css'

const Stats = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}></div>
      <div className={styles.textWrapper}>
        <div className={styles.statsWrapper}>
          <div className={styles.stat}>88%</div>
          <div className={styles.text}>Lorem ipsum dolor sit amet.</div>
        </div>
        <div className={styles.statsWrapper}>
          <div className={styles.stat}>88%</div>
          <div className={styles.text}>Lorem ipsum dolor sit amet.</div>
        </div>
        <div className={styles.statsWrapper}>
          <div className={styles.stat}>88%</div>
          <div className={styles.text}>Lorem ipsum dolor sit amet.</div>
        </div>
      </div>
    </div>
  )
}

export default Stats
