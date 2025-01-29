'use server'

import nodemailer from 'nodemailer'

export async function sendEmail(formData) {
  const data = Object.fromEntries(formData)
  
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: data.email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${data.firstName} ${data.lastName}`,
      html: `
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    })
    
    return {
      message: 'Thank you for your message! I will get back to you soon.',
      success: true,
    }
  } catch (error) {
    return {
      message: 'Failed to send message. Please try again.',
      success: false,
    }
  }
} 