"use server";

import { connectToDatabase } from "@/lib/db";
import { Contact } from "@/models/Contact";
import { contactFormSchema, type ContactFormData } from "@/schemas/contact";

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate the data
    const validatedData = contactFormSchema.parse(data);

    // Connect to MongoDB
    await connectToDatabase();

    // Create and save the contact
    const contact = await Contact.create({
      name: validatedData.name,
      email: validatedData.email,
      message: validatedData.message,
    });

    return {
      success: true,
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        message: contact.message,
      },
    };
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to submit form",
    };
  }
}
