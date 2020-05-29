import React from 'react'
import moment from 'moment'

import { Button } from 'components'

import { EditableCell } from './__components'

export const TableRowUpdateTemplate = (props) => {
  const {
    data,
    handleCancel,
    handleUpdate,
    handleChange
  } = props

  return (
    <tr>
      <td>{moment.parseZone(data.date).format('YYYY/MM/DD ha')}</td>
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
