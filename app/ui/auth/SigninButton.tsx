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
        color: "#ffffff", // White text color
        fontFamily: "'Roboto', Arial, sans-serif",
        fontWeight: "bold",
        backgroundColor: "#A8DADC", // Pastel teal background
        border: "2px solid #457B9D", // Darker teal border
        borderRadius: "12px", // Slightly rounded corners
        padding: "10px 20px",
        cursor: "pointer",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s, transform 0.3s",
      }}
      onClick={handleSignIn}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#81B29A")} // Slightly darker pastel teal on hover
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#A8DADC")}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      Logga in
    </button>
  );
}
