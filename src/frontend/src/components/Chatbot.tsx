import { useEffect, useRef, useState } from 'react';
import { Send, Trash2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import type { ChatMessage } from '@/hooks/useChatbot';

interface ChatbotProps {
  isOpen: boolean;
  messages: ChatMessage[];
  onSendMessage: (message: string) => void;
  onClearHistory: () => void;
  onClose: () => void;
}

export default function Chatbot({
  isOpen,
  messages,
  onSendMessage,
  onClearHistory,
  onClose
}: ChatbotProps) {
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    onSendMessage(suggestion);
  };

  if (!isOpen) return null;

  return (
    <Card className="fixed bottom-24 right-6 w-[380px] h-[600px] shadow-2xl z-40 flex flex-col overflow-hidden border-2 border-border">
      {/* Header */}
      <div className="bg-secondary text-secondary-foreground p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
            <img 
              src="/assets/mii.png" 
              alt="Ethos Towing" 
              className="h-8 w-8 object-contain"
            />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg">Ethos Assistant</h3>
            <p className="text-xs opacity-90">Always here to help</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClearHistory}
            className="h-8 w-8 text-secondary-foreground hover:bg-secondary-foreground/10"
            aria-label="Clear chat history"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8 text-secondary-foreground hover:bg-secondary-foreground/10"
            aria-label="Close chat"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-muted/30">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id}>
              <div
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-sm'
                      : 'bg-card text-card-foreground border border-border rounded-bl-sm'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">
                    {message.text}
                  </p>
                </div>
              </div>
              
              {/* Suggestions */}
              {message.sender === 'bot' && message.suggestions && message.suggestions.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3 ml-2">
                  {message.suggestions.map((suggestion, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="text-xs h-auto py-1.5 px-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="p-4 bg-background border-t border-border">
        <div className="flex gap-2">
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button
            onClick={handleSend}
            size="icon"
            disabled={!inputValue.trim()}
            className="shrink-0"
            aria-label="Send message"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          For immediate assistance: 559-944-8178
        </p>
      </div>
    </Card>
  );
}
