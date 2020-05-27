import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

export const Header = () => (
  <nav className={`${styles.wrapper} navbar`}>
    <span className="navbar-brand">
      <img
        className={styles.logo}
        src="/logo.jpg"
      />
      <Link to="/">Illum</Link>
    </span>
  </nav>
)
