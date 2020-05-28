import React from 'react'

import styles from './Input.module.scss'

export const Input = props => {
  const { input, meta, label } = props

  const { dirty, touched, error, submitFailed, valid } = meta
  const hasError = React.useMemo(() => (
    ((dirty && touched) || submitFailed) && !valid && error
  ), [dirty, touched, submitFailed, valid, error])

  const wrapperClass = React.useMemo(() => [
    'input-group mb-1',
    hasError && 'has-error'
  ].filter(k => k).join(' '), [hasError])

  return (
    <div className="mb-3">
      <div className={wrapperClass}>
        <input
          className={`form-control ${styles.input}`}
          type="text"
          {...input}
        />
        <div className="input-group-append">
          <span className="input-group-text">{label}</span>
        </div>
      </div>
      <div className={styles.errorText}>
        {hasError && meta.error}
      </div>
    </div>
  )
}
