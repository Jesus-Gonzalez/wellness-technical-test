import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { ToastsContainer, ToastsStore } from 'react-toasts'

import { CreateConsumption } from './__components'

import * as Actions from 'core/store/actionTypes'
import { createConsumption } from 'core/store/actions'

const CreateConsumptionContainer = (props) => {
  const { createItem, data } = props

  const [isCreating, setCreating] = React.useState(false)
  const handleCreateClick = () => {
    setCreating(true)
  }

  const handleSubmit = async values => {
    createItem(values)
    setCreating(false)
  }

  React.useEffect(() => {
    switch (data.status) {
      case Actions.Consumption.Create: {
        ToastsStore.info('Saving item... Please wait...')
        break
      }

      case Actions.Consumption.CreateSuccess: {
        ToastsStore.success('Item saved')
        break
      }

      case Actions.Consumption.CreateError: {
        ToastsStore.error('Error saving')
        break
      }

      default: break
    }
  }, [data.status])

  React.useEffect(() => {
    switch (data.status) {
      case Actions.Consumption.Update: {
        ToastsStore.info('Updating item... Wait please...')
        break
      }

      case Actions.Consumption.UpdateSuccess: {
        ToastsStore.success('Item updated correctly')
        break
      }

      case Actions.Consumption.UpdateError: {
        ToastsStore.error('Error while updating item')
        break
      }

      default: break
    }
  }, [data.status])

  React.useEffect(() => {
    switch (data.status) {
      case Actions.Consumption.Delete: {
        ToastsStore.info('Deleting item... Wait please...')
        break
      }

      case Actions.Consumption.DeleteSuccess: {
        ToastsStore.success('Item deleted correctly')
        break
      }

      case Actions.Consumption.DeleteError: {
        ToastsStore.error('Error while deleting item')
        break
      }

      default: break
    }
  }, [data.status])

  return (
    <>
      <ToastsContainer store={ToastsStore} />
      <CreateConsumption
        isCreating={isCreating}
        handleCreateClick={handleCreateClick}
        handleSubmit={handleSubmit}
      />
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
