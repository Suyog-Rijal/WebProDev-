import { z } from "zod";

export const QuoteFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z
        .string()
        .min(10, "Phone number must be at least 10 digits")
        .max(15, "Phone number must be at most 15 digits"),
    message: z.string().min(10, "Message is required"),
});

export type TQuoteFormSchema = z.infer<typeof QuoteFormSchema>;
