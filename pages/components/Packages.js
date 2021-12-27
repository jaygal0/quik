import React from 'react'
import Package from './Package'
import Image from 'next/image'
import styles from './Packages.module.scss'

const Packages = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/website.svg"
          layout="fill"
          objectFit="cover"
          placeholder="empty"
          sizes="100vw"
          alt="illustration"
        />
      </div>
      <h2 className={styles.heading}>let&#39;s work together</h2>
      <p className={styles.text}>
        With every package you will be involved every step of the way!
      </p>
      <div className={styles.packageWrapper}>
        <Package
          heading="freelancer"
          text="Ideal for someone starting to share what you're about and what you sell."
          price={799}
          b1="Bespoke beautful designs"
          b2="Copy that converts"
          b3="Lightning fast load times"
          b4="4 static pages (e.g. home, about, contact, services)"
        />
        <Package
          heading="entrepreneur"
          text="Idea for writing new content to help bring in more traffic."
          price={999}
          b1="Everything in 'Freelance'"
          b2="A space write articles"
          b3="Website analytics to track and help improve conversion rates"
          popular
        />
        <Package
          heading="small business"
          text="Ideal for small businesses that wants to improve their converstion rates."
          price={1979}
          b1="Everything in 'Entrepreneur'"
          b2="Brand design (logos, design systems, graphic profile)"
          b3="Fully functional CMS"
        />
      </div>
    </section>
  )
}

export default Packages
