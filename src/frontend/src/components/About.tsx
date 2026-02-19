import { Users, Clock, Shield, Award } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Users,
      image: '/assets/generated/icon-experience.dim_64x64.png',
      title: 'Experienced Team',
      description: 'Decades of combined expertise in professional towing and vehicle recovery services.'
    },
    {
      icon: Clock,
      image: '/assets/generated/icon-247.dim_64x64.png',
      title: '24/7 Availability',
      description: 'Round-the-clock emergency response whenever and wherever you need assistance.'
    },
    {
      icon: Shield,
      image: '/assets/generated/icon-licensed.dim_64x64.png',
      title: 'Licensed & Insured',
      description: 'Fully licensed, bonded, and insured for your complete peace of mind.'
    },
    {
      icon: Award,
      image: '/assets/generated/icon-professional.dim_64x64.png',
      title: 'Professional Service',
      description: 'Commitment to excellence with every tow, treating your vehicle with care.'
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, oklch(var(--foreground)) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Why Choose Ethos</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            Built on Trust & Excellence
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Ethos Towing Services brings professional expertise and unwavering reliability to every job. 
            Our experienced team is dedicated to providing fast, safe, and courteous service throughout Fresno and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-card border-2 border-border hover:border-primary/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-5 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
