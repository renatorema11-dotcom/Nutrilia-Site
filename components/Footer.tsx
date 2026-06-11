import Link from 'next/link';
import { Apple, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-surface-container-highest w-full border-t border-surface-container-high">
      <div className="flex flex-col md:flex-row justify-between items-center px-lg py-xl max-w-7xl mx-auto w-full gap-md">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2 text-2xl font-display font-bold text-primary notranslate">
            <div className="bg-[#4a8069] text-white p-1 rounded-xl flex items-center justify-center">
              <Apple className="w-5 h-5" />
            </div>
            NutriAli
          </div>
          <p className="text-sm font-sans text-on-surface-variant">
            © 2024 NutriAli. All rights reserved. Your health, our precision.
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 items-center mt-6 md:mt-0">
          <Link href="/privacy-policy" className="text-sm font-sans text-on-surface-variant hover:underline decoration-primary transition-all text-center">Privacy Policy</Link>
          <Link href="/terms" className="text-sm font-sans text-on-surface-variant hover:underline decoration-primary transition-all text-center">Terms of Service</Link>
          <Link href="/faq" className="text-sm font-sans text-on-surface-variant hover:underline decoration-primary transition-all text-center">FAQ</Link>
          <Link href="/blog" className="text-sm font-sans text-on-surface-variant hover:underline decoration-primary transition-all text-center">Blog</Link>
          <Link href="https://www.instagram.com/nutrialioficial/" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-all ml-2">
            <Instagram className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
