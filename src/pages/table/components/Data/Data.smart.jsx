import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { fetchConsumptions as fetchConsumptionsAction } from 'core/store/actions'

import { Data } from './Data.template'

import { useData } from './useData.hook'

export const DataContainer = (props) => {
  const hook = useData()

  return (
    <Data
      {...hook}
    />
  )
}

const mapStateToProps = state => ({
  data: state.data
})

const mapDispatchToProps = dispatch => ({
  fetchConsumptions: compose(dispatch, fetchConsumptionsAction)
})

export default connect(mapStateToProps, mapDispatchToProps)(DataContainer)
