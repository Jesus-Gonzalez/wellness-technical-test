import React from 'react'

import { FormTemplate } from './Form.template'

import { useForm } from './useForm.hook'

export const FormContainer = (props) => {
  const hook = useForm(props)

  return (
    <FormTemplate
      {...hook}
    />
  )
}
