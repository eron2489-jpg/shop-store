"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { signUpUser } from "@/lib/actions/user.actions";
import { useFormStatus } from "react-dom";

const SignUpForm = () => {
  const [data, action] = useActionState(signUpUser, {
    success: false,
    message: "",
  });

  const SignUpButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button className="w-full" disabled={pending}>
        {pending ? "Signing Up ..." : "Sign Up"}
      </Button>
    );
  };
  return (
    <form action={action}>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="text"
            required
            autoComplete="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="password"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="confirmPassword">ConfirmPassword</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            autoComplete="confirmPassword"
          />
        </div>
        <div className="flex flex-col gap-2">
          <SignUpButton />
        </div>
        {data && !data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}
        <div className="text-sm text-center text-muted-foreground">
          You have already an account?
          <Link href="/sign-in" className="link">
            Sign In
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
