import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Clean Street", "Fresh City, FC 12345"],
      link: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(555) 123-4567", "Mon-Sat: 7AM-9PM"],
      link: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@kintoshlaundry.com", "We reply within 2 hours"],
      link: "Send Email"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 7AM-9PM", "Sat-Sun: 8AM-7PM"],
      link: "Schedule Pickup"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-fresh-gradient">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In{" "}
            <span className="bg-aqua-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to experience the difference? Contact us today to schedule your first pickup 
            or ask any questions about our services.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-aqua-gradient rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
                <button className="text-primary hover:text-primary-dark font-medium text-sm transition-colors">
                  {info.link}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-aqua-gradient border-0 shadow-large">
            <CardContent className="p-8 md:p-12 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust us with their laundry. 
                Schedule your first pickup today and experience the Kintosh difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg"
                >
                  Schedule Pickup Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg"
                >
                  Get Free Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Trusted by 2,500+ customers • Fully licensed & insured • 24/7 customer support
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <span className="text-xs font-medium">★★★★★ 4.9/5 on Google</span>
            <span className="text-xs font-medium">★★★★★ 4.8/5 on Yelp</span>
            <span className="text-xs font-medium">A+ Better Business Bureau</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;