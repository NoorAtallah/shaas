import { NextResponse } from 'next/server'
import { dbConnect } from '../../lib/mongodb'
import Lead from '../../models/Lead'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const name = String(body.name ?? '').trim()
    const email = String(body.email ?? '').trim()
    const message = String(body.message ?? '').trim()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email and message are required.' }, { status: 400 })
    }
    if (!emailRe.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    await dbConnect()
    await Lead.create({
      name,
      email,
      company: String(body.company ?? '').trim(),
      phone: String(body.phone ?? '').trim(),
      inquiryType: String(body.inquiryType ?? '').trim(),
      message,
    })

    return NextResponse.json({ ok: true }, { status: 201 })
  } catch (err) {
    console.error('contact POST error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}