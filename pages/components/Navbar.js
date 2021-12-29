import React from 'react'
import Image from 'next/image'
import styles from './Navbar.module.scss'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <Image src="/logo.svg" width={75} height={40} alt="logo" />
        <Link to="prices" smooth={true} duration={1000} offset={80}>
          <button className="primary">let&apos;s work together</button>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
