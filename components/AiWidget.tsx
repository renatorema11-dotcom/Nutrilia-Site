'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Mic, MicOff, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

type Message = {
  role: 'user' | 'model';
  content: string;
};

export function AiWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: "Hello! I'm Ali, your NutriAli guide. How can I help you navigate the site or receive your feedback today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'pt-BR'; // Assuming Portuguese from prompt, or user can speak EN

        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInputValue((prev) => prev ? `${prev} ${transcript}` : transcript);
        };

        recognition.onerror = (event: any) => {
          console.error('Speech recognition error', event.error);
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      }
    }
  }, []);

  const toggleListen = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      try {
        recognitionRef.current?.start();
        setIsListening(true);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = { role: 'user', content: inputValue.trim() };
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });

      const data = await response.json();
      
      if (data.text) {
        setMessages([...newMessages, { role: 'model', content: data.text }]);
      } else {
        setMessages([...newMessages, { role: 'model', content: 'Desculpe, ocorreu um erro.' }]);
      }
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { role: 'model', content: 'Desculpe, ocorreu um erro de conexão.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleToggle = () => {
    if (!isDragging) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <motion.div 
      className="fixed bottom-lg right-lg z-[100] transition-shadow duration-300"
      drag
      dragMomentum={false}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => {
        setTimeout(() => setIsDragging(false), 150);
      }}
    >
      <button 
        className="bg-on-background text-surface w-14 h-14 rounded-full flex items-center justify-center shadow-xl ai-glow hover:scale-105 active:scale-95 transition-all outline-none"
        onClick={handleToggle}
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div 
          className="absolute bottom-20 right-0 w-[calc(100vw-2rem)] sm:w-[320px] max-w-[320px] bg-surface rounded-xl shadow-2xl border border-outline-variant overflow-hidden flex flex-col origin-bottom-right animate-in fade-in zoom-in duration-200 cursor-default"
          onPointerDown={(e) => e.stopPropagation()} 
        >
          <div className="bg-on-background p-md text-surface flex justify-between items-center">
            <span className="font-display font-medium text-base">Ali Intelligence</span>
            <button onClick={() => setIsOpen(false)} className="hover:text-tertiary-fixed-dim transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-md h-[300px] overflow-y-auto space-y-md flex flex-col">
            {messages.map((msg, idx) => (
              <div 
                key={idx}
                className={`p-sm rounded-lg max-w-[85%] text-sm font-sans ${
                  msg.role === 'user' 
                    ? 'bg-primary-container text-on-primary-container self-end' 
                    : 'bg-surface-container-high self-start text-on-surface'
                }`}
              >
                {msg.content}
              </div>
            ))}
            
            {isTyping && (
              <div className="bg-surface-container-high p-sm rounded-lg self-start text-on-surface">
                <Loader2 className="w-4 h-4 animate-spin text-outline" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-sm border-t border-outline-variant bg-surface">
            <div className="flex gap-1 items-center bg-surface-variant px-2 py-1 rounded-full">
               <button 
                onClick={toggleListen}
                className={`p-2 rounded-full transition-colors shrink-0 ${isListening ? 'bg-error/10 text-error' : 'text-on-surface-variant hover:text-primary hover:bg-surface'}`}
                title="Falar"
              >
                {isListening ? <Mic className="w-4 h-4 animate-pulse" /> : <MicOff className="w-4 h-4" />}
              </button>
              <input 
                type="text" 
                placeholder="Ask Ali..." 
                className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm flex-1 w-full p-2"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                disabled={isTyping || !inputValue.trim()}
                className="text-primary p-2 hover:bg-surface rounded-full transition-colors disabled:opacity-50 shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
