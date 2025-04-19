"use client";

import { Icon } from "@iconify/react";
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
        <div className="text-center p-4 bg-accent/10 text-accent rounded-md">
          <Icon icon="mdi:check-circle" className="w-8 h-8 mx-auto mb-2" />
          <p className="font-medium">Thank you for reaching out!</p>
          <p className="text-sm mt-1">
            We&apos;ll get back to you as soon as possible.
          </p>
          <button
            onClick={() => setFormState("idle")}
            className="mt-4 px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <Form.Root onSubmit={handleSubmit} className="space-y-4">
          <Form.Field name="name" className="space-y-2">
            <div className="flex items-baseline justify-between">
              <Form.Label className="text-sm font-medium">Name</Form.Label>
              <Form.Message
                match="valueMissing"
                className="text-xs text-red-500"
              >
                Please enter your name
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                type="text"
                required
                placeholder="Your full name"
              />
            </Form.Control>
          </Form.Field>

          <Form.Field name="email" className="space-y-2">
            <div className="flex items-baseline justify-between">
              <Form.Label className="text-sm font-medium">Email</Form.Label>
              <Form.Message
                match="valueMissing"
                className="text-xs text-red-500"
              >
                Please enter your email
              </Form.Message>
              <Form.Message
                match="typeMismatch"
                className="text-xs text-red-500"
              >
                Please enter a valid email
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                type="email"
                required
                placeholder="your.email@example.com"
              />
            </Form.Control>
          </Form.Field>

          <Form.Field name="message" className="space-y-2">
            <div className="flex items-baseline justify-between">
              <Form.Label className="text-sm font-medium">Message</Form.Label>
              <Form.Message
                match="valueMissing"
                className="text-xs text-red-500"
              >
                Please enter your message
              </Form.Message>
            </div>
            <Form.Control asChild>
              <textarea
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[120px]"
                required
                placeholder="Tell us about your immigration goals..."
              />
            </Form.Control>
          </Form.Field>

          <Form.Submit asChild>
            <button
              className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={formState === "submitting"}
            >
              {formState === "submitting" ? (
                <span className="flex items-center justify-center gap-2">
                  <Icon icon="mdi:loading" className="animate-spin" />
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </Form.Submit>

          {formState === "error" && (
            <p className="text-sm text-red-500 text-center">
              There was an error sending your message. Please try again.
            </p>
          )}
        </Form.Root>
      )}
    </div>
  );
}
