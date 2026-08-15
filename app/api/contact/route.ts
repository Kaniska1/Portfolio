import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      )
    }

    const resendKey = process.env.RESEND_API_KEY
    const contactTo = process.env.CONTACT_TO

    if (!resendKey || !contactTo) {
      console.error('Missing RESEND_API_KEY or CONTACT_TO')

      return NextResponse.json(
        { error: 'Contact service is not configured.' },
        { status: 500 }
      )
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Kaniska Portfolio <onboarding@resend.dev>',
        to: [contactTo],
        reply_to: email,
        subject: `Portfolio message from ${name}`,
        text: `
Name: ${name}
Email: ${email}

Message:
${message}
        `,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Resend error:', error)

      return NextResponse.json(
        { error: 'Failed to send message.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact API error:', error)

    return NextResponse.json(
      { error: 'Failed to send message.' },
      { status: 500 }
    )
  }
}