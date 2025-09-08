import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import SignInForm from "./sign-in-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Sign In",
};

const SignInPage = async () => {
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
        <CardTitle className="text-center">Sign In</CardTitle>
        <CardDescription className="text-center">
          Sign in to your account
        </CardDescription>
        <CardContent className="space-y-4">
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
