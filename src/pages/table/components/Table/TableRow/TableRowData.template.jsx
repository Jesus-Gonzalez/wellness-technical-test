import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { Button } from 'components'

const propTypes = {
  item: PropTypes.object.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export const TableRowDataTemplate = (props) => {
  const {
    item,
    handleEdit,
    handleDelete
  } = props

  return (
    <tr>
      <td>{moment.parseZone(item.date).format('YYYY/MM/DD ha')}</td>
      <td>{item.consumption}</td>
      <td>{item.cost}</td>
      <td>{item.price}</td>
      <td>
        <Button
          type='invisible'
          onClick={handleEdit}
        >
          <img alt='update' src='/images/pencil.png' />
        </Button>

        <Button
          type='invisible'
          onClick={handleDelete}
        >
          <img alt='delete' src='/images/trash.png' />
        </Button>
      </td>
    </tr>
  )
}

TableRowDataTemplate.propTypes = propTypes
