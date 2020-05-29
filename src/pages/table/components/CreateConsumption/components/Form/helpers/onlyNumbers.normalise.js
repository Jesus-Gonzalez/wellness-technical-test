export const onlyNumbers = (next, prev, ...args) => {
  return Number.isNaN(Number(next))
    ? prev
    : next
}
