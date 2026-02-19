import { useState } from 'react';
import { generateResponse } from '@/utils/chatbotResponses';

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  suggestions?: string[];
}

export function useChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hello! Welcome to Ethos Towing Services. I'm here to help you with any questions about our towing and roadside assistance services. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
      suggestions: ["What services do you offer?", "What's your service area?", "How can I contact you?"]
    }
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const addMessage = (text: string, sender: 'user' | 'bot', suggestions?: string[]) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
      suggestions
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const sendMessage = (userMessage: string) => {
    if (!userMessage.trim()) return;

    // Add user message
    addMessage(userMessage, 'user');

    // Generate bot response after a short delay
    setTimeout(() => {
      const response = generateResponse(userMessage);
      addMessage(response.text, 'bot', response.suggestions);
    }, 500);
  };

  const clearHistory = () => {
    setMessages([
      {
        id: '1',
        text: "Hello! Welcome to Ethos Towing Services. I'm here to help you with any questions about our towing and roadside assistance services. How can I assist you today?",
        sender: 'bot',
        timestamp: new Date(),
        suggestions: ["What services do you offer?", "What's your service area?", "How can I contact you?"]
      }
    ]);
  };

  const toggleChatbot = () => {
    setIsOpen(prev => !prev);
  };

  return {
    messages,
    isOpen,
    sendMessage,
    clearHistory,
    toggleChatbot,
    setIsOpen
  };
}
