import React, { useState } from 'react'
import styles from './Clients.module.scss'

const Clients = () => {
  const [isImage, setImage] = useState(true)
  const [isClient1, setClient1] = useState(false)
  const [isClient2, setClient2] = useState(false)
  const [isClient3, setClient3] = useState(false)

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          {isImage && <div className={styles.image}></div>}
          {isClient1 && <div className={styles.client1}></div>}
          {isClient2 && <div className={styles.client2}></div>}
          {isClient3 && <div className={styles.client3}></div>}
        </div>
        <div className={styles.textWrapper}>
          <h3 className={styles.heading}>past clients</h3>
          <ol className={styles.orderList}>
            <li
              className={styles.list}
              onMouseEnter={() => {
                setImage(false)
                setClient1(true)
              }}
              onMouseLeave={() => {
                setImage(true)
                setClient1(false)
              }}
            >
              balance by bianca
            </li>
            <li
              className={styles.list}
              onMouseEnter={() => {
                setImage(false)
                setClient2(true)
              }}
              onMouseLeave={() => {
                setImage(true)
                setClient2(false)
              }}
            >
              crouchinbunny
            </li>
            <li
              className={styles.list}
              onMouseEnter={() => {
                setImage(false)
                setClient3(true)
              }}
              onMouseLeave={() => {
                setImage(true)
                setClient3(false)
              }}
            >
              laser treatment
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Clients
