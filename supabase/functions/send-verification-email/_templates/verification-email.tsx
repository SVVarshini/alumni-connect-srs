import React from 'npm:react@18.3.1';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22';

interface VerificationEmailProps {
  confirmationUrl: string;
  userEmail: string;
}

export const VerificationEmail = ({
  confirmationUrl,
  userEmail,
}: VerificationEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to Alumni Alliance - Verify your email</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Welcome to Alumni Alliance</Heading>
        <Text style={text}>
          Thank you for joining our alumni network! Please verify your email address to complete your registration.
        </Text>
        <Link
          href={confirmationUrl}
          target="_blank"
          style={{
            ...button,
            display: 'block',
            textAlign: 'center',
            marginBottom: '16px',
          }}
        >
          Verify Email Address
        </Link>
        <Text style={text}>
          Or copy and paste this link in your browser:
        </Text>
        <Text style={code}>{confirmationUrl}</Text>
        <Text style={footer}>
          If you didn't create an account with Alumni Alliance, you can safely ignore this email.
        </Text>
        <Text style={footer}>
          <strong>Alumni Alliance</strong> - Connecting alumni worldwide
        </Text>
      </Container>
    </Body>
  </Html>
);

export default VerificationEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
  maxWidth: '600px',
};

const h1 = {
  color: '#000000',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
};

const button = {
  backgroundColor: '#FFD700',
  borderRadius: '8px',
  color: '#000000',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px 24px',
  margin: '20px 0',
};

const text = {
  color: '#333333',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  fontSize: '14px',
  margin: '24px 0',
};

const code = {
  display: 'inline-block',
  padding: '16px 4.5%',
  width: '90.5%',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px',
  border: '1px solid #eee',
  color: '#333',
  fontSize: '12px',
  wordBreak: 'break-all' as const,
};

const footer = {
  color: '#898989',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '12px',
  marginBottom: '24px',
};