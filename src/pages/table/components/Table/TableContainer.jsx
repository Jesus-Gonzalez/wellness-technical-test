import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import {
  updateConsumption,
  deleteConsumption
} from 'core/store/actions'

import { TableWrapper } from './__components'

const TableContainer = props => (
  <TableWrapper {...props} />
)

const mapDispatchToProps = dispatch => ({
  updateItem: compose(dispatch, updateConsumption),
  deleteItem: compose(dispatch, deleteConsumption)
})

export default connect(null, mapDispatchToProps)(TableContainer)
