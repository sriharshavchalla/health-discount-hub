
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-health-700 to-health-800 text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Saving on Healthcare?</h2>
          <p className="text-xl text-health-100 mb-8">
            Join thousands of members who are already saving hundreds on their healthcare expenses. 
            For just $500 a year, unlock discounts across our nationwide network of providers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-health-700 hover:bg-health-100">
              Become a Member
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
          <p className="mt-6 text-health-200 text-sm">
            Have questions? Call us at 1-800-HEALTH-HUB (1-800-432-5848)
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
