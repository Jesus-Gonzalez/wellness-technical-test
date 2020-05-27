import React from 'react'

import * as Api from 'pages/import/api'
import { readFile } from 'pages/import/utils'
import { processFile } from 'pages/import/helpers'

import { FormState } from './FormState.enum'
import { Form } from './__components'

export const FormContainer = () => {
  const [file, setFile] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [formState, setFormState] = React.useState(FormState.Open)

  const handleFileChange = React.useCallback(event => {
    const [file] = event.target.files
    readFile(file)
      .then(processFile)
      .then(meta => setFile({ file, ...meta }))
      .catch(error => setError(error))
  }, [setFile, setError])

  const handleSubmit = React.useCallback(async event => {
    event.preventDefault()
    setFormState(FormState.Loading)
    const created = await Api.bulk(file.lines)
    if (created) {
      setFormState(FormState.Submitted)
      setFile(null)
    } else {
      setFormState(FormState.Error)
    }
  }, [setFormState, setFile, file])

  return (
    <Form
      formState={formState}
      error={error}
      file={file}
      handleSubmit={handleSubmit}
      handleFileChange={handleFileChange}
    />
  )
}
