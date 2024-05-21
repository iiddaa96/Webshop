"use client";

import { signIn } from "next-auth/react";

export default function SignInWithGitHubButton() {
  return (
    <button
      style={{
        backgroundColor: "#F0E8D5", // Pastellgul färg
        color: "#5C5C5C", // Mjuk grå färg
        fontFamily: "Arial, sans-serif",
        fontSize: "16px",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
      onClick={() => signIn("github")}
    >
      Sign in with Github
    </button>
  );
}
