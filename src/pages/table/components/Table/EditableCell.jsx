import React from 'react'

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
