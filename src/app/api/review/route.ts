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
      host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const htmlBody = `
      <h2>Nové hodnocení z korektura-diplomove-prace.cz</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr>
          <td style="padding:8px;font-weight:bold;background:#eef2f0;">Kde se dozvěděli o firmě</td>
          <td style="padding:8px;">${discovery || '\u2013'}</td>
        </tr>
        <tr>
          <td style="padding:8px;font-weight:bold;background:#eef2f0;">Důvod výběru</td>
          <td style="padding:8px;">${reasons.length ? reasons.join(', ') : '\u2013'}</td>
        </tr>
        <tr>
          <td style="padding:8px;font-weight:bold;background:#eef2f0;">Přehlednost webu</td>
          <td style="padding:8px;">${clarity || '\u2013'}</td>
        </tr>
        <tr>
          <td style="padding:8px;font-weight:bold;background:#eef2f0;">Komentář</td>
          <td style="padding:8px;">${comment || '\u2013'}</td>
        </tr>
      </table>
    `

    await transporter.sendMail({
      from: `"Web Korektura DP \u2013 Hodnocení" <${process.env.EMAIL_FROM}>`,
      to: process.env.ORDER_TO_EMAIL || process.env.EMAIL_FROM,
      replyTo: undefined,
      subject: `Nové hodnocení \u2013 přehlednost: ${clarity || 'neuvedeno'}`,
      html: htmlBody,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Review form error:', error)
    return NextResponse.json(
      { error: 'Chyba při odeslání. Zkuste to prosím znovu nebo nás kontaktujte e\u2011mailem.' },
      { status: 500 }
    )
  }
}
