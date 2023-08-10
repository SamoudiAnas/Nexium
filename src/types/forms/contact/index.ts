import { z } from "zod";

const ContactFormSchema = z.object({
  firstname: z.string().trim().min(3, "First name is required"),
  lastname: z.string().trim().min(3, "First name is required"),
  email: z.string().email("Email is invalid"),
  subject: z.string().trim().min(10, "Subject is required"),
  message: z.string().trim().min(20, "Subject is required"),
});

type ContactForm = z.infer<typeof ContactFormSchema>;

export { ContactFormSchema, type ContactForm };
