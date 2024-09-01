import mongoose from 'mongoose'

export async function initDatabase() {
  const DATABASE_URL = process.env.DATABASE_URL

  mongoose.connection.on('open', () => {
    console.info('Successfully connected to database:', DATABASE_URL)
  })

  const connection = await mongoose.connect(DATABASE_URL)

  return connection
}
