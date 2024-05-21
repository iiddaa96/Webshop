"use client";

import { signIn } from "next-auth/react";

export default function SignInButton() {
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
      onClick={() => signIn()}
    >
      SIGN IN
    </button>
  );
}
