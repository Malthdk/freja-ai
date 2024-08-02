import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const { email, name, workplace, phone, message } = await request.json();

  const resend = new Resend(process.env.RESEND_API_KEY);

  console.log("Sending email to Resend");
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "toke@letsgrow.sale",
    subject: `Freja.ai lead: ${name}`,
    html: `<h3>Name: ${name}</h3><h3>Email: ${email}</h3><h3>Workplace: ${workplace}</h3><h3>Phone: ${phone}</h3><h3>Message: ${message}</h3>`,
  });
  console.log("Email sent to Resend");
  return NextResponse.json("Hello from API!");
}
