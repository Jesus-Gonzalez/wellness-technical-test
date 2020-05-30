import React from 'react'
import { useLocation } from 'react-router-dom'

import { buildClass } from 'utils'

export const useHeader = () => {
  const location = useLocation()

  const [shouldShow, setShouldShow] = React.useState(false)
  const toggleShow = () => setShouldShow(!shouldShow)

  const itemClass = React.useMemo(() => (
    ['import', 'chart', 'table']
      .reduce((classes, path) => (
        Object.assign({}, classes, {
          [path]: buildClass([
            'nav-item',
            path === location.pathname && 'active'
          ])
        })
      ), {})
  ), [location.pathname])

  const collapseClass = React.useMemo(
    () => [
      'collapse navbar-collapse',
      shouldShow && 'show'
    ].filter(k => k).join(' '),
    [shouldShow]
  )

  return {
    toggleShow,
    itemClass,
    collapseClass
  }
}
