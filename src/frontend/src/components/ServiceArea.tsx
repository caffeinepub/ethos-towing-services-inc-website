import { MapPin, Navigation, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ServiceArea() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, oklch(var(--foreground)) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-bold text-sm uppercase tracking-wider">Service Coverage</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Serving Fresno & Beyond
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Local expertise with extended reach for all your towing and recovery needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Coverage Information */}
            <div className="space-y-6 order-2 lg:order-1">
              {/* Primary Service Area */}
              <div className="group relative bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="absolute top-4 right-4 w-12 h-12 bg-primary/20 rounded-full blur-xl" />
                
                <div className="flex items-start gap-5 relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-xl shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                      Primary Service Area
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                      Fresno, California and all surrounding communities in the Central Valley
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>Fast local response times</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Extended Coverage */}
              <div className="group relative bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="absolute top-4 right-4 w-12 h-12 bg-accent/20 rounded-full blur-xl" />
                
                <div className="flex items-start gap-5 relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-xl shrink-0 group-hover:scale-110 transition-transform">
                    <Navigation className="h-8 w-8 text-accent" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                      Extended Coverage
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                      Long-haul towing services available throughout the entire California state for special requests
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Statewide service available</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border border-border rounded-2xl p-8 text-center">
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  Not Sure If We Cover Your Area?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Give us a call and we'll let you know if we can help. We're always happy to discuss your specific needs.
                </p>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg hover:shadow-xl transition-all group"
                  asChild
                >
                  <a href="tel:559-944-8178" className="flex items-center gap-2">
                    <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                    <span>Call 559-944-8178</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Map */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-border group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                <img 
                  src="/assets/generated/fresno-map-centered.dim_1000x800.png" 
                  alt="Service area map showing Fresno, CA and surrounding coverage" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Primary Coverage:</span> Fresno & Central Valley
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-semibold text-foreground">Extended Service:</span> Entire California State
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
