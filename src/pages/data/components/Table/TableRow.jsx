import React from 'react'

import {
  TableRowData,
  TableRowUpdate
} from './__components'

export const TableRow = (props) => {
  const {
    item,
    updateItem
  } = props

  const [data, setData] = React.useState(null)

  const handleEdit = () => setData(Object.assign({}, item))
  const handleCancel = () => setData(null)
  const handleChange = key => event => setData(
    Object.assign({}, data, { [key]: event.target.value })
  )
  const handleUpdate = () => {
    updateItem(data, item)
    setData(null)
  }

  if (data === null) {
    return (
      <TableRowData
        data={item}
        handleEdit={handleEdit}
      />
    )
  }

  return (
    <TableRowUpdate
      data={data}
      handleUpdate={handleUpdate}
      handleCancel={handleCancel}
      handleChange={handleChange}
    />
  )
}
