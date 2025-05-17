"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#', label: 'Domov' },
  { href: '#services', label: 'Služby' },
  { href: '#about', label: 'O nás' },
  { href: '#contact', label: 'Kontakt' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-sm shadow-sm py-2" 
        : "bg-transparent py-4"
    )}>
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className={cn(
                "text-2xl font-bold font-roboto-condensed",
                isScrolled ? "text-primary" : "text-white"
            )}
          >
            SPACE<span className="text-chart-1">SOLUTIONS</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isScrolled ? "text-foreground" : "text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              className="bg-chart-1 hover:bg-chart-1/90 text-white"
            >
              <Link href="#contact">
                Získať ponuku
              </Link>
            </Button>
          </nav>
          
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Zavrieť menu" : "Otvoriť menu"}
          >
            {isOpen ? (
              <X className={isScrolled ? "text-foreground" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-foreground" : "text-white"} />
            )}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-background border-t mt-2">
          <nav className="container px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-foreground hover:text-primary py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              className="bg-chart-1 hover:bg-chart-1/90 text-white w-full mt-2"
              onClick={() => setIsOpen(false)}
            >
              <Link href="#contact">
                Získať ponuku
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}