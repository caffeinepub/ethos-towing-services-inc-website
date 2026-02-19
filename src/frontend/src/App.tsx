import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ServiceArea from './components/ServiceArea';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ChatbotToggle from './components/ChatbotToggle';
import { Toaster } from '@/components/ui/sonner';
import { useChatbot } from './hooks/useChatbot';

function App() {
  const { messages, isOpen, sendMessage, clearHistory, toggleChatbot, setIsOpen } = useChatbot();

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
      
      {/* Chatbot */}
      <ChatbotToggle isOpen={isOpen} onClick={toggleChatbot} />
      <Chatbot
        isOpen={isOpen}
        messages={messages}
        onSendMessage={sendMessage}
        onClearHistory={clearHistory}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}

export default App;
