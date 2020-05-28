import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import styles from './Header.module.scss'

export const Header = () => {
  const location = useLocation()

  const [shouldShow, setShouldShow] = React.useState(false)
  const toggleShow = () => setShouldShow(!shouldShow)

  const getNavItemClass = (path) => [
    'nav-item',
    path === location.pathname && 'active'
  ].filter(k => k).join(' ')

  const collapseClass = React.useMemo(
    () => [
      'collapse navbar-collapse',
      shouldShow && 'show'
    ].filter(k => k).join(' '),
    [shouldShow]
  )

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
            className={getNavItemClass('/table')}
          >
            <Link
              className="nav-link"
              to="/table"
            >
              DataTable
            </Link>
          </li>

          <li
            className={getNavItemClass('/chart')}
          >
            <Link
              className="nav-link"
              to="/chart"
            >
              Chart
            </Link>
          </li>

          <li
            className={getNavItemClass('/import')}
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
