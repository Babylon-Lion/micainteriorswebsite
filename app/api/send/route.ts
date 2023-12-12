// import { GithubAccessTokenEmail } from '../../../components/email-template';
// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';



// export async function GET() {
//     const resend = new Resend(process.env.RESEND_API_KEY);

//   try {
//     const { data } = await resend.emails.send({
//         from: 'info@micainteriors.com',
//         to: 'contact@micainteriors.com',
//         subject: 'Hello from Next Js',
//         react: GithubAccessTokenEmail({ username: 'zenorocha' })
//     });
//       return NextResponse.json({ data });
//     }
//   catch (error) {
//     return NextResponse.json({ error });
//   }
// }