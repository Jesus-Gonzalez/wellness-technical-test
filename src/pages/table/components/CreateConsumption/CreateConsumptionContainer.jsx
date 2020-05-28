import React from 'react'

import { CreateConsumption } from './__components'

export const CreateConsumptionContainer = (props) => {
  const [isCreating, setCreating] = React.useState(false)
  const handleCreateClick = () => {
    setCreating(true)
  }

  const handleSubmit = values => {
    console.log('redux action create', values)
  }

  return (
    <CreateConsumption
      isCreating={isCreating}
      handleCreateClick={handleCreateClick}
      handleSubmit={handleSubmit}
    />
  )
}
