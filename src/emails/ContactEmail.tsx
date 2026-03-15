import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Link,
  Row,
  Column,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  name?: string;
  phone: string;
  email: string;
  location?: string;
  programs?: string;
  otherInfo?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://edgrowth.info";

export const ContactEmail = ({
  name,
  phone,
  email,
  location,
  programs,
  otherInfo,
}: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>New Inquiry: {name || "Candidate"} - EdGrowth</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Text style={logo}>EdGrowth</Text>
        </Section>
        
        <Section style={content}>
          <Heading style={h1}>New Candidate Inquiry</Heading>
          <Text style={paragraph}>
            Hello Mr. Shekhar Singh,
          </Text>
          <Text style={paragraph}>
            You have received a new inquiry from the <b>EdGrowth</b> website. Here are the details:
          </Text>

          <Section style={infoContainer}>
            <Row style={infoRow}>
              <Column style={labelCol}>
                <Text style={label}>Name</Text>
              </Column>
              <Column style={valueCol}>
                <Text style={value}>{name || "N/A"}</Text>
              </Column>
            </Row>
            <Hr style={infoHr} />
            <Row style={infoRow}>
              <Column style={labelCol}>
                <Text style={label}>Phone</Text>
              </Column>
              <Column style={valueCol}>
                <Link href={`tel:${phone}`} style={valueLink}>{phone}</Link>
              </Column>
            </Row>
            <Hr style={infoHr} />
            <Row style={infoRow}>
              <Column style={labelCol}>
                <Text style={label}>Email</Text>
              </Column>
              <Column style={valueCol}>
                <Link href={`mailto:${email}`} style={valueLink}>{email}</Link>
              </Column>
            </Row>
            <Hr style={infoHr} />
            <Row style={infoRow}>
              <Column style={labelCol}>
                <Text style={label}>Location</Text>
              </Column>
              <Column style={valueCol}>
                <Text style={value}>{location || "N/A"}</Text>
              </Column>
            </Row>
            <Hr style={infoHr} />
            <Row style={infoRow}>
              <Column style={labelCol}>
                <Text style={label}>Program(s)</Text>
              </Column>
              <Column style={valueCol}>
                <Text style={value}>{programs || "N/A"}</Text>
              </Column>
            </Row>
          </Section>

          {otherInfo && (
            <>
              <Heading style={h2}>Additional Message</Heading>
              <Text style={messageBox}>
                {otherInfo}
              </Text>
            </>
          )}

          <Section style={buttonContainer}>
             <Link href={`mailto:${email}`} style={button}>
               Reply to Candidate
             </Link>
          </Section>
        </Section>

        <Section style={footer}>
          <Text style={footerText}>
            This email was sent from the contact form on <Link href="https://edgrowth.info" style={footerLink}>edgrowth.info</Link>
          </Text>
          <Text style={footerText}>
            &copy; {new Date().getFullYear()} EdGrowth. All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactEmail;

const main = {
  backgroundColor: "#f4f7f9",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "40px auto",
  width: "600px",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
};

const header = {
  backgroundColor: "#124E8D",
  padding: "32px 48px",
  textAlign: "center" as const,
};

const logo = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0",
  letterSpacing: "1px",
};

const content = {
  padding: "40px 48px",
};

const h1 = {
  color: "#1a1a1a",
  fontSize: "24px",
  fontWeight: "700",
  lineHeight: "32px",
  margin: "0 0 20px",
};

const h2 = {
  color: "#1a1a1a",
  fontSize: "18px",
  fontWeight: "600",
  margin: "32px 0 12px",
};

const paragraph = {
  color: "#4a4a4a",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "16px 0",
};

const infoContainer = {
  backgroundColor: "#f9fafb",
  borderRadius: "8px",
  padding: "12px",
  margin: "24px 0",
  border: "1px solid #e5e7eb",
};

const infoRow = {
  padding: "8px 12px",
};

const labelCol = {
  width: "140px",
};

const valueCol = {
  paddingLeft: "12px",
};

const label = {
  color: "#6b7280",
  fontSize: "13px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
  margin: "0",
};

const value = {
  color: "#111827",
  fontSize: "15px",
  fontWeight: "500",
  margin: "0",
};

const valueLink = {
  ...value,
  color: "#124E8D",
  textDecoration: "none",
};

const infoHr = {
  borderColor: "#e5e7eb",
  margin: "4px 12px",
};

const messageBox = {
  backgroundColor: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "20px",
  color: "#4a4a4a",
  fontSize: "15px",
  lineHeight: "24px",
  fontStyle: "italic",
};

const buttonContainer = {
  textAlign: "center" as const,
  marginTop: "32px",
};

const button = {
  backgroundColor: "#124E8D",
  borderRadius: "6px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "14px 28px",
  lineHeight: "100%",
};

const footer = {
  padding: "0 48px 40px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#9ca3af",
  fontSize: "12px",
  lineHeight: "20px",
  margin: "4px 0",
};

const footerLink = {
  color: "#124E8D",
  textDecoration: "none",
};
