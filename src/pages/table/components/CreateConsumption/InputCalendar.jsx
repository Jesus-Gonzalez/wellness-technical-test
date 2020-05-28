import React from 'react'
import DatePicker from 'react-datepicker'

import styles from './Input.module.scss'

export const InputCalendar = props => {
  const { input, meta } = props

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
        {hasError && meta.error}
      </div>
    </div>
  )
}
