import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'

import styles from './styles.module.scss'

const propTypes = {
  wrapperClass: PropTypes.string,
  input: PropTypes.object.isRequired,
  hasError: PropTypes.bool.isRequired,
  error: PropTypes.string,
  label: PropTypes.string.isRequired
}

export const InputCalendarTemplate = props => {
  const {
    wrapperClass,
    hasError,
    error,
    input
  } = props

  return (
    <div className='mb-3'>
      <div className={wrapperClass}>
        <input
          type='hidden'
          {...input}
        />

        <DatePicker
          {...input}
          selected={input.value}
          showTimeSelect
          dateFormat='MMMM d, yyyy h:mm aa'
          className={`form-control ${styles.input}`}
        />

        <div className='input-group-append'>
          <span className='input-group-text'>Date</span>
        </div>
      </div>
      <div className={styles.errorText}>
        {hasError && error}
      </div>
    </div>
  )
}

InputCalendarTemplate.propTypes = propTypes
