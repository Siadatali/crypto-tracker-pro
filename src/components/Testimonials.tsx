import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, Tech Innovations",
      location: "New York, NY",
      rating: 5,
      comment: "Exceptional service and an incredible fleet. The Mercedes S-Class I rented was pristine, and the booking process was seamless. LuxeDrive exceeded all my expectations.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c4?w=150&h=150&fit=crop&crop=face",
      verified: true,
      carRented: "Mercedes-Benz S-Class",
      rentalDate: "March 2024"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Investment Banker",
      location: "San Francisco, CA",
      rating: 5,
      comment: "I've used many car rental services, but LuxeDrive is in a league of its own. The Porsche 911 was a dream to drive, and their concierge service made everything effortless.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      verified: true,
      carRented: "Porsche 911 Convertible",
      rentalDate: "February 2024"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Fashion Designer",
      location: "Miami, FL",
      rating: 5,
      comment: "Perfect for my business trip and client meetings. The BMW X7 was spacious, luxurious, and made a great impression. Will definitely use LuxeDrive again.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      verified: true,
      carRented: "BMW X7",
      rentalDate: "January 2024"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Real Estate Developer",
      location: "Los Angeles, CA",
      rating: 5,
      comment: "Outstanding experience from start to finish. The attention to detail and customer service is unmatched. LuxeDrive sets the gold standard for premium car rentals.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      verified: true,
      carRented: "Mercedes-Benz S-Class",
      rentalDate: "March 2024"
    },
    {
      id: 5,
      name: "Jennifer Walsh",
      role: "Marketing Director",
      location: "Chicago, IL",
      rating: 5,
      comment: "Incredible fleet and service. The booking was simple, the car was immaculate, and the entire experience was world-class. Highly recommended for anyone who appreciates luxury.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      verified: true,
      carRented: "BMW X7",
      rentalDate: "February 2024"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;
  const totalReviews = testimonials.length;

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-4 tracking-wider uppercase">
            Client Reviews
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center space-x-8 mt-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-primary fill-current" />
                ))}
              </div>
              <div className="text-3xl font-bold text-primary">{averageRating.toFixed(1)}</div>
              <div className="text-sm text-foreground/60">Average Rating</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{totalReviews}+</div>
              <div className="text-sm text-foreground/60">Happy Clients</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99%</div>
              <div className="text-sm text-foreground/60">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Main Testimonial */}
        <div className="relative">
          <Card className="card-premium max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Quote Section */}
                <div className="lg:col-span-2">
                  <Quote className="h-12 w-12 text-primary/30 mb-6" />
                  <blockquote className="text-xl md:text-2xl leading-relaxed mb-6 text-foreground/90">
                    "{testimonials[currentTestimonial].comment}"
                  </blockquote>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-current" />
                    ))}
                  </div>

                  {/* Rental Details */}
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>Vehicle: <span className="text-foreground">{testimonials[currentTestimonial].carRented}</span></div>
                    <div>Rental Date: <span className="text-foreground">{testimonials[currentTestimonial].rentalDate}</span></div>
                  </div>
                </div>

                {/* Author Section */}
                <div className="text-center lg:text-left">
                  <Avatar className="h-24 w-24 mx-auto lg:mx-0 mb-4 border-2 border-primary/20">
                    <AvatarImage src={testimonials[currentTestimonial].avatar} />
                    <AvatarFallback className="text-xl">
                      {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="mb-2">
                    <h4 className="text-lg font-semibold flex items-center justify-center lg:justify-start">
                      {testimonials[currentTestimonial].name}
                      {testimonials[currentTestimonial].verified && (
                        <div className="ml-2 h-5 w-5 bg-primary rounded-full flex items-center justify-center">
                          <svg className="h-3 w-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </h4>
                    <p className="text-primary font-medium">{testimonials[currentTestimonial].role}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].location}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 glass hover:bg-primary/20"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 glass hover:bg-primary/20"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-primary scale-125' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Additional Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="card-premium hover-scale cursor-pointer"
              onClick={() => goToTestimonial(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-current" />
                  ))}
                </div>
                
                <p className="text-sm text-foreground/80 line-clamp-3">
                  "{testimonial.comment}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;