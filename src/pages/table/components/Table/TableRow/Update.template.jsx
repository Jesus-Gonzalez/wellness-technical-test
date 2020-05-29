import React from 'react'

import { Button } from 'components'

import { EditableCell } from './__components'

export const UpdateTemplate = (props) => {
  const {
    data,
    handleCancel,
    handleUpdate,
    handleChange
  } = props

  return (
    <tr>
      <td>{data.date}</td>
      <EditableCell
        onChange={handleChange('consumption')}
        value={data.consumption}
      />
      <EditableCell
        onChange={handleChange('cost')}
        value={data.cost}
      />
      <EditableCell
        onChange={handleChange('price')}
        value={data.price}
      />

      <td>
        <Button
          type="invisible"
          onClick={handleUpdate}
        >
          Update
        </Button>

        <Button
          type="invisible"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </td>
    </tr>
  )
}
