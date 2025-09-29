import React from "react";
import {
  Twitter,
  Github,
  Linkedin,
  Mail,
  Bitcoin,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CryptoFooter = () => {
  const footerLinks = {
    Platform: [
      { name: "Markets", href: "#markets" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Analytics", href: "#analytics" },
      { name: "News", href: "#news" },
    ],
    Tools: [
      { name: "Price Alerts", href: "#alerts" },
      { name: "Trading View", href: "#trading" },
      { name: "API Access", href: "#api" },
      { name: "Mobile App", href: "#mobile" },
    ],
    Resources: [
      { name: "Help Center", href: "#help" },
      { name: "Documentation", href: "#docs" },
      { name: "Blog", href: "#blog" },
      { name: "Community", href: "#community" },
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
    ],
  };

  const features = [
    {
      icon: Bitcoin,
      title: "Real-time Data",
      desc: "Live cryptocurrency prices and market data",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      desc: "Enterprise-grade security and uptime",
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      desc: "Professional trading tools and insights",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      desc: "Optimized for speed and performance",
    },
  ];

  return (
    <footer className="relative bg-gradient-dark border-t border-border/50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-primary rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-success rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Features Section */}
        <div className="py-16 border-b border-border/50">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-card rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gradient">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-16 border-b border-border/50">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 animate-fade-in">
              <span className="text-gradient">Stay Updated</span>
            </h3>
            <p
              className="text-lg text-muted-foreground mb-8 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Get the latest cryptocurrency news, market insights, and exclusive
              updates delivered to your inbox.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-card/50 border-border/50 focus:bg-card transition-all duration-300"
              />
              <Button className="morph-btn whitespace-nowrap">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-1 animate-slide-in-left">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">
                    ₿
                  </span>
                </div>
                <span className="text-2xl font-bold text-gradient">
                  CryptoTracker Pro
                </span>
              </div>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                The most advanced cryptocurrency tracking platform for
                professional traders and investors. Built with cutting-edge
                technology for real-time market analysis.
              </p>
              <div className="flex space-x-3">
                <Button variant="outline" size="icon" className="hover-rotate">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover-rotate">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover-rotate">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover-rotate">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(
              ([category, links], categoryIndex) => (
                <div
                  key={category}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + categoryIndex * 0.1}s` }}
                >
                  <h4 className="font-semibold text-foreground mb-4">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm link-animated"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0 animate-fade-in">
              © 2024 CryptoTracker Pro. All rights reserved. Built with React by
              Siadat Ali.
            </div>
            <div
              className="flex items-center space-x-6 text-sm animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <a
                href="#privacy"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 link-animated"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 link-animated"
              >
                Terms of Service
              </a>
              <a
                href="#cookies"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 link-animated"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CryptoFooter;
