import { z } from "zod";

const LoginFormSchema = z.object({
  email: z.string().email("Email is invalid"),
  password: z.string().trim().min(8, "Password is required"),
});

type LoginForm = z.infer<typeof LoginFormSchema>;

export { LoginFormSchema, type LoginForm };
