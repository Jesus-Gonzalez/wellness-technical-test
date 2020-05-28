import React from 'react'
import { reduxForm, Field } from 'redux-form'

import { Button } from 'components'

import validate from './validate'
import onlyNumbers from './onlyNumbers'

import { Input, InputCalendar } from './__components'

const Form = props => {
  const {
    handleSubmit
  } = props

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center">
      <div className="card mt-2 w-50">
        <div className="card-header">
          <h2>Create Consumption</h2>
        </div>
        <div className="card-body">
          <Field
            name="consumption"
            component={Input}
            label="Consumption"
            normalize={onlyNumbers}
          />

          <Field
            name="cost"
            component={Input}
            label="Cost"
            normalize={onlyNumbers}
          />

          <Field
            name="price"
            component={Input}
            label="Price"
            normalize={onlyNumbers}
          />

          <Field
            name="date"
            component={InputCalendar}
          />
        </div>

        <div className="card-footer">
          <Button submit>Submit</Button>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'createConsumption',
  validate
})(Form)
