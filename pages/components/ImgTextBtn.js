import React from 'react'
import Image from 'next/image'
import styles from './ImgTextBtn.module.css'

const ImgTextBtn = ({ src, heading, text, button, buttonAlt }) => {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={`/${src}`}
          layout="fill"
          objectFit="cover"
          placeholder="empty"
          sizes="100vw"
          alt="illustration"
        />
      </div>
      <div className={styles.text}>
        <h2>{heading}</h2>
        <p>{text}</p>
        {button ? (
          <button className="primary">{button}</button>
        ) : (
          <button className="secondary">{buttonAlt}</button>
        )}
      </div>
    </section>
  )
}

export default ImgTextBtn
