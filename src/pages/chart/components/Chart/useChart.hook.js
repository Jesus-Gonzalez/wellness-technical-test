import React from 'react'
import moment from 'moment'

export const useChart = configuration => {
  const { data: { error, items } } = configuration

  const values = React.useMemo(
    () => items.reduce((acc, item) => ({
      consumption: acc.consumption.concat(item.consumption),
      cost: acc.cost.concat(item.cost),
      price: acc.price.concat(item.price),
      date: acc.date.concat(new Date(item.date))
    }), { consumption: [], cost: [], price: [], date: [] }
    ), [items])

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
        format: date => moment(date).format('YYYY/MM/DD h:m:s'),
        width: 10
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

  return {
    error,
    items,
    chartConfigurations,
    axis
  }
}
