import React from 'react'
import PropTypes from 'prop-types'

import { TableRow } from 'pages/table/components/Table'

const propTypes = {
  data: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object).isRequired
  }).isRequired
}

export const TableTemplate = (props) => {
  const { data } = props

  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th scope='col'>date</th>
          <th scope='col'>consumption (kWh)</th>
          <th scope='col'>cost (€/kWh)</th>
          <th scope='col'>price (€)</th>
          <th scope='col'>actions</th>
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

TableTemplate.propTypes = propTypes
