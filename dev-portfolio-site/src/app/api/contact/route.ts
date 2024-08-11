import { NextResponse, NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

// Handles POST requests to /api
export async function POST(request: NextRequest) {
  const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME as string;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD as string;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL as string;

  console.log("dealing with request");
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const subject = formData.get('subject') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // create transporter object
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: username,
      pass: password
    }
  });

  try {
    const mail = await transporter.sendMail({
      from: email,
      to: myEmail,
      replyTo: email,
      subject: `${subject} | ${name}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message:</p> 
        <p>${message}</p>
        <br>
        <p>Sent from <a href="https://maala-practicum-portfolio.vercel.app/">maala-practicum-portfolio.vercel.app</a></p>
      `,
    });

    return NextResponse.json({ message: "Success: email was sent" });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "COULD NOT SEND MESSAGE" }, { status: 500 });
  }
}
