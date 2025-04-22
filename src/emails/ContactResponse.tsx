import { Body, Head, Html, Preview, Text } from "@react-email/components";
import { EmailLayout } from "./EmailLayout";

interface ContactResponseProps {
  name: string;
}

const bodyStyle = {
  backgroundColor: "#f3f4f6",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
};

const containerStyle = {
  margin: "24px 0",
};

const greetingStyle = {
  fontSize: "24px",
  fontWeight: "600",
  color: "#1f2937",
  marginBottom: "24px",
};

const paragraphStyle = {
  color: "#4b5563",
  fontSize: "16px",
  lineHeight: "1.6",
  marginBottom: "16px",
};

const signatureContainerStyle = {
  borderTop: "1px solid #e5e7eb",
  marginTop: "32px",
  paddingTop: "24px",
};

const signatureStyle = {
  color: "#4b5563",
  marginBottom: "8px",
};

const companyNameStyle = {
  color: "#2563eb",
  fontWeight: "600",
};

export const ContactResponse = ({ name }: ContactResponseProps) => {
  return (
    <Html>
      <Head />
      <Preview>Obrigado por entrar em contato!</Preview>
      <Body style={bodyStyle}>
        <EmailLayout title="Obrigado por entrar em contato!">
          <div style={containerStyle}>
            <Text style={greetingStyle}>Olá {name},</Text>

            <Text style={paragraphStyle}>
              Muito obrigado por entrar em contato conosco! Recebemos sua
              mensagem e estamos muito felizes pelo seu interesse em nosso
              serviço de mentoria para imigração europeia.
            </Text>

            <Text style={paragraphStyle}>
              Nossa equipe está analisando sua mensagem com cuidado e entraremos
              em contato o mais breve possível para discutir como podemos ajudar
              você a alcançar seu sonho de imigrar para a Europa.
            </Text>

            <Text style={paragraphStyle}>
              Enquanto isso, fique à vontade para nos seguir nas redes sociais
              para ficar por dentro das últimas novidades e dicas sobre
              imigração.
            </Text>

            <div style={signatureContainerStyle}>
              <Text style={signatureStyle}>
                Atenciosamente,
                <br />
                <span style={companyNameStyle}>Equipe da Quero Imigrar</span>
              </Text>
            </div>
          </div>
        </EmailLayout>
      </Body>
    </Html>
  );
};
