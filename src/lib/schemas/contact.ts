import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().max(100, "Name is too long").optional(),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number too long")
    .regex(/^(\+?\d{1,3}[- ]?)?\d{10}$/, "Invalid phone number format. Use 10 digits or include country code."),
  email: z.string().email("Invalid email address").max(255, "Email is too long"),
  location: z.string().max(100, "Location is too long").optional(),
  programs: z.string().max(200, "Program list is too long").optional(),
  otherInfo: z.string().max(1000, "Message is too long").optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
