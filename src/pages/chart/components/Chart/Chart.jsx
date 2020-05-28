import React from 'react'
import C3Chart from 'react-c3js'

export const ChartRaw = props => {
  const {
    data: { title, ...data },
    axis
  } = props

  return (
    <div className="row">
      <div className="col">
        <h3>{title}</h3>
        <C3Chart
          data={data}
          axis={axis}
        />
      </div>
    </div>
  )
}

export const Chart = React.memo(ChartRaw)
