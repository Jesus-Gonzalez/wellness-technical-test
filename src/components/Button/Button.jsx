import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  submit: PropTypes.bool,
}

export const Button = props => {
  const {
    children,
    className,
    submit,
    style
  } = props

  const type = React.useMemo(() => submit ? 'submit' : 'button', [submit])
  const klass = React.useMemo(
    () => [className, 'btn', style && `btn-${style}`, !style && 'btn-primary']
      .filter(k => k).join(' '),
    [className]
  )

  return (
    <button
      className={klass}
      type={type}
    >
      {children}
    </button>
  )
}

Button.propTypes = propTypes
