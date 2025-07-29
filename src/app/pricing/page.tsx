import { Plans } from "@/components/pricing/plans";
import { RadialBlur } from "@/components/pricing/radial-blur";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Pricing - Founders",
  description: "Pricing",
};

export default function Pricing() {
  return (
    <div className="bg-card isolate flex h-full min-h-screen w-full flex-col">
      <RadialBlur />
      <Header />
      <div className="pt-20 p-8">
        <Plans />
      </div>
    </div>
  );
}
