import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const discovery = (formData.get('discovery') as string) ?? ''
    const reasons = formData.getAll('reason') as string[]
    const clarity = (formData.get('clarity') as string) ?? ''
    const comment = (formData.get('comment') as string) ?? ''

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    const htmlBody = `
      <h2>Nové hodnocení z korektura-diplomove-prace.cz</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr>
          <td style="padding:8px;font-weight:bold;background:#eef2f0;">Kde se dozvěděli o firmě</td>
          <td style="padding:8px;">${discovery || '–'}</td>
        </tr>
        <tr>
          <td style="padding:8px;font-weight:bold;background:#eef2f0;">Důvod výběru</td>
          <td style="padding:8px;">${reasons.length ? reasons.join(', ') : '–'}</td>
        </tr>
        <tr>
          <td style="padding:8px;font-weight:bold;background:#eef2f0;">Přehlednost webu</td>
          <td style="padding:8px;">${clarity || '–'}</td>
        </tr>
        <tr>
          <td style="padding:8px;font-weight:bold;background:#eef2f0;">Komentář</td>
          <td style="padding:8px;">${comment || '–'}</td>
        </tr>
      </table>
    `

    await transporter.sendMail({
      from: `"Web Korektura DP – Hodnocení" <${process.env.GMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL || process.env.GMAIL_USER,
      subject: `Nové hodnocení – přehlednost: ${clarity || 'neuvedeno'}`,
      html: htmlBody,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Review form error:', error)
    return NextResponse.json(
      { error: 'Chyba při odeslání. Zkuste to prosím znovu nebo nás kontaktujte e‑mailem.' },
      { status: 500 }
    )
  }
}
