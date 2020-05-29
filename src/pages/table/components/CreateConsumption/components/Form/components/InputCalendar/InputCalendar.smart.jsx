import React from 'react'

import { InputCalendarTemplate } from './InputCalendar.template'

import { useInputCalendar } from './useInputCalendar.hook'

export const InputCalendar = props => {
  const hook = useInputCalendar(props)

  return <InputCalendarTemplate {...hook} />
}
