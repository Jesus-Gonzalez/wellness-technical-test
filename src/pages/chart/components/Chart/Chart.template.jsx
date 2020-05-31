import React from 'react'
import PropTypes from 'prop-types'
import C3Chart from 'react-c3js'

import styles from './styles.module.scss'

const propTypes = {
  axis: PropTypes.object,
  chartConfigurations: PropTypes.arrayOf(PropTypes.object),
  items: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.bool
}

export const ChartTemplate = (props) => {
  const {
    axis,
    chartConfigurations,
    items,
    error
  } = props

  return (
    <div className='container'>
      <div className='row'>
        <div className={`col ${styles.wrapper}`}>
          <h2>Chart</h2>
          {error && (
            <div className='alert alert-danger'>
              <strong className='alert-heading'>
                Error while fetching data
              </strong>
              <p>Error while fetching data. Try again later.</p>
            </div>
          )}

          {!error && !items.length && (
            <h3>No data to display</h3>
          )}

          {!!items.length && (
            <div style={{ width: `${items.length * 10}px` }}>
              {chartConfigurations.map(({ key, title, ...data }) => (
                <div key={key} className='row'>
                  <div className='col'>
                    <h3>{title}</h3>
                    <C3Chart
                      data={data}
                      axis={axis}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

ChartTemplate.propTypes = propTypes
