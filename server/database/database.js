import mongoose from 'mongoose'

const database = mongoose
  .connect('mongodb://localhost:27017/wellnesstg', { useNewUrlParser: true, useUnifiedTopology: true })

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open')
})

// If the connection throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err)
})

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected')
})

export default database
