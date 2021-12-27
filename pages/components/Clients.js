import React from 'react'
import styles from './Clients.module.css'

const Clients = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.heading}>past clients</h3>
        <div>
          <ol className={styles.orderList}>
            <li className={styles.list}>crouchinbunny</li>
            <li className={styles.list}>balance by bianca</li>
            <li className={styles.list}>laser treatment</li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Clients
