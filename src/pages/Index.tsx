
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import MembershipBenefits from "@/components/MembershipBenefits";
import HowItWorks from "@/components/HowItWorks";
import SignUpForm from "@/components/SignUpForm";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main>
        <HeroSection />
        
        <div id="benefits">
          <MembershipBenefits />
        </div>
        
        <div id="how-it-works">
          <HowItWorks />
        </div>
        
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Health Discount Hub</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Register your interest today and a team member will contact you with more information.
              </p>
            </div>
            
            <SignUpForm />
          </div>
        </section>
        
        <div id="testimonials">
          <Testimonials />
        </div>
        
        <div id="faq">
          <FAQSection />
        </div>
        
        <CTASection />
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Index;
