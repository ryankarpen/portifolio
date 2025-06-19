import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.KEY_RESEND)

export async function POST(req: Request){
    const body = await req.json()

    try{
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'ryankarpen2015@gmail.com',
            subject: 'Novo contato pelo site',
            html: `
                <h2>Novo contato recebido</h2>
                <p><strong>Nome:</strong> ${body.name}</p>
                <p><strong>Email:</strong> ${body.email}</p>
                <p><strong>Mensagem:</strong><br/>${body.message}</p>
    
            `,
        })

        return NextResponse.json({ success: true, data })
    } catch(error){
        console.error(error)
        return NextResponse.json({ success: false, error }, { status: 500 })
    }
}