import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-laundry.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional laundry service facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Fresh, Clean &{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Professional
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Experience premium laundry services with pickup and delivery. 
            We handle your clothes with care, so you can focus on what matters most.
          </p>

          {/* Benefits list */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in-up">
            {[
              "Free Pickup & Delivery",
              "24-Hour Turnaround",
              "Eco-Friendly Solutions",
              "Professional Care"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button size="lg" className="bg-hero-gradient shadow-medium hover:shadow-large transition-all duration-300 text-lg px-8 py-6">
              Schedule Pickup
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6">
              Learn More
            </Button>
          </div>

          {/* Trust indicator */}
          <p className="text-sm text-muted-foreground mt-8 animate-fade-in-up">
            Trusted by 2,500+ customers • 4.9/5 rating • Fully insured
          </p>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '-1s' }}></div>
    </section>
  );
};

export default Hero;