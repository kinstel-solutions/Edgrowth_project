"use server";

import { Resend } from "resend";
import { contactSchema, ContactFormData } from "@/lib/schemas/contact";
import ContactEmail from "@/emails/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactFormData) {
  // Validate the data on the server side
  const validatedData = contactSchema.safeParse(data);

  if (!validatedData.success) {
    return {
      success: false,
      error: "Invalid form data. Please check your inputs.",
    };
  }

  const { name, phone, email, location, programs, otherInfo } = validatedData.data;

  try {
    const { data: resData, error } = await resend.emails.send({
      from: "EdGrowth Inquiries <enquiry@edgrowth.info>", // Updated to a valid email format
      to: ["egpl172026@gmail.com", "shekhar@edgrowth.info", "kinstelsolutions@gmail.com"], // Destination email address
      subject: `New Inquiry: By ${name || "Anonymous"}, from EdGrowth website`,
      react: ContactEmail({
        name,
        phone,
        email,
        location,
        programs,
        otherInfo,
      }),
    });

    if (error) {
      console.error("Resend API error:", error);
      return {
        success: false,
        error: "Failed to send email. Please try again later.",
      };
    }

    return {
      success: true,
      message: "Thank you! Your request has been submitted successfully. We will get back to you soon.",
    };
  } catch (error) {
    console.error("Server Action error:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}
