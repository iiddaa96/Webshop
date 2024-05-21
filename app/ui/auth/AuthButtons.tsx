import { auth } from "@/app/auth";
import SignInButton from "./SigninButton";
import SignOutButton from "./SignoutButton";

export default async function AuthButtons() {
  const session = await auth();
  if (session) return <SignOutButton></SignOutButton>;
  if (!session) return <SignInButton></SignInButton>;
}
