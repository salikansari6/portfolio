import nodemailer from "nodemailer";

export default async function (req, res) {
  const { firstName, lastName, email, phone, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    const emailResponse = await transporter.sendMail({
      from: email,
      to: process.env.user,
      subject: `Message through portfolio site from ${firstName} ${lastName}`,
      html: `<p><strong>Email : ${email}<strong></p><br>
      <p><strong>Phone no : ${phone}<strong></p><br>
          <p>Message : ${message}</p>
          `,
    });
  } catch (err) {
    console.log(err);
  }

  res.status(200).send({
    message: "success",
  });
}
