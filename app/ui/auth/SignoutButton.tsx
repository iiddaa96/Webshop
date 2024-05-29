"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
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
      onClick={() => signOut()}
    >
      LOGGA UT
    </button>
  );
}
