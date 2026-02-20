import { Clock, Battery, Circle, Fuel, Key, CreditCard, Wrench } from 'lucide-react';

export default function ETRMembership() {
  const features = [
    {
      icon: Clock,
      title: '24/7 roadside assistance',
      superscript: '¹⁰',
      description: 'Wherever you are, we\'ll be there when you need us. You can count on ETR Everyday.',
      color: 'from-primary/20 to-primary/5'
    },
    {
      icon: Battery,
      title: 'Mobile battery service',
      superscript: '¹¹',
      description: 'Don\'t get stranded. A battery boost or replacement is just a phone call away.',
      color: 'from-accent/20 to-accent/5'
    },
    {
      icon: Circle,
      title: 'Flat tire service',
      superscript: '¹²',
      description: 'Got a flat? We\'ll install your spare tire so that you can get back on the road.',
      color: 'from-primary/20 to-primary/5'
    },
    {
      icon: Fuel,
      title: 'Emergency fuel and delivery',
      superscript: '¹³',
      description: 'If you run out of fuel, we\'ll bring you enough to reach the nearest gas station.',
      color: 'from-accent/20 to-accent/5'
    },
    {
      icon: Key,
      title: 'Lockout services',
      superscript: '',
      description: 'Locked out? Call ETR. If we can\'t unlock your car, we\'ll get a locksmith who can.',
      color: 'from-primary/20 to-primary/5'
    },
    {
      icon: CreditCard,
      title: 'Member discounts',
      superscript: '',
      description: 'Your ETR Membership is the key to saving you money on everyday purchases.',
      color: 'from-accent/20 to-accent/5'
    },
    {
      icon: Wrench,
      title: 'Expert automotive advice',
      superscript: '',
      description: 'We\'ll help you with all things automotive, from gas prices to winter driving.',
      color: 'from-primary/20 to-primary/5'
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Membership Program</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              ETR Everyday
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Ethos Towing & Recovery Everyday
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Join our exclusive membership program and enjoy peace of mind with comprehensive roadside coverage and exclusive benefits.
          </p>

          {/* Pricing Card */}
          <div className="inline-block bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-1 shadow-xl">
            <div className="bg-card rounded-3xl px-12 py-8">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl md:text-7xl font-display font-bold text-primary">$110</span>
                <span className="text-xl text-muted-foreground">/year</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Annual Membership</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/30 overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
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
                  <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                    {feature.superscript && (
                      <sup className="text-xs ml-0.5">{feature.superscript}</sup>
                    )}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
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
            Ready to join ETR Everyday? Contact us to learn more about membership benefits.
          </p>
          <a
            href="tel:559-944-8178"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-lg"
          >
            <Clock className="h-5 w-5" />
            Call 559-944-8178
          </a>
        </div>
      </div>
    </section>
  );
}
