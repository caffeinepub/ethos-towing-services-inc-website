import { Phone, ArrowRight, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-secondary/98 to-secondary/95">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/generated/hero-background.dim_1920x1080.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/85 to-secondary/90" />
      
      {/* Geometric Accent Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary-foreground/10 backdrop-blur-sm rounded-full border border-secondary-foreground/20">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-secondary-foreground text-sm font-semibold">24/7 Emergency Service</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary-foreground/10 backdrop-blur-sm rounded-full border border-secondary-foreground/20">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-secondary-foreground text-sm font-semibold">Licensed & Insured</span>
            </div>
          </div>
          
          {/* Main Headline */}
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-secondary-foreground mb-6 leading-none">
              Professional Towing
              <span className="block mt-2 text-primary">When You Need It</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white mb-4 max-w-3xl mx-auto leading-relaxed font-medium">
              Fast, reliable towing and roadside assistance serving Fresno and the Central Valley
            </p>
            
            <p className="text-base text-white max-w-2xl mx-auto">
              Expert service • Modern equipment • Competitive rates
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg font-bold px-10 py-7 bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-glow transition-all rounded-xl group min-w-[240px]"
              onClick={scrollToContact}
            >
              Request Service
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg font-bold px-10 py-7 border-2 border-secondary-foreground/30 bg-secondary-foreground/5 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary transition-all rounded-xl backdrop-blur-sm min-w-[240px]"
              asChild
            >
              <a href="tel:559-944-8178" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call 559-944-8178
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
