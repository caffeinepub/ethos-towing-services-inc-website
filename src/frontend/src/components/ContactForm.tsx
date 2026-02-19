import { useState } from 'react';
import { useActor } from '@/hooks/useActor';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Loader2, Send, Phone, Clock } from 'lucide-react';

export default function ContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    dropLocation: '',
    vehicleType: '',
    serviceDetails: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const submitMutation = useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error('Backend not available');
      
      await actor.submitRequest(
        formData.name,
        formData.phone,
        formData.location,
        formData.vehicleType,
        formData.serviceDetails,
        formData.dropLocation.trim() ? formData.dropLocation : null
      );
    },
    onSuccess: () => {
      toast.success('Request Submitted Successfully!', {
        description: 'Our team will contact you shortly to confirm your service request.'
      });
      
      setFormData({
        name: '',
        phone: '',
        location: '',
        dropLocation: '',
        vehicleType: '',
        serviceDetails: ''
      });
      
      queryClient.invalidateQueries({ queryKey: ['requests'] });
    },
    onError: (error) => {
      toast.error('Submission Failed', {
        description: error instanceof Error ? error.message : 'Please try again or call us directly at 559-944-8178.'
      });
    }
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }
    
    if (!formData.vehicleType.trim()) {
      newErrors.vehicleType = 'Vehicle type is required';
    }
    
    if (!formData.serviceDetails.trim()) {
      newErrors.serviceDetails = 'Service details are required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      submitMutation.mutate();
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section id="contact-form" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-bold text-sm uppercase tracking-wider">Get Started</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Request Service Now
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground">
              Fill out the form below and we'll get back to you immediately
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-card border-2 border-border rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-semibold text-foreground">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`h-12 text-base ${errors.name ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive font-medium">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-semibold text-foreground">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(559) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className={`h-12 text-base ${errors.phone ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive font-medium">{errors.phone}</p>
                    )}
                  </div>

                  {/* Current Location Field */}
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-base font-semibold text-foreground">
                      Current Location *
                    </Label>
                    <Input
                      id="location"
                      type="text"
                      placeholder="Street address or nearest intersection"
                      value={formData.location}
                      onChange={(e) => handleChange('location', e.target.value)}
                      className={`h-12 text-base ${errors.location ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                    />
                    {errors.location && (
                      <p className="text-sm text-destructive font-medium">{errors.location}</p>
                    )}
                  </div>

                  {/* Drop Location Field */}
                  <div className="space-y-2">
                    <Label htmlFor="dropLocation" className="text-base font-semibold text-foreground">
                      Drop Location
                    </Label>
                    <Input
                      id="dropLocation"
                      type="text"
                      placeholder="Where should we tow your vehicle?"
                      value={formData.dropLocation}
                      onChange={(e) => handleChange('dropLocation', e.target.value)}
                      className="h-12 text-base"
                    />
                    <p className="text-xs text-muted-foreground">
                      Optional - helps us provide a more accurate cost estimate
                    </p>
                  </div>

                  {/* Vehicle Type Field */}
                  <div className="space-y-2">
                    <Label htmlFor="vehicleType" className="text-base font-semibold text-foreground">
                      Vehicle Type *
                    </Label>
                    <Input
                      id="vehicleType"
                      type="text"
                      placeholder="e.g., 2020 Honda Accord, Motorcycle, SUV"
                      value={formData.vehicleType}
                      onChange={(e) => handleChange('vehicleType', e.target.value)}
                      className={`h-12 text-base ${errors.vehicleType ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                    />
                    {errors.vehicleType && (
                      <p className="text-sm text-destructive font-medium">{errors.vehicleType}</p>
                    )}
                  </div>

                  {/* Service Details Field */}
                  <div className="space-y-2">
                    <Label htmlFor="serviceDetails" className="text-base font-semibold text-foreground">
                      Service Details *
                    </Label>
                    <Textarea
                      id="serviceDetails"
                      placeholder="Describe your situation and the service you need..."
                      value={formData.serviceDetails}
                      onChange={(e) => handleChange('serviceDetails', e.target.value)}
                      className={`min-h-[120px] text-base resize-none ${errors.serviceDetails ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                    />
                    {errors.serviceDetails && (
                      <p className="text-sm text-destructive font-medium">{errors.serviceDetails}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitMutation.isPending}
                    className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all group"
                  >
                    {submitMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>

            {/* Emergency Contact Info */}
            <div className="space-y-6">
              {/* Emergency Call Card */}
              <div className="bg-gradient-to-br from-primary to-primary/90 border-2 border-primary rounded-2xl p-8 text-center shadow-xl">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/20 rounded-full mb-4">
                  <Phone className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-display font-bold text-primary-foreground mb-2">
                  Need Immediate Help?
                </h3>
                
                <p className="text-primary-foreground/90 text-sm mb-6">
                  Call us now for emergency towing service
                </p>
                
                <a 
                  href="tel:559-944-8178"
                  className="block text-3xl font-display font-extrabold text-primary-foreground hover:text-primary-foreground/90 transition-colors mb-2"
                >
                  559-944-8178
                </a>
                
                <p className="text-primary-foreground/80 text-xs font-medium">
                  Available 24 hours a day, 7 days a week
                </p>
              </div>

              {/* 24/7 Availability Card */}
              <div className="bg-card border-2 border-border rounded-2xl p-8 text-center shadow-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                
                <h3 className="text-lg font-display font-bold text-foreground mb-2">
                  24/7 Emergency Service
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We're always ready to respond to your towing and roadside assistance needs, day or night.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
