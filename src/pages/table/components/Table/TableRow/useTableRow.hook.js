import React from 'react'

export const useTableRow = (configuration) => {
  const {
    item,
    updateItem,
    deleteItem
  } = configuration

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

  const handleDelete = () => deleteItem(item)

  const isUpdating = React.useMemo(() => data !== null, [data])

  return {
    item,
    data,
    isUpdating,
    handleEdit,
    handleCancel,
    handleChange,
    handleUpdate,
    handleDelete
  }
}
