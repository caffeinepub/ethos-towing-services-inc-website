import { Phone, Mail, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-secondary/95 backdrop-blur-md border-b border-secondary-foreground/10 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
              <img 
                src="/assets/mii.png" 
                alt="Ethos Towing Services" 
                className="h-12 w-auto object-contain relative z-10"
              />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-display font-bold text-secondary-foreground tracking-tight">
                Ethos Towing
              </h1>
              <p className="text-xs text-white font-medium tracking-wide">
                PROFESSIONAL • RELIABLE • 24/7
              </p>
            </div>
          </div>
          
          {/* Contact Actions */}
          <div className="flex items-center gap-3">
            <a 
              href="mailto:queries@ethostowing.com" 
              className="hidden lg:flex items-center gap-2 text-white hover:text-white/90 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm font-medium">queries@ethostowing.com</span>
            </a>
            
            <div className="h-8 w-px bg-secondary-foreground/20 hidden lg:block" />
            
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg hover:shadow-xl transition-all group"
              asChild
            >
              <a href="tel:559-944-8178" className="flex items-center gap-2">
                <Phone className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                <span className="hidden sm:inline">Call Now:</span>
                <span>559-944-8178</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
