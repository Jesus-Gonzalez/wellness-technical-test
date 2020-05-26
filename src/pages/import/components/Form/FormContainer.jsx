import React from 'react'

import { load } from 'pages/import/api'
import { readFile } from 'pages/import/utils'
import { processFile } from 'pages/import/helpers'

import { Form } from './__components'

export const FormContainer = () => {
  const [file, setFile] = React.useState(null)
  const [error, setError] = React.useState(null)

  const handleFileChange = React.useCallback(event => {
    const [file] = event.target.files
    readFile(file)
      .then(processFile)
      .then(meta => setFile({ file, ...meta }))
      .catch(error => setError(error))
  })

  const handleSubmit = React.useCallback(event => {
    event.preventDefault()
    load(file.lines)
  })

  return (
    <Form
      error={error}
      file={file}
      handleSubmit={handleSubmit}
      handleFileChange={handleFileChange}
    />
  )
}
