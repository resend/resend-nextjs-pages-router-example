import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await resend.sendEmail({
      from: 'onboarding@resend.dev',
      to: 'delivered@resend.dev',
      subject: "Hello world",
      html: "<strong>It works!</strong>",
      react: EmailTemplate({ firstName: "John" }),
    });

    res.status(200).json(data);
  }
  catch (error) {
    res.status(400).json(error);
  }
}
