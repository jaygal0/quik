import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>&copy; quik, 2021</div>
      <a href="mailto:hi@joshuagalinato.com">Contact</a>
    </footer>
  )
}

export default Footer
