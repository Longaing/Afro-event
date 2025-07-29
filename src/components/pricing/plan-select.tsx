"use client";

import {
  Choicebox,
  ChoiceboxItem,
  ChoiceboxItemContent,
  ChoiceboxItemHeader,
  ChoiceboxItemIndicator,
  ChoiceboxItemSubtitle,
  ChoiceboxItemTitle,
} from "@/components/ui/choicebox";

export const plans = [
  {
    priceId: "basic",
    name: "Basic",
    price: "20€",
    description: "Access to the event and activities",
    features: ["Event access", "All activities included"],
  },
  {
    priceId: "complete",
    name: "Complete",
    price: "100€",
    description: "All in Basic + access to private conferences",
    features: ["Event access", "All activities included", "Private conferences"],
    tag: "Most Popular",
  },
  {
    priceId: "vip",
    name: "VIP",
    price: "250€",
    description: "All in Complete + 1:1 discussion with mentors",
    features: ["Event access", "All activities included", "Private conferences", "1:1 mentor sessions"],
    tag: "Premium",
  },
];

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function PlanSelect({ value, onChange }: Props) {
  return (
    <>
      <Choicebox className="mb-6 grid w-full grid-cols-1 md:grid-cols-3 justify-center gap-4" value={value} onValueChange={onChange}>
        {plans.map((plan) => (
          <ChoiceboxItem
            value={plan.priceId}
            key={plan.priceId}
            className="bg-card relative flex flex-col items-center rounded-lg px-6 py-8"
          >
            {plan.tag && (
              <span className="bg-accent border-accent-foreground absolute -top-4 left-0 rounded-full border-2 px-3 py-1 text-xs font-semibold text-white md:left-1/2 md:-translate-x-1/2">
                {plan.tag}
              </span>
            )}
            <ChoiceboxItemHeader className="w-full text-center">
              <ChoiceboxItemTitle className="text-xl font-bold">{plan.name}</ChoiceboxItemTitle>
              <ChoiceboxItemSubtitle className="text-3xl font-bold text-primary mt-2">{plan.price}</ChoiceboxItemSubtitle>
              <p className="text-muted-foreground mt-2 text-sm">{plan.description}</p>
            </ChoiceboxItemHeader>
            <ChoiceboxItemContent className="w-full mt-6">
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="bg-success mr-2 grid place-items-center rounded-full p-0.5">
                      <svg className="size-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <ChoiceboxItemIndicator className="mt-6" />
            </ChoiceboxItemContent>
          </ChoiceboxItem>
        ))}
      </Choicebox>
    </>
  );
}
