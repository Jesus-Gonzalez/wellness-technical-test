import React from 'react'
import { ToastsStore } from 'react-toasts'

import * as Api from 'api'

import { readFile } from 'pages/import/utils'
import { processFile } from 'pages/import/helpers'

import { FormState } from './FormState.enum'

export const useForm = () => {
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
    const created = await Api.bulkConsumption(file.lines)
    if (created) {
      setFormState(FormState.Submitted)
      setFile(null)
    } else {
      setFormState(FormState.Error)
    }
  }, [setFormState, setFile, file])

  const alert = React.useMemo(() => {
    switch (formState) {
      case FormState.Loading:
        ToastsStore.info('Loading data... Please wait...')
        break

      case FormState.Submitted:
        ToastsStore.success('Data loaded :)')
        return {
          klass: 'alert-success',
          title: 'Data Loaded',
          content: 'The data has been loaded to the database'
        }

      case formState === FormState.Error:
        ToastsStore.error('Error while loading')

        return {
          klass: 'alert-danger',
          title: 'Error',
          content: `Error while loading: ${error}`
        }

      default:
        return null
    }
  }, [formState, error])

  const submitDisabled = React.useMemo(() => (
    formState === FormState.Loading ||
    !file
  ), [formState, file])

  return {
    error,
    formState,
    file,
    handleFileChange,
    handleSubmit,
    submitDisabled,
    alert
  }
}
