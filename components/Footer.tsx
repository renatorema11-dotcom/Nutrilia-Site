import Link from 'next/link';
import { Apple } from 'lucide-react';

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
        <div className="flex flex-wrap justify-center gap-lg">
          <Link href="/" className="text-sm font-sans text-on-surface-variant hover:underline decoration-primary transition-all">Privacy Policy</Link>
          <Link href="/" className="text-sm font-sans text-on-surface-variant hover:underline decoration-primary transition-all">Terms of Service</Link>
          <Link href="/contact" className="text-sm font-sans text-on-surface-variant hover:underline decoration-primary transition-all">FAQ</Link>
          <Link href="/" className="text-sm font-sans text-on-surface-variant hover:underline decoration-primary transition-all">Blog</Link>
        </div>
      </div>
    </footer>
  );
}
