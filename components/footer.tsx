import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}

interface QuickLink {
  href: string;
  label: string;
}

interface ContactInfo {
  icon: React.ElementType;
  text: string;
}

const socialLinks: SocialLink[] = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const quickLinks: QuickLink[] = [
  { href: '#', label: 'Domov' },
  { href: '#services', label: 'Služby' },
  { href: '#about', label: 'O nás' },
  { href: '#contact', label: 'Kontakt' },
];

const services: string[] = [
  'Demolačné práce',
  'Výkopové práce',
  'Murárske práce',
  'Vzduchotechnika',
  'Komplexné stavebné riešenia',
];

const contactInfo: ContactInfo[] = [
  { icon: MapPin, text: 'Main Office Tower, 123 Business Avenue, Londýn' },
  { icon: Phone, text: '+44 123 456 7890' },
  { icon: Mail, text: 'contact@spacesolutions.com' },
];

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo a popis */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold font-roboto-condensed inline-block">
              SPACE<span className="text-chart-1">SOLUTIONS</span>
            </Link>
            <p className="text-muted-foreground">
              Váš spoľahlivý partner pre stavebné projekty po celom svete - od demolácie po vzduchotechniku.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="bg-background hover:bg-chart-1/10 p-2.5 rounded-lg transition-colors duration-200 group"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 text-primary group-hover:text-chart-1 transition-colors duration-200" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Rýchle odkazy */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg font-roboto-condensed">Navigácia</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-chart-1 transition-colors duration-200 flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Služby */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg font-roboto-condensed">Služby</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-muted-foreground hover:text-chart-1 transition-colors duration-200 cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg font-roboto-condensed">Kontaktné informácie</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <li key={index} className="flex items-start gap-3 group">
                    <Icon className="h-5 w-5 text-chart-1 mt-1 shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                      {info.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Copyright a právne odkazy */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SpaceSolutions. Všetky práva vyhradené.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-chart-1 transition-colors duration-200"
            >
              Ochrana súkromia
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-chart-1 transition-colors duration-200"
            >
              Podmienky používania
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}