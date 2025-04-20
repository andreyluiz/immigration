"use client";

import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { TextArea } from "@/components/ui/TextArea";
import * as Form from "@radix-ui/react-form";
import { useTranslations } from "next-intl";
import { useState } from "react";

export function ContactForm() {
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const t = useTranslations("home.contact");

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
      <h2 className="text-2xl font-bold mb-6 text-center">{t("title")}</h2>

      {formState === "success" ? (
        <Alert
          type="success"
          title={t("form.success_message.title")}
          message={t("form.success_message.description")}
          action={{
            label: t("form.success_message.action"),
            onClick: () => setFormState("idle"),
          }}
        />
      ) : (
        <Form.Root onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            label={t("form.name.label")}
            placeholder={t("form.name.placeholder")}
            required
            formField
          />

          <Input
            name="email"
            label={t("form.email.label")}
            type="email"
            placeholder={t("form.email.placeholder")}
            required
            formField
          />

          <TextArea
            name="message"
            label={t("form.message.label")}
            placeholder={t("form.message.placeholder")}
            required
            formField
          />

          <Form.Submit asChild>
            <Button
              type="submit"
              className="w-full"
              isLoading={formState === "submitting"}
              loadingText={t("form.sending")}
            >
              {t("form.submit")}
            </Button>
          </Form.Submit>

          {formState === "error" && (
            <Alert
              type="error"
              title={t("form.error_message.title")}
              message={t("form.error_message.description")}
            />
          )}
        </Form.Root>
      )}
    </div>
  );
}
