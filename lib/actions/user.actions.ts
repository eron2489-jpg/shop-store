"use server";

import { signIn, signOut } from "@/auth";
import { signInFormSchema, signUpFormSchema } from "../validators";
import { hash } from "bcrypt-ts-edge";
import { prisma } from "@/db/prisma";
import { isRedirectError } from "next/dist/client/components/redirect-error";
export async function signInUser(prevState: unknown, formData: FormData) {
  try {
    console.log(">> form data ", formData);
    const user = signInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    console.log(">> user", user);

    await signIn("credentials", user);

    return { success: true, message: "Signed in successfully ! " };
  } catch {
    return { success: false, message: "Invalid email or password ! " };
  }
}
export async function signOutUser() {
  await signOut();
}

export async function signUpUser(prevState: unknown, formData: FormData) {
  try {
    const user = signUpFormSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });

    const hashedPassword = await hash(user.password, 10);

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
      },
    });

    await signIn("credentials", {
      email: user.email,
      password: user.password,
    });
    return { success: true, message: "User registered successfully ! " };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: "Invalid credentials ! " };
  }
}
