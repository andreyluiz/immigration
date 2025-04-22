import { ContactFormEmail } from "@/emails/ContactFormEmail";
import { ContactResponse } from "@/emails/ContactResponse";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactResponseEmail({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FORM_EMAIL) {
    throw new Error("Missing Resend API key or contact form email");
  }

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FORM_EMAIL,
      to: [email],
      subject: "Contato do site Quero Imigrar",
      react: ContactResponse({ name }),
    });

    if (error) {
      console.error("Error sending email:", error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
}

export async function sendContactFormEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FORM_EMAIL) {
    throw new Error("Missing Resend API key or contact form email");
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "contato@queroimigrar.com.br",
      to: ["contato@queroimigrar.com.br"],
      subject: "Novo contato do site Quero Imigrar",
      react: ContactFormEmail({ name, email, message }),
    });

    if (error) {
      console.error("Error sending email:", error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
}
