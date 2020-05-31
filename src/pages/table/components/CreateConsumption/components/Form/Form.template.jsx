import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

import { Button } from 'components'

import { onlyNumbers } from './helpers'

import { Input, InputCalendar } from './components'

const propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export const FormTemplate = props => {
  const {
    handleSubmit
  } = props

  return (
    <form onSubmit={handleSubmit} className='d-flex justify-content-center'>
      <div className='card mt-2 w-50'>
        <div className='card-header'>
          <h2>Create Consumption</h2>
        </div>
        <div className='card-body'>
          {['consumption', 'cost', 'price'].map((key, index) => (
            <Field
              key={index}
              name={key}
              component={Input}
              label={key}
              normalize={onlyNumbers}
            />
          ))}

          <Field
            name='date'
            component={InputCalendar}
          />
        </div>

        <div className='card-footer'>
          <Button submit>Submit</Button>
        </div>
      </div>
    </form>
  )
}

FormTemplate.propTypes = propTypes
