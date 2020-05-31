export const processFile = content => {
  const lines = content
    .split('\n').slice(1)
    .map(line => line.split(' , ').map(line => line.trim()))
    .filter(line => line[0])

  return {
    lines,
    count: lines.length
  }
}
