import { LineChart, BarChart2, PieChart, Bell, Lock, Zap } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <LineChart className="h-10 w-10" />,
      title: "Advanced Charting",
      description:
        "Professional-grade charts with over 100+ technical indicators and drawing tools.",
    },
    {
      icon: <BarChart2 className="h-10 w-10" />,
      title: "Real-time Analytics",
      description:
        "Live market data and instant analysis to help you make informed decisions.",
    },
    {
      icon: <PieChart className="h-10 w-10" />,
      title: "Portfolio Management",
      description:
        "Track and manage your investments with our comprehensive portfolio tools.",
    },
    {
      icon: <Bell className="h-10 w-10" />,
      title: "Smart Alerts",
      description:
        "Get notified about market movements and trading opportunities instantly.",
    },
    {
      icon: <Lock className="h-10 w-10" />,
      title: "Bank-grade Security",
      description:
        "Your data is protected with enterprise-level security and encryption.",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "AI Predictions",
      description:
        "Machine learning powered insights to predict market trends.",
    },
  ];

  return (
    <section className="py-10 flex items-center justify-center bg-white md:py-10 lg:py-10 bg-muted">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Powerful Features for Smart Trading
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Everything you need to analyze, track, and succeed in the stock
            market
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-background border hover:shadow-lg transition-shadow"
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
