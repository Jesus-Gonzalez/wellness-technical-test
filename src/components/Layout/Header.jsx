import React from 'react'

import styles from './Header.module.scss'

export const Header = () => (
  <nav className={`${styles.wrapper} navbar`}>
    <span className="navbar-brand">
      <img
        className={styles.logo}
        src="/logo.jpg"
      />
      <span>Illum</span>
    </span>
  </nav>
)
