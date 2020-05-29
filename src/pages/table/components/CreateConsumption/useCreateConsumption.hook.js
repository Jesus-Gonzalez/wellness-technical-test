import React from 'react'
import { ToastsStore } from 'react-toasts'

import * as Actions from 'core/store/actionTypes'

export const useCreateConsumption = (configuration) => {
  const { createItem, data } = configuration

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

  return {
    isCreating,
    handleCreateClick,
    handleSubmit
  }
}
