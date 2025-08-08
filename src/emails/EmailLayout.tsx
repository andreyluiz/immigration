import { Container, Section } from "@react-email/components";

interface EmailLayoutProps {
	children: React.ReactNode;
	title: string;
}

const containerStyle = {
	maxWidth: "600px",
	margin: "0 auto",
	padding: "24px",
};

const cardStyle = {
	backgroundColor: "#ffffff",
	borderRadius: "8px",
	boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
	overflow: "hidden",
};

const headerStyle = {
	backgroundColor: "#2563eb",
	padding: "32px 24px",
};

const titleStyle = {
	color: "#ffffff",
	fontSize: "24px",
	fontWeight: "600",
	textAlign: "center" as const,
	margin: "0",
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
};

const contentStyle = {
	padding: "32px 24px",
};

export function EmailLayout({ children, title }: EmailLayoutProps) {
	return (
		<Container style={containerStyle}>
			<Section style={cardStyle}>
				<Section style={headerStyle}>
					<h1 style={titleStyle}>{title}</h1>
				</Section>
				<Section style={contentStyle}>{children}</Section>
			</Section>
		</Container>
	);
}
