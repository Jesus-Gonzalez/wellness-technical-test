import React from 'react'

import { Button } from 'components'

import { Form } from './__components'

export const CreateConsumption = props => {
  const {
    isCreating,
    handleCreateClick,
    handleSubmit
  } = props

  return (
    <div className="row">
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
