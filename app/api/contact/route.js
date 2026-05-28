import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const data = await request.json()

    await resend.emails.send({
      from: 'Wilson Property Assist <onboarding@resend.dev>',
      to: 'WPA@wilsonpropertyassist.co.uk',
      subject: `New ${data.formType} enquiry`,
      html: `
        <h2>New Wilson Property Assist Enquiry</h2>

        <p><strong>Form Type:</strong> ${data.formType}</p>
        <p><strong>Name:</strong> ${data.name || ''}</p>
        <p><strong>Email:</strong> ${data.email || ''}</p>
        <p><strong>Phone:</strong> ${data.phone || ''}</p>
        <p><strong>Message:</strong> ${data.message || ''}</p>

        <hr />

        <h3>Property Details</h3>
        <pre>${JSON.stringify(data.properties || [], null, 2)}</pre>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}