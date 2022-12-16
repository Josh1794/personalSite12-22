// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Get data submitted in request's body.
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.EMAIL_USER}`,
      pass: `${process.env.EMAIL_PASSWORD}`,
    },
  });

  try {
    const mailOption = await transporter.sendMail({
      from: `${email}`,
      to: `${process.env.EMAIL_USER}`,
      subject: `Contact form submission from ${name}`,
      html: `You got a message from
      Email : ${email}
      Name: ${name}
      Message: ${message}`,
    });
    console.log('Message Sent', mailOption.messageId);
  } catch (error) {
    console.log('ERROR: ', error);
  }

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', req.body);

  // Found the name.
  // Sends a HTTP success code
  res.status(200).redirect('/');
}
