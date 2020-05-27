import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'components/Button/Button'

import { FormState } from './FormState.enum'

const propTypes = {
  file: PropTypes.shape({
    file: PropTypes.instanceOf(File),
    count: PropTypes.number
  }),
  handleFileChange: PropTypes.func,
  handleSubmit: PropTypes.func,
}

export const Form = (props) => {
  const {
    file,
    formState,
    handleFileChange,
    handleSubmit
  } = props

  const alert = React.useMemo(() => {
    switch (formState) {
      case FormState.Submitted:
        return {
          klass: 'alert-success',
          title: 'Data Loaded',
          content: 'The data has been loaded to the database'
        }

      case formState === FormState.Error:
        return {
          klass: 'alert-danger',
          title: 'Error',
          content: 'Error while loading'
        }

      default:
        return null
    }
  }, [formState])

  const submitDisabled = React.useMemo(() => (
    formState === FormState.Loading ||
    !file
  ), [formState, file])

  return (
    <form onSubmit={handleSubmit}>
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
          <label className="custom-file-label" for="file-input-load-data">
            {!file ? 'Choose data file to load' : `${file.file.name} - ${file.count} rows to insert`}
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

Form.propTypes = propTypes
