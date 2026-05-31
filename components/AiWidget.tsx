'use client';

import { useState } from 'react';
import { Bot, X, Send } from 'lucide-react';

export function AiWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-lg right-lg z-[100] transition-all duration-300">
      <button 
        className="bg-on-background text-surface w-14 h-14 rounded-full flex items-center justify-center shadow-xl ai-glow hover:scale-105 active:scale-95 transition-all"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[320px] bg-surface rounded-xl shadow-2xl border border-outline-variant overflow-hidden flex flex-col origin-bottom-right animate-in fade-in zoom-in duration-200">
          <div className="bg-on-background p-md text-surface flex justify-between items-center">
            <span className="font-display font-medium text-base">Ali Intelligence</span>
            <button onClick={() => setIsOpen(false)} className="hover:text-tertiary-fixed-dim transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-md h-[300px] overflow-y-auto space-y-md flex flex-col">
            <div className="bg-surface-container-high p-sm rounded-lg self-start max-w-[85%] text-sm font-sans">
              Hello! I'm Ali. Ready to customize your nutrition plan?
            </div>
            
            <div className="bg-primary-container text-on-primary-container p-sm rounded-lg self-end max-w-[85%] text-sm font-sans">
              How does genetic testing work?
            </div>
            
            <div className="bg-surface-container-high p-sm rounded-lg self-start max-w-[85%] text-sm font-sans">
              We analyze specific markers in your DNA to determine how your body processes carbs, fats, and proteins.
            </div>
          </div>
          
          <div className="p-sm border-t border-outline-variant">
            <div className="flex gap-2 items-center bg-surface-variant px-sm py-1 rounded-full">
              <input 
                type="text" 
                placeholder="Ask Ali..." 
                className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm flex-1 w-full p-2"
              />
              <button className="text-primary p-2 hover:bg-surface rounded-full transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
