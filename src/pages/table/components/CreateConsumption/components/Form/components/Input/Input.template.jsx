import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

const propTypes = {
  wrapperClass: PropTypes.string,
  input: PropTypes.object.isRequired,
  hasError: PropTypes.bool.isRequired,
  error: PropTypes.string,
  label: PropTypes.string.isRequired
}

export const InputTemplate = props => {
  const {
    wrapperClass,
    input,
    hasError,
    error,
    label
  } = props

  return (
    <div className='mb-3'>
      <div className={wrapperClass}>
        <input
          className={`form-control ${styles.input}`}
          type='text'
          {...input}
        />
        <div className='input-group-append'>
          <span className='input-group-text'>{label}</span>
        </div>
      </div>
      <div className={styles.errorText}>
        {hasError && error}
      </div>
    </div>
  )
}

InputTemplate.propTypes = propTypes
