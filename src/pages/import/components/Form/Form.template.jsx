import React from 'react'
import PropTypes from 'prop-types'
import { ToastsContainer, ToastsStore } from 'react-toasts'

import { Button, Spinner } from 'components'

import { FormState } from './FormState.enum'

const propTypes = {
  alert: PropTypes.object,
  submitDisabled: PropTypes.bool,
  formState: PropTypes.number,
  file: PropTypes.shape({
    file: PropTypes.instanceOf(File),
    count: PropTypes.number
  }),
  handleFileChange: PropTypes.func,
  handleSubmit: PropTypes.func,
}

export const FormTemplate = (props) => {
  const {
    alert,
    submitDisabled,
    file,
    formState,
    handleFileChange,
    handleSubmit
  } = props

  if (formState === FormState.Loading) {
    return <Spinner />
  }

  return (
    <form onSubmit={handleSubmit}>
      <ToastsContainer store={ToastsStore} />

      {alert && (
        <div className={`alert ${alert.klass} mb-3`}>
          <strong>{alert.title}</strong>
          <p>{alert.content}</p>
        </div>
      )}

      <div className="input-group mb-3">
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            onChange={handleFileChange}
            accept=".csv"
            id="file-input-load-data"
          />
          <label className="custom-file-label" htmlFor="file-input-load-data">
            {!file
              ? 'Choose data file to load'
              : `${file.file.name} - ${file.count} rows to insert`}
          </label>
        </div>
      </div>

      <Button
        disabled={submitDisabled}
        submit
      >
        Load CSV to Database
      </Button>
    </form>
  )
}

FormTemplate.propTypes = propTypes
