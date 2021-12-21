import React from 'react'
import styles from './ImgTextBtn.module.css'

const ImgTextBtn = ({ heading, text, button, buttonAlt }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}></div>
      <div className={styles.text}>
        <h2>{heading}</h2>
        <p>{text}</p>
        {button ? (
          <button className="primary">{button}</button>
        ) : (
          <button className="secondary">{buttonAlt}</button>
        )}
      </div>
    </div>
  )
}

export default ImgTextBtn
