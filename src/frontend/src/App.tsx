import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ServiceArea from './components/ServiceArea';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <ServiceArea />
        <ContactForm />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
