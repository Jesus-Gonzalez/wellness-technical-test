import React from 'react'

import {
  TableRowDataTemplate,
  TableRowUpdateTemplate
} from './__components'

import { useTableRow } from './useTableRow.hook'

export const TableRow = (props) => {
  const hook = useTableRow(props)

  if (!hook.isUpdating) {
    return (
      <TableRowDataTemplate
        {...hook}
      />
    )
  }

  return (
    <TableRowUpdateTemplate
      {...hook}
    />
  )
}
