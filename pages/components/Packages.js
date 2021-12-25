import React from 'react'
import Package from './Package'
import Image from 'next/image'
import styles from './Packages.module.css'

const Packages = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/website.svg"
          layout="fill"
          objectFit="cover"
          placeholder="empty"
          sizes="100vw"
        />
      </div>
      <div className={styles.wrapper}></div>
      <h2>let&#39;s work together</h2>
      <div className={styles.packageWrapper}>
        <Package
          heading="freelancer"
          text="who is this intended for?"
          price={799}
          b1="Bespoke beautful designs"
          b2="Copy that converts"
          b3="Lightning fast load times"
          b4="4 static pages (e.g. home, about, contact, services)"
        />
        <Package
          heading="entrepreneur"
          text="who is this intended for?"
          price={999}
          b1="Everything in 'Freelance'"
          b2="A space write articles"
          b3="Website analytics to track and help improve conversion rates"
          popular
        />
        <Package
          heading="small business"
          text="who is this intended for?"
          price={1979}
          b1="Everything in 'Entrepreneur'"
          b2="Brand design (logos, design systems, graphic profile)"
          b3="Fully functional CMS"
        />
      </div>
    </div>
  )
}

export default Packages
