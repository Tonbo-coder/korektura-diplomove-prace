import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

async function uploadToCloudinary(file: File): Promise<string> {
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_')

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          resource_type: 'auto',
          folder: 'korektura-diplomove-prace',
          public_id: `${Date.now()}_${safeName}`,
        },
        (error, result) => {
          if (error || !result) reject(error ?? new Error('Upload failed'))
          else resolve(result.secure_url)
        }
      )
      .end(buffer)
  })
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const name = (formData.get('name') as string) ?? ''
    const email = (formData.get('email') as string) ?? ''
    const phone = (formData.get('phone') as string) ?? ''
    const message = (formData.get('message') as string) ?? ''
    const services = formData.getAll('services') as string[]
    const deadline = (formData.get('deadline') as string) ?? ''
    const files = formData.getAll('files') as File[]
    const newsletterRaw = (formData.get('newsletter_consent') as string) ?? 'NE'
    const newsletterConsent = newsletterRaw === 'ANO'

    if (!name || !email) {
      return NextResponse.json({ error: 'Jméno a email jsou povinné.' }, { status: 400 })
    }

    // Upload files to Cloudinary (only if configured)
    const fileUrls: string[] = []
    const cloudinaryConfigured =
      process.env.CLOUDINARY_CLOUD_NAME &&
      process.env.CLOUDINARY_API_KEY &&
      process.env.CLOUDINARY_API_SECRET

    if (cloudinaryConfigured) {
      for (const file of files) {
        if (file && file.size > 0) {
          try {
            const url = await uploadToCloudinary(file)
            fileUrls.push(`${file.name}: ${url}`)
          } catch {
            fileUrls.push(`${file.name}: (nahrávání selhalo)`)
          }
        }
      }
    }

    // Build email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.SMTP_PASS,
      },
    })

    const newsletterRow = newsletterConsent
      ? `<tr><td style="padding:10px 8px;font-weight:bold;background:#fff3cd;">📧 NEWSLETTER</td><td style="padding:10px 8px;background:#fff3cd;font-weight:bold;color:#856404;">✅ ANO – lze přidat do databáze</td></tr>`
      : `<tr><td style="padding:10px 8px;font-weight:bold;background:#f8d7da;">📧 NEWSLETTER</td><td style="padding:10px 8px;background:#f8d7da;font-weight:bold;color:#721c24;">❌ NE – nepřidávat do databáze</td></tr>`

    const htmlBody = `
      <h2>Nová objednávka z korektura-diplomove-prace.cz</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;font-weight:bold;background:#eaf4f1;">Jméno</td><td style="padding:8px;">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#eaf4f1;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#eaf4f1;">Telefon</td><td style="padding:8px;">${phone || '–'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#eaf4f1;">Zpráva</td><td style="padding:8px;">${message || '–'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#eaf4f1;">Datum vyhotovení</td><td style="padding:8px;">${deadline || '–'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#eaf4f1;">Další služby</td><td style="padding:8px;">${services.length ? services.join(', ') : '–'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#eaf4f1;">Soubory</td><td style="padding:8px;">${fileUrls.length ? fileUrls.join('<br>') : '–'}</td></tr>
        ${newsletterRow}
      </table>
    `

    await transporter.sendMail({
      from: `"Web Korektura DP" <${process.env.EMAIL_FROM}>`,
      to: process.env.ORDER_TO_EMAIL || process.env.EMAIL_FROM,
      replyTo: email,
      subject: `Nová objednávka korektury DP – ${name}`,
      html: htmlBody,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Chyba při odeslání. Zkuste to prosím znovu nebo nás kontaktujte emailem.' }, { status: 500 })
  }
}
