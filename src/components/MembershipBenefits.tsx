
import { CircleDollarSign, Stethoscope, Pill, Building, Calendar, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    title: "Hospital Consultations",
    description: "Save up to 40% on consultation fees at partner hospitals.",
    icon: <Building className="h-10 w-10 text-health-600" />,
  },
  {
    title: "Doctor Appointments",
    description: "Discounted rates with specialists and general practitioners.",
    icon: <Stethoscope className="h-10 w-10 text-health-600" />,
  },
  {
    title: "Medications",
    description: "Up to 60% off on prescription and over-the-counter medications.",
    icon: <Pill className="h-10 w-10 text-health-600" />,
  },
  {
    title: "Lab Tests",
    description: "Significant savings on diagnostic and laboratory services.",
    icon: <FileText className="h-10 w-10 text-health-600" />,
  },
  {
    title: "Preventive Care",
    description: "Special rates on health check-ups and preventive screenings.",
    icon: <Calendar className="h-10 w-10 text-health-600" />,
  },
  {
    title: "Exclusive Membership Pricing",
    description: "Just $500 for a full year of savings across all services.",
    icon: <CircleDollarSign className="h-10 w-10 text-health-600" />,
  },
];

const MembershipBenefits = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Membership Benefits</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enjoy significant savings on a wide range of healthcare services with your annual membership.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-health-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipBenefits;
