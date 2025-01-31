import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      description: "Perfect for beginners",
      features: [
        "Real-time market data",
        "Basic charting tools",
        "Portfolio tracking",
        "Email support",
        "5 price alerts",
      ],
    },
    {
      name: "Pro",
      price: "$79",
      description: "For serious traders",
      features: [
        "Everything in Basic",
        "Advanced technical indicators",
        "AI market predictions",
        "Priority support",
        "Unlimited alerts",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      description: "For institutions",
      features: [
        "Everything in Pro",
        "Custom integrations",
        "Dedicated account manager",
        "API access",
        "Team collaboration",
      ],
    },
  ];

  return (
    <section
      className="py-10 px-8 md:py-10 lg:py-10 flex bg-white items-center justify-center bg-muted"
      id="pricing"
    >
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Choose Your Trading Plan
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
            Select the perfect plan for your trading needs. Upgrade or downgrade
            at any time.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col p-8 rounded-xl bg-background border ${
                plan.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {plan.popular && (
                <span className="w-fit text-xs font-semibold text-primary bg-primary/10 py-1 px-3 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="ml-2 text-muted-foreground">/month</span>
              </div>
              <p className="mt-2 text-muted-foreground">{plan.description}</p>
              <ul className="mt-8 space-y-4 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="mt-8"
                variant={plan.popular ? "default" : "outline"}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
