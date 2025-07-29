import type { Metadata } from "next";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Terms and Conditions - Founders",
  description: "Terms and Conditions",
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20 px-4">
        <h1 className="text-center text-4xl font-medium tracking-tight sm:text-5xl">
          Terms and Conditions
        </h1>
      </div>
    </div>
  );
}
