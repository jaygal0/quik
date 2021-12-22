import React from 'react'
import styles from './Clients.module.css'

const Clients = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>past clients</h3>
      <div>
        <ol>
          <li className={styles.list}>client 1</li>
          <li className={styles.list}>client 2</li>
          <li className={styles.list}>client 3</li>
        </ol>
      </div>
    </div>
  )
}

export default Clients
