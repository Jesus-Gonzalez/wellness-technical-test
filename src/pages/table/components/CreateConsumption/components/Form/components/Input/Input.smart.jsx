import React from 'react'

import { InputTemplate } from './Input.template'

import { useInput } from './useInput.hook'

export const Input = props => {
  const hook = useInput(props)

  return (
    <InputTemplate {...hook} />
  )
}
