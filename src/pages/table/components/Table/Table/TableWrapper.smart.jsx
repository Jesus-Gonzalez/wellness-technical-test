import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import {
  updateConsumption,
  deleteConsumption
} from 'core/store/actions'

import { TableTemplate } from './__components'

const Table = props => (
  <TableTemplate {...props} />
)

const mapDispatchToProps = dispatch => ({
  updateItem: compose(dispatch, updateConsumption),
  deleteItem: compose(dispatch, deleteConsumption)
})

export default connect(null, mapDispatchToProps)(Table)
