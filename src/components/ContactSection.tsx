import { Icon } from "@iconify/react";
import { useMessages, useTranslations } from "next-intl";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  const t = useTranslations("home");

  const messages = useMessages();

  const faq = messages.home.faq.questions as {
    question: string;
    answer: string;
  }[];

  return (
    <section id="contact" className="py-16 md:py-24 bg-background md:px-0 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-foreground/80">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon
                  icon="mdi:frequently-asked-questions"
                  className="text-primary"
                />
                {t("faq.title")}
              </h3>

              <div className="space-y-4">
                {faq.map((question) => (
                  <div key={question.question}>
                    <p className="font-medium">{question.question}</p>
                    <p className="text-sm text-foreground/70 mt-1">
                      {question.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex items-center gap-3">
                <Icon icon="mdi:email" className="w-6 h-6 text-primary" />
                <span>contact@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon icon="mdi:phone" className="w-6 h-6 text-primary" />
                <span>+55 11 99999-9999</span>
              </div>
            </div>
          </div>

          <div id="contact-form">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
