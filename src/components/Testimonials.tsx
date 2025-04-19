
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Member since 2022",
    content: "I saved over $1,500 in the first year of my membership. The discounts on my regular medications alone paid for the membership fee.",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Member since 2021",
    content: "When I needed an unexpected surgery, Health Discount Hub saved me thousands of dollars on hospital fees. Best investment I've made.",
    avatar: "MC",
  },
  {
    name: "Elena Rodriguez",
    role: "Member since 2023",
    content: "As someone who regularly visits specialists, this membership has been invaluable. Easy to use and the savings are substantial.",
    avatar: "ER",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our members have experienced.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-health-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarFallback className="bg-health-200 text-health-700">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
