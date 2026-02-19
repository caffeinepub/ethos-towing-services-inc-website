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
      title: 'Vehicle Recovery & Jump Start',
      description: 'Expert extraction from ditches, mud, or difficult terrain. Professional recovery services with specialized equipment. Includes fast jump start assistance for dead batteries - available 24/7.',
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
                className="group relative bg-card rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/30 overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-300" />
                    <div className="relative w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-16 translate-x-16 group-hover:bg-primary/10 transition-colors" />
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Need immediate assistance? We're available 24/7
          </p>
          <a
            href="tel:559-944-8178"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-lg"
          >
            <Truck className="h-5 w-5" />
            Call 559-944-8178
          </a>
        </div>
      </div>
    </section>
  );
}
