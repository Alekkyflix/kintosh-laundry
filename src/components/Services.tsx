import { Card, CardContent } from "@/components/ui/card";
import { Shirt, Shield, Truck, Clock, Droplets, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shirt,
      title: "Wash & Fold",
      description: "Professional washing, drying, and folding service for everyday clothing and linens.",
      features: ["Gentle detergents", "Proper sorting", "Perfect folding"]
    },
    {
      icon: Shield,
      title: "Dry Cleaning",
      description: "Expert dry cleaning for delicate fabrics, suits, dresses, and specialty items.",
      features: ["Stain removal", "Fabric protection", "Professional pressing"]
    },
    {
      icon: Truck,
      title: "Pickup & Delivery",
      description: "Convenient pickup and delivery service right to your doorstep.",
      features: ["Free pickup", "Scheduled delivery", "Real-time tracking"]
    },
    {
      icon: Clock,
      title: "Express Service",
      description: "Same-day and next-day service available for urgent cleaning needs.",
      features: ["24-hour turnaround", "Rush orders", "Priority handling"]
    },
    {
      icon: Droplets,
      title: "Stain Removal",
      description: "Advanced stain removal techniques for even the toughest stains.",
      features: ["Pre-treatment", "Specialized solutions", "Guaranteed results"]
    },
    {
      icon: Award,
      title: "Premium Care",
      description: "Luxury service for high-end garments and delicate items.",
      features: ["Hand finishing", "Premium packaging", "Special attention"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-fresh-gradient">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Professional{" "}
            <span className="bg-aqua-gradient bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From everyday wash and fold to specialized dry cleaning, we provide comprehensive 
            laundry solutions tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-aqua-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Need a custom solution? We're here to help.
          </p>
          <button className="bg-aqua-gradient text-white px-8 py-3 rounded-lg font-medium shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;