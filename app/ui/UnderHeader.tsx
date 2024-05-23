"use client";
import { useRouter } from "next/navigation";
export default function UnderHeader() {
  const router = useRouter();

  return (
    <div>
      <button type="button" onClick={() => router.push("/Nyheter")}>
        Nyheter
      </button>

      <button type="button" onClick={() => router.push("/Badleksaker")}>
        Badleksaker
      </button>

      <button type="button" onClick={() => router.push("/Handdukar")}>
        Handdukar
      </button>

      <button type="button" onClick={() => router.push("/Rea")}>
        Rea
      </button>
    </div>
  );
}
