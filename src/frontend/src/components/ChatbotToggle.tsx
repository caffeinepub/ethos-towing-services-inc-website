import { X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatbotToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function ChatbotToggle({ isOpen, onClick }: ChatbotToggleProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2">
      <Button
        onClick={onClick}
        size="lg"
        className="h-14 w-14 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 bg-primary hover:bg-primary/90"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
      <span className="text-sm font-semibold text-foreground">Winchy</span>
    </div>
  );
}
