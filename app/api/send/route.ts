import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { name, surname, email, message } = await req.json();

    try {
        const { data, error } = await resend.emails.send({
            from: `Gritifi <onboarding@resend.dev>`,
            to: ['gritifi.dsns@gmail.com'],
            subject: `Gritifi new message from ${name} ${surname} <${email}>`,
            html: `<p>${message}</p>`,
        })

        if (error) {
            return NextResponse.json({ success: false, error: 'Something went wrong while sending your message. Please try again later.' }, { status: 500 })
        }

        return NextResponse.json({ sucess: true, data })

    } catch (error) {
        console.error('Error occurred while sending contact data: ', error);
        return NextResponse.json({ success: false, error: 'Something went wrong while sending your message. Please try again later.' }, { status: 500 })
    }
}