"use client";

import { signIn } from "next-auth/react";

export default function SignInWithGitHubButton() {
  return <button onClick={() => signIn("github")}>Sign in with Github</button>;
}
