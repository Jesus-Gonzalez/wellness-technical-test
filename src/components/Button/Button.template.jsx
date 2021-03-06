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
    type,
    ...attributes
  } = props

  const buttonType = React.useMemo(() => submit ? 'submit' : 'button', [submit])
  const klass = React.useMemo(
    () => [className, 'btn', type && `btn-${type}`, !type && 'btn-primary']
      .filter(k => k).join(' '),
    [className, type]
  )

  return (
    <button
      {...attributes}
      className={klass}
      type={buttonType}
    >
      {children}
    </button>
  )
}

Button.propTypes = propTypes
