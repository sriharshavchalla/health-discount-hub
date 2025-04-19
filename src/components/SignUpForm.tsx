
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const SignUpForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Interest registered!",
        description: "Thank you for your interest in Health Discount Hub. We'll contact you soon with more information.",
        duration: 5000,
      });
      setFormData({ fullName: "", email: "", phone: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto border-health-200 shadow-lg">
      <CardHeader className="bg-health-600 text-white rounded-t-lg">
        <CardTitle className="text-2xl">Register Your Interest</CardTitle>
        <CardDescription className="text-health-100">
          Join our healthcare savings program today
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <Button
            type="submit"
            className="w-full mt-6 bg-health-600 hover:bg-health-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Get Membership Information"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col text-center text-sm text-gray-500">
        <p>By submitting, you agree to be contacted about our membership.</p>
      </CardFooter>
    </Card>
  );
};

export default SignUpForm;
