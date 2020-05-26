import mongoose from 'mongoose';

const database = mongoose
  .connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true })

export default database
