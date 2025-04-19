import { Icon } from "@iconify/react";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-foreground/80">
            Ready to start your European immigration journey? Contact us to
            schedule a free consultation with our experts.
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
                Frequently Asked Questions
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="font-medium">
                    How long does the immigration process typically take?
                  </p>
                  <p className="text-sm text-foreground/70 mt-1">
                    The timeline varies depending on the destination country and
                    visa type, but most clients complete their move within 6-12
                    months.
                  </p>
                </div>

                <div>
                  <p className="font-medium">
                    Do I need to speak the local language?
                  </p>
                  <p className="text-sm text-foreground/70 mt-1">
                    While helpful, it&apos;s not always required. We can guide
                    you through language requirements and provide resources for
                    learning.
                  </p>
                </div>

                <div>
                  <p className="font-medium">What are your service fees?</p>
                  <p className="text-sm text-foreground/70 mt-1">
                    Our fees vary based on the complexity of your case and
                    services needed. We provide a clear breakdown during your
                    free consultation.
                  </p>
                </div>
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

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
