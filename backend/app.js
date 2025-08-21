import express from 'express'
const app = express()
const port = process.env.PORT
app.listen(port, () => console.log(`app is listening to port ${port}`))

import mongoose from 'mongoose'
const   MONGOOSE_URL = process.env.ATLAS_URL
async function main() {
    await mongoose.connect(MONGOOSE_URL)
}
main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import bookRouter from './routes/book.js'

app.use('/api', bookRouter)

import notFound from './middleware/notFound.js'

app.use(notFound)

import errorHandler from './middleware/expressError.js'

app.use(errorHandler)