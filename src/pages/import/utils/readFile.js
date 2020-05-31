export const readFile = file => new Promise((resolve, reject) => {
  const reader = new window.FileReader()

  reader.readAsText(file)

  reader.onload = () => {
    resolve(reader.result)
  }

  reader.onerror = () => {
    reject(reader.error)
  }
})
