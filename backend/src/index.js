import dotenv from 'dotenv'
import { app } from './app.js'
import { initDatabase } from './db/init.js'

dotenv.config()

try {
  await initDatabase()

  const PORT = process.env.PORT || 3000

  app.listen(PORT)
  console.info(`express server running on port http://localhost:${PORT}`)
} catch (err) {
  console.error('error connecting to database:', err)
}
