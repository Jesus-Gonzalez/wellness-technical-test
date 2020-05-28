import React from 'react'
import moment from 'moment'

import { Chart } from './__components'

import styles from './Chart.module.scss'

export const ChartWrapper = props => {
  const { data } = props

  const values = React.useMemo(
    () => data.reduce((acc, item) => ({
      consumption: acc.consumption.concat(item.consumption),
      cost: acc.cost.concat(item.cost),
      price: acc.price.concat(item.price),
      date: acc.date.concat(new Date(item.date))
    }), { consumption: [], cost: [], price: [], date: [] }
    ), [data])

  const generateChartConfig = ({ title, keys = [] }) => ({
    title,
    key: keys.join('.'),
    x: 'x',
    columns: [
      ['x'].concat(values.date)
    ].concat(keys.map(key => [key].concat(values[key])))
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
