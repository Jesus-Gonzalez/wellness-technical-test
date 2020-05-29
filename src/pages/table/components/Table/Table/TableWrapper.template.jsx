import React from 'react'

import { Table } from './__components'

export const TableWrapper = props => {
  const { data } = props

  return (
    <div className="container">
      <div className="row">
        <div className="col mt-3">
          <h2 className="mb-2">Table</h2>
          {(!data || !data.items || !data.items.length)
            ? <Empty />
            : <Table />}
        </div>
      </div>
    </div>
  )
}
