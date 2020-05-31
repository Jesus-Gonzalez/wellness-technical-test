import React from 'react'
import PropTypes from 'prop-types'

import LoadingPage from 'pages/loading'

import { Chart } from '../__components'

const propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired
  }).isRequired
}

export const DataTemplate = props => {
  const { data } = props

  if (data.loading) {
    return <LoadingPage />
  }

  return (
    <Chart
      data={data}
    />
  )
}

DataTemplate.propTypes = propTypes
