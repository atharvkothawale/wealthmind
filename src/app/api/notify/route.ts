import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, city, investment_goal, message } = body

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY environment variable is not defined.")
      return NextResponse.json({ success: false, error: 'Resend API key not configured' }, { status: 500 })
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'atharvkothawale07@gmail.com',
      subject: `New Lead: ${name} from ${city}`,
      html: `
        <h2>New Lead from WealthMind Finserve</h2>
        <table border="1" cellpadding="8" style="border-collapse: collapse; border-color: #e2e8f0; width: 100%; max-width: 600px; font-family: sans-serif;">
          <tr style="background-color: #0A0F1E; color: #D4AF6A;">
            <th colspan="2" style="text-align: left; padding: 12px;">Lead Details</th>
          </tr>
          <tr><td style="width: 30%;"><b>Name:</b></td><td>${name || 'N/A'}</td></tr>
          <tr><td><b>Phone:</b></td><td>${phone || 'N/A'}</td></tr>
          <tr><td><b>Email:</b></td><td>${email || 'N/A'}</td></tr>
          <tr><td><b>City:</b></td><td>${city || 'N/A'}</td></tr>
          <tr><td><b>Goal:</b></td><td>${investment_goal || 'N/A'}</td></tr>
          <tr><td><b>Message:</b></td><td>${message || 'N/A'}</td></tr>
        </table>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Error sending email notification:', error)
    return NextResponse.json({ success: false, error: error.message || 'Failed to send notification' }, { status: 500 })
  }
}
