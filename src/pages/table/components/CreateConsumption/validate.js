export default values => {
  const errors = {}

  if (!values.consumption) {
    errors.consumption = 'Required'
  } else if (Number.isNaN(Number(values.consumption))) {
    errors.consumption = 'Not a Number'
  }

  if (!values.cost) {
    errors.cost = 'Required'
  } else if (Number.isNaN(Number(values.cost))) {
    errors.cost = 'Not a Number'
  }

  if (!values.price) {
    errors.price = 'Required'
  } else if (Number.isNaN(Number(values.price))) {
    errors.price = 'Not a Number'
  }

  if (!values.date) {
    errors.date = 'Required'
  }

  return errors
}
