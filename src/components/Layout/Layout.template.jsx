import React from 'react'

import { Header, Footer } from './components'

import styles from './styles.module.scss'

export const Layout = ({ children }) => (
  <div className={styles.wrapper}>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
)
