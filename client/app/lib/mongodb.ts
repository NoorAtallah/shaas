import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Missing MONGODB_URI in environment')
}

interface MongooseCache {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

// reuse across hot reloads in dev and warm serverless invocations
const globalWithMongoose = global as typeof globalThis & {
  _mongoose?: MongooseCache
}

const cached: MongooseCache =
  globalWithMongoose._mongoose ?? { conn: null, promise: null }

globalWithMongoose._mongoose = cached

export async function dbConnect(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI!, {
      bufferCommands: false,
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}