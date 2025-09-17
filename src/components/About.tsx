import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Leaf, Trophy } from "lucide-react";

const About = () => {
  const stats = [
    { number: "2,500+", label: "Happy Customers" },
    { number: "1+", label: "Years of Experience" },
    { number: "99.8%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Customer Support" }
  ];

  const values = [
    {
      icon: Users,
      title: "Customer First",
      description: "Every decision we make is centered around providing the best experience for our customers."
    },
    {
      icon: Heart,
      title: "Care & Quality",
      description: "We treat every garment with the same care and attention we'd give our own clothes."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Using biodegradable detergents and energy-efficient processes to protect our environment."
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Committed to delivering exceptional results that exceed your expectations every time."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose{" "}
            <span className="bg-aqua-gradient bg-clip-text text-transparent">Kintosh Laundry</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With over a year of experience, we've built our reputation on trust, quality, 
            and exceptional customer service. Here's what makes us different.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="border-border/50 hover:shadow-soft transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-aqua-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-soft">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Our Story
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Founded in 2024, Kintosh Laundry began as a small business with a simple mission: 
              to provide the highest quality laundry services while making life easier for our customers. 
              Today, we're proud to serve thousands of comrades and businesses across the city.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to personal service and 
              attention to detail remains unchanged.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;