"use client";

import { submitContactForm } from "@/actions/contact";
import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { TextArea } from "@/components/ui/TextArea";
import { contactFormSchema, type ContactFormData } from "@/schemas/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Form from "@radix-ui/react-form";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function ContactForm() {
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const t = useTranslations("home.contact");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormState("submitting");

    try {
      const result = await submitContactForm(data);

      if (result.success) {
        setFormState("success");
        reset();
      } else {
        setFormState("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormState("error");
    }
  };

  return (
    <div className="w-full mx-auto rounded-lg bg-background shadow-sm p-6 border">
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
        <Form.Root onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            {...register("name")}
            label={t("form.name.label")}
            placeholder={t("form.name.placeholder")}
            error={errors.name?.message}
            autoComplete="name"
            formField
          />

          <Input
            {...register("email")}
            label={t("form.email.label")}
            type="email"
            autoComplete="email"
            placeholder={t("form.email.placeholder")}
            error={errors.email?.message}
            formField
          />

          <TextArea
            {...register("message")}
            label={t("form.message.label")}
            placeholder={t("form.message.placeholder")}
            error={errors.message?.message}
            formField
            autoComplete="off"
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
