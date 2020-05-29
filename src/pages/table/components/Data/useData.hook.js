import React from 'react'

export const useData = (configuration) => {
  const {
    data,
    fetchConsumptions
  } = configuration

  React.useEffect(() => {
    fetchConsumptions()
  }, [fetchConsumptions])

  return {
    data
  }
}
