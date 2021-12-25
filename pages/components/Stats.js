import React from 'react'
import Image from 'next/image'
import styles from './Stats.module.css'

const Stats = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/sleeping.svg"
          layout="fill"
          objectFit="cover"
          placeholder="empty"
          sizes="100vw"
        />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.statsWrapper}>
          <div className={styles.stat}>94%</div>
          <div className={styles.text}>
            of first impressions are design-related.
          </div>
        </div>
        <div className={styles.statsWrapper}>
          <div className={styles.stat}>88%</div>
          <div className={styles.text}>
            of online consumers are less likely to return to a site after a bad
            experience.
          </div>
        </div>
        <div className={styles.statsWrapper}>
          <div className={styles.stat}>39%</div>
          <div className={styles.text}>
            of people will stop engaging with a website if images take too long
            to load.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
