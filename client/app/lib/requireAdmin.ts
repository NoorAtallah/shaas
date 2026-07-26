import { getServerSession } from 'next-auth'
import { authOptions } from './auth'

export async function isAdmin(): Promise<boolean> {
  const session = await getServerSession(authOptions)
  return Boolean(session?.user)
}
