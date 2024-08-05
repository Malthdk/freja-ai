import { type NextRequest } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const { email, name, workplace, phone, message } = await request.json();

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "malte@holledig.dk",
      subject: `Freja.ai lead: ${name}`,
      html: `<h3>Name: ${name}</h3><h3>Email: ${email}</h3><h3>Workplace: ${workplace}</h3><h3>Phone: ${phone}</h3><h3>Message: ${message}</h3>`,
    });
    return new Response("Email sent", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to send email", { status: 500 });
  }
}
