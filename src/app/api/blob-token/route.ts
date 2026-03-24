import { NextRequest, NextResponse } from 'next/server'
import { generateClientTokenFromReadWriteToken } from '@vercel/blob/client'

const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/rtf',
  'text/rtf',
  'application/vnd.oasis.opendocument.text',
  'text/plain',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.oasis.opendocument.spreadsheet',
  'image/jpeg',
  'image/png',
  'application/zip',
  'application/x-zip-compressed',
]

export async function POST(request: NextRequest) {
  try {
    const { filename } = await request.json()
    const pathname = `korektura-dp/${Date.now()}_${filename}`

    const token = await generateClientTokenFromReadWriteToken({
      token: process.env.BLOB_READ_WRITE_TOKEN!,
      pathname,
      maximumSizeInBytes: 25 * 1024 * 1024,
      allowedContentTypes: ALLOWED_TYPES,
      addRandomSuffix: false,
    })

    return NextResponse.json({ token, pathname })
  } catch (error) {
    console.error('Blob token error:', error)
    return NextResponse.json({ error: 'Token generation failed' }, { status: 500 })
  }
}
