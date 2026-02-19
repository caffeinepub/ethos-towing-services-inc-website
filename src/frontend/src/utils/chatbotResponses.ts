interface ChatResponse {
  text: string;
  suggestions?: string[];
}

const responses: Record<string, ChatResponse> = {
  greeting: {
    text: "Hello! Welcome to Ethos Towing & Recovery. I'm here to help you with any questions about our towing and roadside assistance services. How can I assist you today?",
    suggestions: ["What services do you offer?", "What's your service area?", "How can I contact you?"]
  },
  services: {
    text: "We offer comprehensive towing services including:\n\n• Emergency Towing - 24/7 rapid response\n• Long-Distance Towing - Entire California state\n• Roadside Assistance - Jump starts, tire changes, lockouts\n• Vehicle Recovery & Jump Start - Accident recovery, off-road extraction, and battery jump starts\n• Flatbed Towing - Safe transport for luxury and specialty vehicles\n• Motorcycle Towing - Specialized equipment for bikes\n\nWhich service would you like to know more about?",
    suggestions: ["Tell me about emergency towing", "What about long-distance towing?", "Service area coverage"]
  },
  emergency: {
    text: "Our Emergency Towing service provides 24/7 rapid response when you need help most. We're available around the clock, every day of the year. Our professional team arrives quickly to get you and your vehicle to safety.\n\nNeed immediate assistance? Call us at 559-944-8178",
    suggestions: ["What's your service area?", "Other services", "Contact information"]
  },
  longDistance: {
    text: "Long-Distance Towing is one of our specialties! We can transport your vehicle throughout the entire California state from Fresno and the Central Valley. Whether you're relocating, buying a vehicle from out of state, or need transport for any reason, we've got you covered.\n\nFor special requests, please contact us directly.",
    suggestions: ["Service area details", "Other services", "Get a quote"]
  },
  roadside: {
    text: "Our Roadside Assistance includes:\n• Jump starts for dead batteries\n• Flat tire changes\n• Lockout services\n• Fuel delivery\n• Minor mechanical assistance\n\nWe're available 24/7 to get you back on the road quickly!",
    suggestions: ["Emergency towing", "Service area", "Contact us"]
  },
  jumpStart: {
    text: "Jump Start Service is part of our Vehicle Recovery & Jump Start offering! If your battery is dead, we'll come to your location and provide a professional jump start to get you back on the road quickly. Available 24/7 with fast response times!\n\nCall us anytime at 559-944-8178",
    suggestions: ["Other roadside services", "Emergency towing", "Contact us"]
  },
  recovery: {
    text: "Vehicle Recovery & Jump Start services include accident recovery, off-road recovery, extraction from difficult situations, and fast battery jump start assistance. Our experienced team has the equipment and expertise to safely recover your vehicle from any situation or get you started when your battery dies.\n\nAvailable 24/7 for emergency recovery and jump start needs.",
    suggestions: ["Emergency towing", "Other services", "Call now"]
  },
  flatbed: {
    text: "Flatbed Towing provides the safest transport method for luxury vehicles, classic cars, low-clearance vehicles, and specialty automobiles. Your vehicle is secured on a flat platform, eliminating wear on the drivetrain and ensuring damage-free transport.",
    suggestions: ["Motorcycle towing", "Service area", "Request service"]
  },
  motorcycle: {
    text: "Motorcycle Towing requires specialized equipment and expertise - and we have both! We use proper tie-down techniques and equipment designed specifically for motorcycles to ensure safe, secure transport of your bike.",
    suggestions: ["Other services", "Service area", "Contact information"]
  },
  serviceArea: {
    text: "We proudly serve Fresno and the entire Central Valley region. For long-distance towing, we can travel throughout the entire California state.\n\nOur primary coverage area includes Fresno County and surrounding communities. We're committed to serving our local community with fast, reliable service.",
    suggestions: ["What services do you offer?", "How do I contact you?", "Get a quote"]
  },
  availability: {
    text: "We're available 24/7, 365 days a year! Day or night, weekends and holidays - whenever you need towing or roadside assistance, Ethos Towing & Recovery is here for you.\n\nCall us anytime at 559-944-8178",
    suggestions: ["Emergency towing", "Service area", "Other services"]
  },
  contact: {
    text: "You can reach us:\n\n📞 Phone: 559-944-8178 (24/7)\n📧 Email: queries@ethostowing.com\n\nFor service requests, you can also fill out our contact form on this website. We'll respond promptly to all inquiries!",
    suggestions: ["What services do you offer?", "Service area", "Fill out contact form"]
  },
  pricing: {
    text: "Pricing varies based on the type of service, distance, and specific requirements. For an accurate quote, please:\n\n1. Fill out our contact form with your details\n2. Call us at 559-944-8178\n3. Email us at queries@ethostowing.com\n\nWe provide transparent, competitive pricing with no hidden fees.",
    suggestions: ["Fill out contact form", "Call now", "What services do you offer?"]
  },
  hours: {
    text: "We're open 24/7! That means we're available:\n• All day, every day\n• Weekends and holidays\n• Day and night\n\nEmergencies don't wait for business hours, and neither do we. Call 559-944-8178 anytime!",
    suggestions: ["Emergency towing", "Contact information", "Service area"]
  },
  default: {
    text: "I'm here to help! I can answer questions about:\n• Our towing services (emergency, long-distance, flatbed, motorcycle)\n• Roadside assistance and vehicle recovery with jump start service\n• Service area coverage\n• Contact information and availability\n\nWhat would you like to know?",
    suggestions: ["What services do you offer?", "Service area", "Contact information"]
  }
};

const keywords: Record<string, string[]> = {
  greeting: ["hello", "hi", "hey", "greetings", "good morning", "good afternoon", "good evening"],
  services: ["services", "what do you do", "what do you offer", "help with", "types of service"],
  emergency: ["emergency", "urgent", "immediate", "asap", "right now", "stranded", "broke down"],
  longDistance: ["long distance", "far", "miles", "relocate", "transport", "out of state", "california", "statewide"],
  roadside: ["roadside", "tire change", "lockout", "locked out", "fuel", "gas"],
  jumpStart: ["jump start", "jump", "battery", "dead battery", "car won't start", "won't start"],
  recovery: ["recovery", "accident", "off-road", "stuck", "ditch", "crashed"],
  flatbed: ["flatbed", "flat bed", "luxury", "classic car", "low clearance", "safe transport"],
  motorcycle: ["motorcycle", "bike", "motorbike", "harley", "sport bike"],
  serviceArea: ["service area", "coverage", "where", "location", "fresno", "central valley", "do you serve"],
  availability: ["available", "open", "hours", "24/7", "when", "schedule"],
  contact: ["contact", "phone", "email", "call", "reach you", "get in touch"],
  pricing: ["price", "cost", "how much", "quote", "estimate", "rate", "fee"],
  hours: ["hours", "open", "closed", "business hours", "when are you open"]
};

export function generateResponse(userMessage: string): ChatResponse {
  const lowerMessage = userMessage.toLowerCase().trim();
  
  // Check for greeting first
  if (lowerMessage.length < 20 && keywords.greeting.some(kw => lowerMessage.includes(kw))) {
    return responses.greeting;
  }
  
  // Check other keywords
  for (const [category, keywordList] of Object.entries(keywords)) {
    if (category === 'greeting') continue;
    
    if (keywordList.some(kw => lowerMessage.includes(kw))) {
      return responses[category];
    }
  }
  
  // Default response
  return responses.default;
}
