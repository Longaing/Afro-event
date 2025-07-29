"use client";

import { useEffect } from "react";
import { toast } from "sonner";

const redirectUrl = process.env.NEXT_PUBLIC_APP_REDIRECT_URL || "https://longaing.github.io/Afro-event";

export function getMobileRedirectUrl(transactionId: string): string {
  return `${redirectUrl}?transactionId=${transactionId}`;
}

export function useRedirectWarning() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isLocalhost = ["localhost", "127.0.0.1"].includes(window.location.hostname);
    const redirectUrl = process.env.NEXT_PUBLIC_APP_REDIRECT_URL || "https://longaing.github.io/Afro-event";

    if (!isLocalhost && !redirectUrl) {
      setTimeout(() => {
        toast.warning(
          "NEXT_PUBLIC_APP_REDIRECT_URL is not set. Please set it in your environment variables for proper app redirects.",
          { duration: 10000 },
        );
      }, 1000);
    }
  }, []);
}
