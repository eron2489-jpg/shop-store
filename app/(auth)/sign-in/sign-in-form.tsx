"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { signInUser } from "@/lib/actions/user.actions";
import { signInDefaultValues } from "@/lib/constants";
import { useFormStatus } from "react-dom";

const SignInForm = () => {
  const [data, action] = useActionState(signInUser, {
    success: false,
    message: "",
  });

  const SignInButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button className="w-full" disabled={pending}>
        {pending ? "Signing In ..." : "Sign In"}
      </Button>
    );
  };
  return (
    <form action={action}>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="text"
            autoComplete="email"
            defaultValue={signInDefaultValues.email}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="password"
            defaultValue={signInDefaultValues.password}
          />
        </div>
        <div>
          <SignInButton />
        </div>
        {data && !data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}
        <div className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="link">
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
