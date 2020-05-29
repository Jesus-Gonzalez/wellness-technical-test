import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { ToastsContainer, ToastsStore } from 'react-toasts'

import { createConsumption } from 'core/store/actions'

import { CreateConsumptionTemplate } from './CreateConsumption.template'

import { useCreateConsumption } from './useCreateConsumption.hook'

const CreateConsumptionContainer = (props) => {
  const hook = useCreateConsumption(props)

  return (
    <>
      <ToastsContainer store={ToastsStore} />
      <CreateConsumptionTemplate {...hook} />
    </>
  )
}

const mapStateToProps = state => ({
  data: state.data
})

const mapDispatchToProps = dispatch => ({
  createItem: compose(dispatch, createConsumption)
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateConsumptionContainer)
