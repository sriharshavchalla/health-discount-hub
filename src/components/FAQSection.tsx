
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does the membership cost?",
    answer: "Our membership costs $500 for a full year of benefits. This flat fee gives you access to all discounts across our network of healthcare providers."
  },
  {
    question: "How soon can I use my benefits after signing up?",
    answer: "You can start using your membership benefits immediately after your payment is processed. Your digital membership card will be emailed to you within minutes of completing registration."
  },
  {
    question: "Which healthcare providers accept Health Discount Hub?",
    answer: "We have partnerships with thousands of healthcare providers nationwide, including major hospital groups, clinic networks, pharmacies, and independent practitioners. You can search for participating providers on our member portal."
  },
  {
    question: "Is this health insurance?",
    answer: "No, Health Discount Hub is not health insurance. It is a discount program that provides pre-negotiated reduced rates at participating healthcare providers. We recommend maintaining your regular health insurance coverage."
  },
  {
    question: "Can I cancel my membership?",
    answer: "Yes, you can cancel your membership at any time. However, membership fees are non-refundable once the membership period has begun."
  },
  {
    question: "Can I add family members to my membership?",
    answer: "Yes! We offer family plans that allow you to extend benefits to your immediate family members for an additional fee. Contact our customer service for details."
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. If you don't see what you're looking for, feel free to contact us.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
