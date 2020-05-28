import React from 'react'

import { ChartTemplate } from './Chart.template'

import { useChart } from './useChart.hook'

export const Chart = props => {
  const hook = useChart(props)

  return (
    <ChartTemplate
      {...hook}
    />
  )
}
