"use client";

import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { TextArea } from "@/components/ui/TextArea";
import * as Form from "@radix-ui/react-form";
import { useState } from "react";

export function ContactForm() {
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("submitting");

    // Form data extraction
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // In a real app, you would send this data to your API
    try {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
      setFormState("success");
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormState("error");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-lg bg-background shadow-sm p-6 border">
      <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>

      {formState === "success" ? (
        <Alert
          type="success"
          title="Thank you for reaching out!"
          message="We'll get back to you as soon as possible."
          action={{
            label: "Send Another Message",
            onClick: () => setFormState("idle"),
          }}
        />
      ) : (
        <Form.Root onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            label="Name"
            placeholder="Your full name"
            required
            formField
          />

          <Input
            name="email"
            label="Email"
            type="email"
            placeholder="your.email@example.com"
            required
            formField
          />

          <TextArea
            name="message"
            label="Message"
            placeholder="Tell us about your immigration goals..."
            required
            formField
          />

          <Form.Submit asChild>
            <Button
              type="submit"
              className="w-full"
              isLoading={formState === "submitting"}
              loadingText="Sending..."
            >
              Send Message
            </Button>
          </Form.Submit>

          {formState === "error" && (
            <Alert
              type="error"
              title="Error"
              message="There was an error sending your message. Please try again."
            />
          )}
        </Form.Root>
      )}
    </div>
  );
}
