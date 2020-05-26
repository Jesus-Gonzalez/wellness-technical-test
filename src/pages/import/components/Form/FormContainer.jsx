import React from 'react'

import { Form } from './__components'

export const FormContainer = () => {
  const [file, setFile] = React.useState(null)

  const handleFileChange = React.useCallback(event => {
    setFile(event.target.files[0].name)
  })

  const handleSubmit = React.useCallback(event => {
    event.preventDefault()
    console.log('submitting')
  })

  return (
    <Form
      file={file}
      handleSubmit={handleSubmit}
      handleFileChange={handleFileChange}
    />
  )
}
