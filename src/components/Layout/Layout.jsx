import React from 'react'

import { Header, Footer } from './__components'

import styles from './Layout.module.scss'

export const Layout = ({ children }) => (
  <div className={styles.wrapper}>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
)
