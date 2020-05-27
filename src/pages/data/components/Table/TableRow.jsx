import React from 'react'

import { Button } from 'components'

export const TableRow = (props) => {
  const { item } = props

  return (
    <tr>
      <td>{item.date}</td>
      <td>{item.consumption}</td>
      <td>{item.cost}</td>
      <td>{item.price}</td>
      <td>
        <Button style="invisible">
          <img src="/images/pencil.png" />
        </Button>

        <Button style="invisible">
          <img src="/images/trash.png" />
        </Button>
      </td>
    </tr>
  )
}
