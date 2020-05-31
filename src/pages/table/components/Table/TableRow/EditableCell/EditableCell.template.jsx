import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
}

export const EditableCell = (props) => {
  const {
    onChange,
    value
  } = props

  return (
    <td>
      <input
        onChange={onChange}
        value={value}
      />
    </td>
  )
}

EditableCell.propTypes = propTypes
