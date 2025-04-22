import { Body, Head, Html, Preview, Text } from "@react-email/components";
import { EmailLayout } from "./EmailLayout";

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

const bodyStyle = {
  backgroundColor: "#f3f4f6",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
};

const containerStyle = {
  margin: "24px 0",
};

const rowStyle = {
  marginBottom: "16px",
};

const labelStyle = {
  color: "#374151",
  fontWeight: "600",
  width: "80px",
  display: "inline-block",
  marginTop: "0",
  marginBottom: "0",
};

const valueStyle = {
  color: "#1f2937",
  marginTop: "0",
  marginBottom: "0",
};

const messageContainerStyle = {
  marginTop: "24px",
};

const messageLabelStyle = {
  color: "#374151",
  fontWeight: "600",
  marginBottom: "8px",
  display: "block",
};

const messageBoxStyle = {
  backgroundColor: "#f9fafb",
  padding: "16px",
  borderRadius: "6px",
  color: "#1f2937",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

export function ContactFormEmail({
  name,
  email,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Novo contato do site Quero Imigrar</Preview>
      <Body style={bodyStyle}>
        <EmailLayout title="Novo contato do site Quero Imigrar">
          <div style={containerStyle}>
            <div style={rowStyle}>
              <Text style={labelStyle}>Nome:</Text>
              <Text style={valueStyle}>{name}</Text>
            </div>
            <div style={rowStyle}>
              <Text style={labelStyle}>Email:</Text>
              <Text style={valueStyle}>{email}</Text>
            </div>
            <div style={messageContainerStyle}>
              <Text style={messageLabelStyle}>Mensagem:</Text>
              <Text style={messageBoxStyle}>{message}</Text>
            </div>
          </div>
        </EmailLayout>
      </Body>
    </Html>
  );
}
