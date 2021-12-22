import React from 'react'
import Package from './Package'
import styles from './Packages.module.css'

const Packages = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}></div>
      <div className={styles.wrapper}></div>
      <h2>let&#39;s build a site together</h2>
      <div className={styles.packageWrapper}>
        <Package
          heading="freelancer"
          text="who is this intended for?"
          price={90}
          b1="benefit 1"
          b2="benefit 2"
          b3="benefit 3"
          b4="benefit 4"
        />
        <Package
          heading="entrepreneur"
          text="who is this intended for?"
          price={90}
          b1="benefit 1"
          b2="benefit 2"
          b3="benefit 3"
          b4="benefit 4"
          popular
        />
        <Package
          heading="small business"
          text="who is this intended for?"
          price={90}
          b1="benefit 1"
          b2="benefit 2"
          b3="benefit 3"
          b4="benefit 4"
        />
      </div>
    </div>
  )
}

export default Packages
