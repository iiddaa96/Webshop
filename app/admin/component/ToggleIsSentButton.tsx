"use client";
import { isSentEndpoint } from "@/app/endpoints/order-endpoints";

export default function ToggleIsSentButton({ orderId }: { orderId: number }) {
  const toggleIsSent = () => {
    isSentEndpoint(orderId);
  };
  return (
    <button
      style={{
        backgroundColor: "#363635",
        color: "#FFFFFF",
        border: "none",
        borderRadius: "10px",
        padding: "10px 20px",
        fontSize: "12px",
        cursor: "pointer",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        transition: "background-color 0.3s ease",
      }}
      onClick={toggleIsSent}
    >
      Färdigbehandlad
    </button>
  );
}
