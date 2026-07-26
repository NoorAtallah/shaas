import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { dbConnect } from '../../../lib/mongodb'
import AdminUser from '../../../models/AdminUser'

// Call once: POST /api/admin/seed  with header  x-seed-secret: <NEXTAUTH_SECRET>
export async function POST(req: Request) {
  const secret = req.headers.get('x-seed-secret')
  if (!secret || secret !== process.env.NEXTAUTH_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const email = process.env.ADMIN_EMAIL
  const password = process.env.ADMIN_PASSWORD
  if (!email || !password) {
    return NextResponse.json({ error: 'ADMIN_EMAIL / ADMIN_PASSWORD not set.' }, { status: 400 })
  }
  await dbConnect()
  const existing = await AdminUser.findOne({ email: email.toLowerCase() })
  if (existing) return NextResponse.json({ ok: true, message: 'Admin already exists.' })
  const passwordHash = await bcrypt.hash(password, 12)
  await AdminUser.create({ email: email.toLowerCase(), name: 'SHAAS Admin', passwordHash })
  return NextResponse.json({ ok: true, message: 'Admin created.' })
}
