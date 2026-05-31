import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-surface shadow-sm sticky top-0 z-50 w-full border-b border-surface-container-high">
      <div className="flex justify-between items-center px-lg py-md max-w-7xl mx-auto w-full">
        <Link href="/" className="text-2xl font-display font-bold text-primary">
          NutriAli
        </Link>
        <nav className="hidden md:flex items-center gap-xl text-sm font-semibold">
          <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-on-surface-variant hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-on-surface-variant hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-on-surface-variant hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        <button className="bg-primary text-on-primary px-lg py-2 rounded-full text-sm font-semibold hover:bg-primary-container hover:text-on-primary-container transition-all active:scale-95 duration-150">
          Get Started
        </button>
      </div>
    </header>
  );
}
