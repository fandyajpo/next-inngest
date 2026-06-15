"use client";

import { useTransition } from "react";
import { sendHello } from "@/actions/index";

export default function SendHelloButton() {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      await sendHello();
      alert("Event berhasil dikirim!");
    });
  };

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
    >
      {isPending ? "Sending..." : "Send Hello"}
    </button>
  );
}
