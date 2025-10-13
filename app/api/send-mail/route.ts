import { NextRequest } from "next/server"
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"

export async function POST(req: NextRequest) {
  const { email: user_email, name: user_name, phone: user_phone } = await req.json()

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.freesmtpservers.com", // https://www.wpoven.com/tools/free-smtp-server-for-testing
      // port: 587,
      // port: 465,
      port: 25,
      secure: false,
      auth: {
        // type: "login",
        user: "",
        pass: "",
      },
    })

    const mailOptions: Mail.Options = {
      from: "",
      to: "test@test.test",
      subject: "Testing message from ADS Plast",
      text: `Hello, this is a test message.\n\n Name: ${user_name}\n Phone: ${user_phone}\n Email: ${user_email}`,
    }

    const res = await transporter.sendMail(mailOptions)

    return Response.json({
      ok: true,
      statusCode: parseInt(res.response),
      message: "Email sent successfully",
    })
  } catch (error) {
    return Response.error()
  }
}
