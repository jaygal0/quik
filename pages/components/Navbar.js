import React from 'react'
import Image from 'next/image'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <Image src="/logo.svg" width={75} height={40} alt="logo" />
        <button className="primary">let&apos;s work together</button>
      </nav>
    </header>
  )
}

export default Navbar
