import React from 'react'
import PropTypes from 'prop-types'

import { Table } from './__components'

const propTypes = {
  data: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object).isRequired
  }).isRequired
}

export const TableWrapper = props => (
  <div className='container'>
    <div className='row'>
      <div className='col mt-3'>
        <h2 className='mb-2'>Table</h2>
        <Table />
      </div>
    </div>
  </div>
)

TableWrapper.propTypes = propTypes
