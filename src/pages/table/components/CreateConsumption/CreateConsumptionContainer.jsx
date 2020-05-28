import React from 'react'

import { CreateConsumption } from './__components'

export const CreateConsumptionContainer = (props) => {
  const [isCreating, setCreating] = React.useState(false)
  const handleCreateClick = () => {
    setCreating(true)
  }

  const handleSubmit = (...args) => {
    console.log('submitting')
  }

  return (
    <CreateConsumption
      isCreating={isCreating}
      handleCreateClick={handleCreateClick}
      handleSubmit={handleSubmit}
    />
  )
}
