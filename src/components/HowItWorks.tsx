
import { ClipboardList, CreditCard, Smile } from "lucide-react";

const steps = [
  {
    title: "Sign Up",
    description: "Complete our simple registration form and choose your membership plan.",
    icon: <ClipboardList className="h-10 w-10 text-white" />,
  },
  {
    title: "Pay Membership Fee",
    description: "Make a secure payment of $500 for your annual membership.",
    icon: <CreditCard className="h-10 w-10 text-white" />,
  },
  {
    title: "Start Saving",
    description: "Immediately access discounts at participating healthcare providers.",
    icon: <Smile className="h-10 w-10 text-white" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting started with Health Discount Hub is quick and easy. Follow these simple steps:
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-health-500 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-health-600 rounded-full p-6 mb-6 w-24 h-24 flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
