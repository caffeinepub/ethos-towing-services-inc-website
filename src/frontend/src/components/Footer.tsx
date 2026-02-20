import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SiFacebook, SiX, SiInstagram } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-secondary-foreground/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/assets/mii.png" 
                alt="Ethos Towing & Recovery" 
                className="h-10 w-10 object-contain"
              />
              <h3 className="text-xl font-display font-bold text-secondary-foreground">
                Ethos Towing & Recovery
              </h3>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-4">
              Professional towing and roadside assistance serving Fresno and the Central Valley with reliability and expertise.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-secondary-foreground/10 hover:bg-primary rounded-lg transition-colors group"
                aria-label="Facebook"
              >
                <SiFacebook className="h-5 w-5 text-secondary-foreground group-hover:text-primary-foreground" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-secondary-foreground/10 hover:bg-primary rounded-lg transition-colors group"
                aria-label="X (Twitter)"
              >
                <SiX className="h-5 w-5 text-secondary-foreground group-hover:text-primary-foreground" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-secondary-foreground/10 hover:bg-primary rounded-lg transition-colors group"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5 text-secondary-foreground group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-display font-bold text-secondary-foreground mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a 
                href="tel:559-944-8178"
                className="flex items-start gap-3 text-secondary-foreground/80 hover:text-primary transition-colors group"
              >
                <Phone className="h-5 w-5 mt-0.5 shrink-0 group-hover:rotate-12 transition-transform" />
                <div>
                  <p className="text-sm font-semibold">Phone</p>
                  <p className="text-sm">559-944-8178</p>
                </div>
              </a>
              
              <a 
                href="mailto:queries@ethostowing.com"
                className="flex items-start gap-3 text-secondary-foreground/80 hover:text-primary transition-colors group"
              >
                <Mail className="h-5 w-5 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <p className="text-sm">queries@ethostowing.com</p>
                </div>
              </a>
              
              <div className="flex items-start gap-3 text-secondary-foreground/80">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold">Location</p>
                  <p className="text-sm">Fresno, California</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-display font-bold text-secondary-foreground mb-6">
              Business Hours
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-secondary-foreground/80">
                <Clock className="h-5 w-5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold">24/7 Emergency Service</p>
                  <p className="text-sm">Always Available</p>
                </div>
              </div>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mt-4">
                <p className="text-sm font-bold text-primary text-center">
                  Open 24 Hours
                </p>
                <p className="text-xs text-secondary-foreground/70 text-center mt-1">
                  Every day of the year
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold text-secondary-foreground mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Emergency Towing
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Long-Distance Towing
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Roadside Assistance
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Vehicle Recovery
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Flatbed Towing
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Motorcycle Towing
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Jump Start Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-sm text-secondary-foreground/70 text-center">
              © {currentYear} Ethos Towing & Recovery INC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
