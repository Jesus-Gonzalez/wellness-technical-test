import React from 'react'

import {
  TableRow,
  TableEmptyRow
} from './__components'

export const TableRaw = ({ data }) => (
  <table className="table table-bordered">
    <thead>
      <tr>
        <th scope="col">date</th>
        <th scope="col">consumption</th>
        <th scope="col">cost</th>
        <th scope="col">price</th>
        <th scope="col">actions</th>
      </tr>
    </thead>
    <tbody>
      {(!data.items || !data.items.length) && <TableEmptyRow />}
      {data.items.length && data.items.map(item => (
        <TableRow
          key={item.date}
          item={item}
        />
      ))}
    </tbody>
  </table>
)

export const Table = React.memo(TableRaw)
