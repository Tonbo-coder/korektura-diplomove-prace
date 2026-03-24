import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { name, email, phone, message, services, deadline, fileUrls, newsletterConsent } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Jméno a email jsou povinné.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const newsletterRow = newsletterConsent
      ? `<tr><td style="padding:10px 8px;font-weight:bold;background:#fff3cd;">📧 NEWSLETTER</td><td style="padding:10px 8px;background:#fff3cd;font-weight:bold;color:#856404;">✅ ANO – lze přidat do databáze</td></tr>`
      : `<tr><td style="padding:10px 8px;font-weight:bold;background:#f8d7da;">📧 NEWSLETTER</td><td style="padding:10px 8px;background:#f8d7da;font-weight:bold;color:#721c24;">❌ NE – nepřidávat do databáze</td></tr>`

    const filesHtml = fileUrls?.length
      ? (fileUrls as string[]).map((url: string) => {
          const name = decodeURIComponent(url.split('/').pop() ?? url)
          return `<a href="${url}" style="color:#1a7a68;">${name}</a>`
        }).join('<br>')
      : '–'

    const htmlBody = `
      <h2>Nová objednávka z korektura-diplomove-prace.cz</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;font-weight:bold;background:#eaf4f1;">Jméno</td><td style="padding:8px;">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#eaf4f1;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#eaf4f1;">Telefon</td><td style="padding:8px;">${phone || '–'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#eaf4f1;">Zpráva</td><td style="padding:8px;">${message || '–'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#eaf4f1;">Datum vyhotovení</td><td style="padding:8px;">${deadline || '–'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#eaf4f1;">Další služby</td><td style="padding:8px;">${services?.length ? services.join(', ') : '–'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#eaf4f1;">Soubory</td><td style="padding:8px;">${filesHtml}</td></tr>
        ${newsletterRow}
      </table>
      ${fileUrls?.length ? '<p style="color:#666;font-size:12px;margin-top:12px;">⚠️ Soubory budou automaticky smazány po 14 dnech.</p>' : ''}
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
