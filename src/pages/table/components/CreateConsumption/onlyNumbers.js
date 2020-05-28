export default (next, prev, ...args) => {
  return Number.isNaN(Number(next))
    ? prev
    : next
}
