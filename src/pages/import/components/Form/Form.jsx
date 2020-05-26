import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'components/Button/Button'

import styles from './Form.module.scss'

const propTypes = {
  file: PropTypes.instanceOf(File),
  handleFileChange: PropTypes.func,
  handleSubmit: PropTypes.func,
}

export const Form = (props) => {
  const {
    file,
    handleFileChange,
    handleSubmit
  } = props

  return (
    <form onSubmit={handleSubmit}>
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
            {!file ? 'Choose data file to load' : file}
          </label>
        </div>
      </div>

      <Button
        submit
      >
        Load CSV to Database
      </Button>
    </form>
  )
}

Form.propTypes = propTypes
