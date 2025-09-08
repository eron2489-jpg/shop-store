import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

// // destructured mode !
// import sampleData from "@/db/sample-data";

// // afficher products json :
// console.log(sampleData.products);
// console.log(sampleData.users);

export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  slug: z.string().min(3, "Slug must be at least 3 characters long"),
  category: z.string().min(3, "Category must be at least 3 characters long"),
  images: z.array(z.string()).min(1, "Product must have at least one image"),
  brand: z.string().min(3, "brand must be at least 3 characters long"),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters long"),
  stock: z.coerce.number(),
  price: z.string().refine((value) => {
    /^\d+\.\d{2} $/.test(formatNumberWithDecimal(Number(value)));
  }),
  rating: z.string(),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
});
//
// regex
// if(^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$.test('')  )

export const signInFormSchema = z.object({
  email: z.string().email(" Invalid email address"),
  password: z.string().min(6, "Password must be at lease 6 characters "),
});

export const signUpFormSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at lease 6 characters "),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at lease 6 characters "),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"],
  });
