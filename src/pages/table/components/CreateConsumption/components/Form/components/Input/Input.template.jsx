import React from 'react'

import styles from './styles.module.scss'

export const InputTemplate = props => {
  const {
    wrapperClass,
    input,
    hasError,
    error,
    label
  } = props

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
        {hasError && error}
      </div>
    </div>
  )
}
