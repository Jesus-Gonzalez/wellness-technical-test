import React from 'react'

import styles from './Header.module.scss'

export const Header = () => (
  <nav class={`${styles.wrapper} navbar`}>
    <span class="navbar-brand">
      <img
        className={styles.logo}
        src="/logo.jpg"
      />
      <span>Illum</span>
    </span>
  </nav>
)
