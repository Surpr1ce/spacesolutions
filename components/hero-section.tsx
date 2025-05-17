"use client"

import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from "next/link";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-black/60 z-10"
          aria-hidden="true"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          poster="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg"
        >
          <source 
            src="https://player.vimeo.com/external/371468396.hd.mp4?s=f08f9826c6d6f2f2dda7679cb3675a7127a394cd&profile_id=172&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
          Váš prehliadač nepodporuje video tag.
        </video>
      </div>

      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-start px-4 md:px-6">
        <div className={cn(
          "max-w-2xl transition-all duration-1000 ease-out",
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          <h1 className="font-roboto-condensed text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Spoľahlivý partner pre vaše projekty
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-xl">
            Od demolácie po vzduchotechniku, prinášame excelenciu v stavebníctve na medzinárodných trhoch.
          </p>
          <Button size="lg" className="bg-chart-1 hover:bg-chart-1/90 text-white">
            <Link href="#contact">
              Získať ponuku
            </Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <a 
          href="#services" 
          className={cn(
            "flex flex-col items-center text-white/80 hover:text-white transition-all duration-300",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        >
          <span className="text-sm mb-2">Posunúť nižšie</span>
          <ChevronDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}