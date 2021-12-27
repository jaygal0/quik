import React from 'react'
import styles from './Package.module.scss'

const Package = ({ heading, text, price, b1, b2, b3, b4, popular }) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>{heading}</div>
      <p className={styles.text}>{text}</p>
      <div className={styles.price}>
        <span className={styles.currency}>€</span>
        {price}
      </div>
      <button className={styles.button}>select package</button>
      <ul className={styles.listWrapper}>
        {b1 && <li className={styles.list}>{b1}</li>}
        {b2 && <li className={styles.list}>{b2}</li>}
        {b3 && <li className={styles.list}>{b3}</li>}
        {b4 && <li className={styles.list}>{b4}</li>}
      </ul>
      {popular && <div className={styles.popular}>most popular</div>}
    </div>
  )
}

export default Package
