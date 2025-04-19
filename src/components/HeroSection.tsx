
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, DollarSign, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-health-600 to-health-800 text-white py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTJoMnYyem0tMi0yaC0ydjJoMnYtMnptLTIgMGgtMnYyaDJ2LTJ6bS0yLTJoLTJ2MmgydjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium">
              Healthcare savings made simple
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Save on healthcare with
              <span className="text-health-100"> Health Discount Hub</span>
            </h1>
            <p className="text-lg md:text-xl text-health-100">
              Get exclusive discounts on doctor appointments, hospital visits, and medications for just $500 per year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-health-700 hover:bg-health-100">
                Become a Member
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-health-100 p-3 rounded-full">
                  <DollarSign className="h-6 w-6 text-health-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Average Savings</h3>
                  <p className="text-health-100">Our members save $1,200+ yearly</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-health-100 p-3 rounded-full">
                  <Award className="h-6 w-6 text-health-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Nationwide Network</h3>
                  <p className="text-health-100">Access to 15,000+ providers</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-health-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-health-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Instant Access</h3>
                  <p className="text-health-100">Start saving immediately after enrollment</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-health-400 to-health-500 rounded-2xl h-full w-full -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
