import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'components'

import { Form } from './components'

const propTypes = {
  isCreating: PropTypes.bool.isRequired,
  handleCreateClick: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export const CreateConsumptionTemplate = props => {
  const {
    isCreating,
    handleCreateClick,
    handleSubmit
  } = props

  return (
    <div className='row mb-4'>
      <div className='col'>
        {!isCreating && (
          <Button
            type='success'
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

CreateConsumptionTemplate.propTypes = propTypes
