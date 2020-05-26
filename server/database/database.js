import mongoose from 'mongoose'

const database = mongoose
  .connect('mongodb://localhost:27017/wellnesstg', { useNewUrlParser: true })

export default database
