import mongoose from 'mongoose'

export const ConsumptionSchema = new mongoose.Schema({
  date: Date,
  consumption: Number,
  price: Number,
  cost: Number
})

export const ConsumptionModel = mongoose.model('Consumption', ConsumptionSchema)
