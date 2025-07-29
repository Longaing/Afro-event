import type { Metadata } from "next";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Privacy Policy - Founders",
  description: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20 px-4">
        <h1 className="text-center text-4xl font-medium tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>
      </div>
    </div>
  );
}
