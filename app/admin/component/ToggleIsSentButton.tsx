"use client";
import { isSentEndpoint } from "@/app/endpoints/order-endpoints";

export default function ToggleIsSentButton({ orderId }: { orderId: number }) {
  const toggleIsSent = () => {
    isSentEndpoint(orderId);
  };
  return <button onClick={toggleIsSent}>Toggle</button>;
}
