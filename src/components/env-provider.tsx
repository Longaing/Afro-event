"use client";

import { useEffect } from "react";

export function EnvProvider() {
  useEffect(() => {
    // Définir la variable d'environnement côté client
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).NEXT_PUBLIC_APP_REDIRECT_URL = "https://longaing.github.io/Afro-event";
    }
  }, []);

  return null;
} 