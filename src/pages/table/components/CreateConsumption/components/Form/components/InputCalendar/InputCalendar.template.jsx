import React from 'react'
import DatePicker from 'react-datepicker'

import styles from './styles.module.scss'

export const InputCalendarTemplate = props => {
  const {
    wrapperClass,
    hasError,
    error,
    input
  } = props

  return (
    <div className="mb-3">
      <div className={wrapperClass}>
        <input
          type="hidden"
          {...input}
        />

        <DatePicker
          {...input}
          selected={input.value}
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mm aa"
          className={`form-control ${styles.input}`}
        />

        <div className="input-group-append">
          <span className="input-group-text">Date</span>
        </div>
      </div>
      <div className={styles.errorText}>
        {hasError && error}
      </div>
    </div>
  )
}
