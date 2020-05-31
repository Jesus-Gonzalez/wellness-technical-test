import React from 'react'
import { reduxForm } from 'redux-form'

import { FormTemplate } from './Form.template'

import { validate } from './helpers'

const Form = props => (
  <FormTemplate {...props} />
)

export default reduxForm({
  form: 'CreateConsumption',
  validate
})(Form)
