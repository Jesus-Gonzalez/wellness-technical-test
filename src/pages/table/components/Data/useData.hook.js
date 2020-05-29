import React from 'react'
import { ToastsStore } from 'react-toasts'

import * as Actions from 'core/store/actionTypes'

export const useData = (configuration) => {
  const {
    data,
    fetchConsumptions
  } = configuration

  React.useEffect(() => {
    fetchConsumptions()
  }, [fetchConsumptions])

  React.useEffect(() => {
    if (data.error) {
      ToastsStore.error('An error occured in the application')
    }
  }, [data.error])

  const errorMessage = React.useMemo(() => {
    switch (data.status) {
      case Actions.Consumption.FetchError: {
        return {
          title: 'Fetch failed',
          content: 'Error while fetching data'
        }
      }

      case Actions.Consumption.CreateError: {
        return {
          title: 'Create failed',
          content: 'Error while saving the item'
        }
      }

      case Actions.Consumption.UpdateError: {
        return {
          title: 'Update failed',
          content: 'Error while updating the item'
        }
      }

      case Actions.Consumption.DeleteError: {
        return {
          title: 'Deletion failed',
          content: 'Error while deleting the item'
        }
      }

      default: return {}
    }
  }, [data.status])

  return {
    data,
    errorMessage
  }
}
