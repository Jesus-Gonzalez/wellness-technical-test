import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { fetchConsumptions as fetchConsumptionsAction } from 'core/store/actions'

import { Data } from './Data'

export const DataContainer = (props) => {
  console.log('DataContainer.props', props)

  const {
    data,
    fetchConsumptions
  } = props

  React.useEffect(() => {
    fetchConsumptions()
  }, [fetchConsumptions])

  return (
    <Data
      data={data}
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
