import React from 'react'
import PropTypes from 'prop-types'

import { Header, Footer } from './components'

import styles from './styles.module.scss'

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.element
  ]).isRequired
}

export const Layout = ({ children }) => (
  <div className={styles.wrapper}>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
)

Layout.propTypes = propTypes
