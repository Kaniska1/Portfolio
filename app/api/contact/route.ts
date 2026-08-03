import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, message } = body ?? {}

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Please complete all fields.' }, { status: 400 })
  }

  // Replace this demo handler with Resend, Nodemailer, Formspree, or your preferred service.
  // Keeping the API route prevents the interface from breaking while you configure delivery.
  console.log('Portfolio contact submission:', { name, email, message })

  return NextResponse.json({ success: true })
}
