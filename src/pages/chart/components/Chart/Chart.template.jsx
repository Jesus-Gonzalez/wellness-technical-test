import React from 'react'
import PropTypes from 'prop-types'
import C3Chart from 'react-c3js'

import styles from './styles.module.scss'

const propTypes = {
  axis: PropTypes.object,
  chartConfigurations: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object)
}

export const ChartTemplate = (props) => {
  const {
    axis,
    chartConfigurations,
    data
  } = props

  return (
    <div className="container">
      <div className="row">
        <div className={`col ${styles.wrapper}`}>
          <h2>Chart</h2>
          {!data.length && (
            <h3>No data to display</h3>
          )}
          {!data.length ? '' : (
            <div style={{ width: `${data.length * 10}px` }}>
              {chartConfigurations.map(({ key, title, ...data }) => (
                <div key={key} className="row">
                  <div className="col">
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
