import React from 'react'
import styles from './Clients.module.css'

const Clients = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.heading}>past clients</h3>
        <div>
          <ol className={styles.orderList}>
            <li className={styles.list}>client 1</li>
            <li className={styles.list}>client 2</li>
            <li className={styles.list}>client 3</li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Clients
