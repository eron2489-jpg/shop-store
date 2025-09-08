import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SignUpForm from "./sign-up-form";

export const metadata = {
  title: "Sign Up",
};

const SignUpPage = async () => {
  const session = await auth();

  if (session) {
    return redirect("/");
  }
  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="flex justify-center">
          <Link href="/" className="space-y-4">
            <Image
              src="/images/logo.svg"
              alt="logo image"
              width={100}
              height={100}
            />
          </Link>
        </CardHeader>
        <CardTitle className="text-center">Create Account</CardTitle>
        <CardDescription className="text-center">
          Enter your informations below to sign up
        </CardDescription>
        <CardContent className="space-y-4">
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
