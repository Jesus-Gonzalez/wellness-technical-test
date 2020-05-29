import React from 'react'
import { ToastsContainer, ToastsStore } from 'react-toasts'

import LoadingPage from 'pages/loading'

import { CreateConsumptionContainer, Table } from '../__components'

export const DataTemplate = props => {
  const { data, errorMessage } = props

  if (data.loading) {
    return <LoadingPage />
  }

  return (
    <div>
      <ToastsContainer store={ToastsStore} />

      {data.error && (
        <div className="alert alert-danger">
          <strong className="alert-heading">{errorMessage.title}</strong>
          <p>{errorMessage.content}</p>
        </div>
      )}

      <h1>Consumption</h1>

      <CreateConsumptionContainer />

      {(!data.items || !data.items.length) && (
        <>
          <p>No results to display</p>
          <p>Create an entry or import a dataset</p>
        </>
      )}

      {(data.items && data.items.length) ? (
        <Table
          data={data}
        />
      ) : null}
    </div>
  )
}
