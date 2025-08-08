"use server";

import { connectToDatabase } from "@/lib/db";
import { sendContactFormEmail, sendContactResponseEmail } from "@/lib/email";
import { Contact } from "@/models/Contact";
import { type ContactFormData, contactFormSchema } from "@/schemas/contact";

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
			message: validatedData.message.trim(),
		});

		// Send email to user
		const responseResult = await sendContactResponseEmail({
			name: validatedData.name,
			email: validatedData.email,
		});

		if (!responseResult.success) {
			console.error("Failed to send email response:", responseResult.error);
		}

		// Send email notification
		const emailResult = await sendContactFormEmail({
			name: validatedData.name,
			email: validatedData.email,
			message: validatedData.message.trim(),
		});

		if (!emailResult.success) {
			console.error("Failed to send email notification:", emailResult.error);
		}

		return {
			success: true,
			data: {
				id: contact._id.toString(),
				name: contact.name,
				email: contact.email,
				message: contact.message.trim(),
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
