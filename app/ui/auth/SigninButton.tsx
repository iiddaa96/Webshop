"use client";
import { signIn } from "next-auth/react";

export default function SignInButton() {
  const handleSignIn = async () => {
    try {
      await signIn("github", {
        callbackUrl: "http://localhost:5173/",
      });
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <button
      style={{
        color: "black",
        fontFamily: "Roboto, Arial, sans-serif",
        fontWeight: "bold",
        backgroundColor: "#F0E8D5",
        border: "none",
        cursor: "pointer",
      }}
      onClick={handleSignIn}
    >
      LOGGA IN
    </button>
  );
}
