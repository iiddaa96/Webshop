"use client";

import { signIn } from "next-auth/react";

export default function SignInButton() {
  return (
    <button
      style={{
        color: "black",
        fontFamily: "Roboto, Arial, sans-serif",
        fontWeight: "bold",
        backgroundColor: "#f3f9b2",
        border: "none",
        cursor: "pointer",
      }}
      onClick={() => signIn()}
    >
      SIGN IN
    </button>
  );
}
