import { NextResponse } from 'next/server'
import cloudinary from '../../../lib/cloudinary'
import { isAdmin } from '../../../lib/requireAdmin'

export async function POST(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const form = await req.formData()
  const file = form.get('file') as File | null
  if (!file) return NextResponse.json({ error: 'No file provided.' }, { status: 400 })

  const bytes = Buffer.from(await file.arrayBuffer())
  const dataUri = `data:${file.type};base64,${bytes.toString('base64')}`

  try {
    const res = await cloudinary.uploader.upload(dataUri, { folder: 'shaas/blog' })
    return NextResponse.json({ url: res.secure_url })
  } catch (err) {
    console.error('cloudinary upload error:', err)
    return NextResponse.json({ error: 'Upload failed.' }, { status: 500 })
  }
}
