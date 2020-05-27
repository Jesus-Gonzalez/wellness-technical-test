import React from 'react'
import moment from 'moment'

import { Chart } from './__components'

import styles from './Chart.module.scss'

export const ChartWrapper = props => {
  const { data } = props

  const xValues = React.useMemo(() => (
    data.map(item => (
      moment.parseZone(item.date).toDate()
    ))
  ), [data])

  const generateChartConfig = ({ title, keys = [] }) => ({
    title,
    key: keys.join('.'),
    x: 'x',
    columns: [
      ['x', ...xValues],
      ...keys.map(key => [key, ...data.map(item => item[key])])
    ]
  })

  const axis = {
    x: {
      type: 'timeseries',
      tick: {
        format: date => moment(date).format('YYYY/MM/DD h:m:s')
      }
    }
  }

  const chartConfigurations = [
    {
      title: 'Consumption',
      keys: ['consumption']
    },
    {
      title: 'Price',
      keys: ['price']
    },
    {
      title: 'Price-Cost',
      keys: ['price', 'cost']
    }
  ]
    .map(generateChartConfig)

  return (
    <div className="container">
      <div className="row">
        <div className={`col ${styles.wrapper}`}>
          <h2>Chart</h2>
          <div
            style={{
              width: `${data.length * 10}px`
            }}
          >
            {chartConfigurations.map(({ key, ...config }) => (
              <Chart
                key={key}
                axis={axis}
                data={config}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
