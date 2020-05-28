import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { updateConsumption, deleteConsumption } from 'core/store/actions'

import { TableWrapper } from './__components'

const TableContainer = props => {
  return (
    <TableWrapper {...props} />
  )
}

const mapStateToProps = state => ({
  data: state.data
})

const mapDispatchToProps = dispatch => ({
  updateItem: compose(dispatch, updateConsumption),
  deleteItem: compose(dispatch, deleteConsumption)
})

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer)
