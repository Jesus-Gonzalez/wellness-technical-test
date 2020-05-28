import React from 'react'

import { ChartTemplate } from './__components'

import { useChart } from './hook'

export const Chart = props => {
  const hook = useChart(props)

  return (
    <ChartTemplate
      {...hook}
    />
  )
}
