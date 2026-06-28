'use client';
import Link from 'next/link';
import { Globe, ChevronDown, Apple, Menu, X } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export function Header() {
  const [currentLang, setCurrentLang] = useState('en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add Google Translate Script
    const addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,pt,es,fr,de,it,ja,zh-CN',
        autoDisplay: false
      }, 'google_translate_element');
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchLanguage = (lang: string) => {
    setCurrentLang(lang);
    setIsLangMenuOpen(false);
    
    // Trigger Google Translate dropdown change properly
    const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (combo) {
      combo.value = lang;
      combo.dispatchEvent(new Event('change', { bubbles: true }));
    } else {
      // Fallback if widget hasn't fully loaded
      // eslint-disable-next-line react-hooks/immutability
      document.cookie = `googtrans=/en/${lang}; path=/`;
      window.location.reload();
    }
  };

  const languages = [
    { code: 'en', label: 'English (EN)' },
    { code: 'pt', label: 'Português (PT)' },
    { code: 'es', label: 'Español (ES)' },
    { code: 'fr', label: 'Français (FR)' },
    { code: 'de', label: 'Deutsch (DE)' },
    { code: 'it', label: 'Italiano (IT)' },
    { code: 'ja', label: '日本語 (JA)' },
    { code: 'zh-CN', label: '中文 (ZH)' },
  ];

  return (
    <header className="bg-surface shadow-sm sticky top-0 z-50 w-full border-b border-surface-container-high">
      <div id="google_translate_element" className="hidden"></div>
      <div className="flex justify-between items-center px-lg py-md max-w-7xl mx-auto w-full relative">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 text-2xl font-display font-bold text-primary notranslate mr-4">
            <div className="bg-[#4a8069] text-white p-1.5 rounded-xl flex items-center justify-center">
              <Apple className="w-5 h-5" />
            </div>
            NutriAli
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-xl text-sm font-semibold">
          <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-on-surface-variant hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/performance" className="text-on-surface-variant hover:text-primary transition-colors">
            Insights
          </Link>
          <Link href="/about" className="text-on-surface-variant hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-on-surface-variant hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative flex items-center text-on-surface-variant hover:text-primary transition-colors border border-outline-variant rounded-full px-3 py-1.5 cursor-pointer" ref={langMenuRef} onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}>
            <Globe className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold pr-4 uppercase select-none notranslate hidden sm:inline-block">{currentLang}</span>
            <ChevronDown className="w-3 h-3 absolute right-3 pointer-events-none" />
            
            {isLangMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-surface shadow-lg rounded-xl border border-surface-variant py-2 min-w-[140px] opacity-100 visible transition-all duration-200 z-50">
                {languages.map((l) => (
                  <button 
                    key={l.code}
                    onClick={(e) => { e.stopPropagation(); switchLanguage(l.code); }}
                    className={`w-full text-left px-4 py-2 text-sm font-semibold hover:bg-surface-container-high transition-colors notranslate ${currentLang === l.code ? 'text-primary' : 'text-on-surface'}`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <Link href={process.env.NEXT_PUBLIC_NUTRIALI_APP_URL || '#'} target="_blank" rel="noopener noreferrer" className="hidden md:block">
            <button className="bg-primary text-on-primary px-lg py-2 rounded-full text-sm font-semibold hover:bg-primary-container hover:text-on-primary-container transition-all active:scale-95 duration-150">
              Get Started
            </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-on-surface-variant hover:text-primary transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-surface-container-high shadow-lg z-40">
          <nav className="flex flex-col py-4">
            <Link 
              href="/" 
              className="px-lg py-3 text-on-surface font-semibold hover:bg-surface-container hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="px-lg py-3 text-on-surface font-semibold hover:bg-surface-container hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/performance" 
              className="px-lg py-3 text-on-surface font-semibold hover:bg-surface-container hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Insights
            </Link>
            <Link 
              href="/about" 
              className="px-lg py-3 text-on-surface font-semibold hover:bg-surface-container hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="px-lg py-3 text-on-surface font-semibold hover:bg-surface-container hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-lg pt-4 pb-2 border-t border-surface-container-high mt-2">
              <Link href={process.env.NEXT_PUBLIC_NUTRIALI_APP_URL || '#'} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full bg-primary text-on-primary px-lg py-3 rounded-full text-sm font-semibold hover:bg-primary-container transition-all active:scale-95 duration-150">
                  Get Started
                </button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
