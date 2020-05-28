import React from 'react'

import { Button } from 'components'

export const TableRowData = (props) => {
  const {
    data,
    handleEdit
  } = props

  return (
    <tr>
      <td>{data.date}</td>
      <td>{data.consumption}</td>
      <td>{data.cost}</td>
      <td>{data.price}</td>
      <td>
        <Button
          type="invisible"
          onClick={handleEdit}
        >
          <img alt="update" src="/images/pencil.png" />
        </Button>

        <Button type="invisible">
          <img alt="delete" src="/images/trash.png" />
        </Button>
      </td>
    </tr>
  )
}
