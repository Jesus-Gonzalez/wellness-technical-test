import React from 'react'

import { Table } from './__components'

export const TableWrapper = props => (
  <div className="container">
    <div className="row">
      <div className="col mt-3">
        <h2 className="mb-2">Table</h2>
        <Table {...props} />
      </div>
    </div>
  </div>
)
