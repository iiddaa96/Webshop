"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      style={{
        color: "black",
        fontFamily: "'Roboto', Arial, sans-serif",
        fontWeight: "bold",
        backgroundColor: "#c9d1d2",
        border: "2px solid #050a0e",
        borderRadius: "10px",
        padding: "6px 15px",
        cursor: "pointer",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s, transform 0.3s",
      }}
      onClick={() => signOut()}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#81B29A")} // Slightly darker pastel teal on hover
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#A8DADC")}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      Logga ut
    </button>
  );
}
