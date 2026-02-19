import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatbotToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function ChatbotToggle({ isOpen, onClick }: ChatbotToggleProps) {
  return (
    <Button
      onClick={onClick}
      size="lg"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-50 bg-primary hover:bg-primary/90"
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      {isOpen ? (
        <X className="h-6 w-6" />
      ) : (
        <MessageCircle className="h-6 w-6" />
      )}
    </Button>
  );
}
