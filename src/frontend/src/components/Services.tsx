import { Truck, Navigation, Wrench, Anchor, Square, Bike } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Truck,
      image: '/assets/generated/icon-emergency.dim_64x64.png',
      title: 'Emergency Towing',
      description: 'Rapid response for breakdowns and accidents. Our team arrives quickly to get you safely off the road and to your destination.',
      color: 'from-primary/20 to-primary/5'
    },
    {
      icon: Navigation,
      image: '/assets/generated/icon-longdistance.dim_64x64.png',
      title: 'Long-Distance Towing',
      description: 'Reliable long-haul service covering the entire California state. Safe, secure transport for your vehicle wherever you need to go.',
      color: 'from-accent/20 to-accent/5'
    },
    {
      icon: Wrench,
      image: '/assets/generated/icon-roadside.dim_64x64.png',
      title: 'Roadside Assistance',
      description: 'Jump starts, tire changes, lockout service, and fuel delivery. Quick solutions to get you back on the road fast.',
      color: 'from-primary/20 to-primary/5'
    },
    {
      icon: Anchor,
      image: '/assets/generated/icon-recovery.dim_64x64.png',
      title: 'Vehicle Recovery',
      description: 'Expert extraction from ditches, mud, or difficult terrain. Professional recovery services with specialized equipment.',
      color: 'from-accent/20 to-accent/5'
    },
    {
      icon: Square,
      image: '/assets/generated/icon-flatbed.dim_64x64.png',
      title: 'Flatbed Towing',
      description: 'Premium flatbed transport for luxury, classic, and low-clearance vehicles. Maximum protection during transit.',
      color: 'from-primary/20 to-primary/5'
    },
    {
      icon: Bike,
      image: '/assets/generated/icon-motorcycle.dim_64x64.png',
      title: 'Motorcycle Towing',
      description: 'Specialized motorcycle transport with proper equipment and techniques. Your bike handled with expert care.',
      color: 'from-accent/20 to-accent/5'
    }
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Complete Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            Comprehensive Towing Services
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground">
            From emergency towing to specialized transport, we provide professional solutions for every situation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-card border border-border hover:border-primary/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className="relative z-10 p-8">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 mb-5 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <IconComponent className="h-7 w-7 text-secondary" />
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
