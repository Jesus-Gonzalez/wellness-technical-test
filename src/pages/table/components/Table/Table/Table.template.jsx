
import React from 'react'

import { TableRow } from 'pages/table/components/Table'

export const TableTemplate = (props) => {
  const { data } = props

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">date</th>
          <th scope="col">consumption (kWh)</th>
          <th scope="col">cost (€/kWh)</th>
          <th scope="col">price (€)</th>
          <th scope="col">actions</th>
        </tr>
      </thead>
      <tbody>
        {!data.items.length ? <tr /> : data.items.map(item => (
          <TableRow
            {...props}
            key={item.date}
            item={item}
          />
        ))}
      </tbody>
    </table>
  )

}
