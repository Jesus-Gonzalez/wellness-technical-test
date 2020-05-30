import React from 'react'
import { Link } from 'react-router-dom'

import { useHeader } from './useHeader.hook'

import styles from './styles.module.scss'

export const Header = (props) => {
  const {
    collapseClass,
    itemClass,
    toggleShow
  } = useHeader(props)

  return (
    <nav className={`${styles.wrapper} navbar navbar-expand-lg navbar-light`}>
      <span className="navbar-brand">
        <img
          alt="logo"
          className={styles.logo}
          src="/logo.jpg"
        />

        <Link className="navbar-brand" to="/">Illum</Link>
      </span>

      <button className="navbar-toggler" type="button" onClick={toggleShow}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={collapseClass} id="illum-header-navbar">
        <ul className="navbar-nav mr-auto">
          <li
            className={itemClass.table}
          >
            <Link
              className="nav-link"
              to="/table"
            >
              DataTable
            </Link>
          </li>

          <li
            className={itemClass.chart}
          >
            <Link
              className="nav-link"
              to="/chart"
            >
              Chart
            </Link>
          </li>

          <li
            className={itemClass.import}
          >
            <Link
              className="nav-link"
              to="/import"
            >
              Import
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
