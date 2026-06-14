"use client";

import { FaPaperPlane } from "react-icons/fa";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

const ContactSection = styled.article`
  max-width: 500px;
  margin: auto;
  padding: 2rem 2rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: none;
  border-bottom: 2px solid #3b3f4c;
  background-color: transparent;
  color: #ffffff;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #4f46e5;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: none;
  border-bottom: 2px solid #3b3f4c;
  background-color: transparent;
  color: #ffffff;
  font-size: 1rem;
  resize: none;
  &:focus {
    outline: none;
    border-color: #4f46e5;
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4338ca;
  }

  &:disabled {
    background-color: #6b7280;
    cursor: not-allowed;
  }
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
`;

const SuccessMessage = styled.p`
  color: #4ade80;
  text-align: center;
  font-weight: bold;
  margin-top: 1rem;
`;

function Contact() {
  const [state, handleSubmit] = useForm("xanpzwvq");

  if (state.succeeded) {
    return (
      <SuccessMessage>
        ✅ Thanks! Your message has been sent successfully.
      </SuccessMessage>
    );
  }

  return (
    <ContactSection>
      <Title>Contact Form</Title>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="fullname" placeholder="Full name" required />
        <Input type="email" name="email" placeholder="Email address" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <TextArea name="message" rows={5} placeholder="Your Message" required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <Button type="submit" disabled={state.submitting}>
          <Icon>
            <FaPaperPlane />
          </Icon>
          <span>{state.submitting ? "Sending..." : "Send Message"}</span>
        </Button>
      </Form>
    </ContactSection>
  );
}

export default Contact;
