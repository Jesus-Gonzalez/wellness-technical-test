import React from 'react'

import { Button } from 'components'

import { Form } from './components'

export const CreateConsumptionTemplate = props => {
  const {
    isCreating,
    handleCreateClick,
    handleSubmit
  } = props

  return (
    <div className="row mb-4">
      <div className="col">
        {!isCreating && (
          <Button
            type="success"
            onClick={handleCreateClick}
          >
            + Create
          </Button>
        )}

        {isCreating && (
          <Form
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  )
}
