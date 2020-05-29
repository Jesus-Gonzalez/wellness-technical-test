import React from 'react'

export const useInputCalendar = configuration => {
  const { input, meta } = configuration

  const { dirty, touched, error, submitFailed, valid } = meta
  const hasError = React.useMemo(() => (
    ((dirty && touched) || submitFailed) && !valid && error
  ), [dirty, touched, submitFailed, valid, error])

  const wrapperClass = React.useMemo(() => [
    'input-group mb-1',
    hasError && 'has-error'
  ].filter(k => k).join(' '), [hasError])

  return {
    wrapperClass,
    hasError,
    error,
    input
  }
}
