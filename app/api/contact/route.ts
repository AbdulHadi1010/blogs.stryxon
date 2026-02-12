import { NextResponse } from 'next/server'
import siteMetadata from '@/data/siteMetadata'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // In a production environment, you would integrate with:
    // - SendGrid, Resend, or similar email service
    // - Or use a form service like Formspree, Getform
    // For now, this endpoint accepts the data and returns success

    // Example integration with email service:
    // await sendEmail({
    //   to: siteMetadata.email,
    //   from: email,
    //   subject: `New OpenClaw Setup Request from ${name}`,
    //   html: `
    //     <h2>New Lead from OpenClaw Setup Page</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Company:</strong> ${company || 'N/A'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `
    // })

    console.log('New contact form submission:', { name, email, company, message })

    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
