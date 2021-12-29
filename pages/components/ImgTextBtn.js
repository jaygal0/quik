import React from 'react'
import Image from 'next/image'
import styles from './ImgTextBtn.module.scss'
import { Link } from 'react-scroll'

const ImgTextBtn = ({ src, heading, text, button, path, buttonAlt }) => {
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
      <div className={styles.textWrapper}>
        <h2>{heading}</h2>
        <p>{text}</p>
        {button ? (
          <Link to={path} smooth={75} duration={1000} offset={80}>
            <button className="primary">{button}</button>
          </Link>
        ) : (
          <button className="secondary">{buttonAlt}</button>
        )}
      </div>
    </section>
  )
}

export default ImgTextBtn
