"use client";

import { PlanSelect, plans } from "@/components/pricing/plan-select";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const features = [
  "Access to all event activities and sessions",
  "Networking opportunities with industry experts",
  "Exclusive content and resources",
  "Certificate of participation",
];

export function Plans() {
  const [selectedPriceId, setSelectedPriceId] = useState(plans[0].priceId);

  return (
    <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center">
      <h1 className="mt-8 mb-4 text-3xl font-bold md:text-center md:text-4xl">Choose Your Event Experience</h1>
      <p className="text-muted-foreground mb-8 text-center text-lg">Select the perfect ticket tier for your needs</p>
      <ul className="mt-4 mb-8 w-full space-y-3 md:mx-auto md:max-w-2xl">
        {features.map((feature, index) => (
          <li key={index} className="text-foreground/60 flex items-center text-base">
            <div className="bg-success mr-2 grid place-items-center rounded-full p-0.5">
              <CheckIcon className="size-4 p-0.5 text-white" />
            </div>
            {feature}
          </li>
        ))}
      </ul>
      <PlanSelect value={selectedPriceId} onChange={setSelectedPriceId} />
      <Button className="mb-8 w-full max-w-md" size="lg" asChild>
        <Link href={`/checkout?price_id=${selectedPriceId}`}>Get Your Ticket</Link>
      </Button>
      <div className="text-muted-foreground flex justify-center gap-8 text-sm underline">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-and-conditions">Terms and Conditions</Link>
        <Link href="/refund-policy">Refund Policy</Link>
      </div>
    </div>
  );
}
