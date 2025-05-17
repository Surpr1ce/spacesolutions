"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, Award, Users } from 'lucide-react';

const stats = [
  { id: 1, value: '15+', label: 'Rokov skúseností', icon: Calendar },
  { id: 2, value: '20+', label: 'Krajín', icon: MapPin },
  { id: 3, value: '500+', label: 'Dokončených projektov', icon: Award },
  { id: 4, value: '150+', label: 'Členov tímu', icon: Users },
];

const projects = [
  {
    name: 'Metropolitan Tower, Londýn',
    type: 'Rekonštrukcia',
    year: '2023',
    description: 'Komplexná rekonštrukcia 30-poschodovej kancelárskej budovy v centre Londýna'
  },
  {
    name: 'Ekologický komplex, Berlín',
    type: 'Novostavba',
    year: '2022',
    description: 'Výstavba energeticky úsporného kancelárskeho komplexu s LEED certifikáciou'
  },
  {
    name: 'Luxusná rezidencia, Dubaj',
    type: 'Novostavba',
    year: '2023',
    description: 'Výstavba exkluzívneho rezidenčného komplexu s 200 bytovými jednotkami'
  },
  {
    name: 'Infraštruktúra, Singapur',
    type: 'Modernizácia',
    year: '2022',
    description: 'Rozsiahla modernizácia mestskej infraštruktúry vrátane mostov a tunelov'
  },
  {
    name: 'Historická budova, Paríž',
    type: 'Reštaurácia',
    year: '2021',
    description: 'Citlivá rekonštrukcia historickej budovy z 19. storočia'
  },
  {
    name: 'Nákupné centrum, New York',
    type: 'Novostavba',
    year: '2023',
    description: 'Výstavba moderného nákupného centra s rozlohou 50,000 m²'
  },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const statsRef = useRef(null);
  const areStatsInView = useInView(statsRef, { once: true, amount: 0.2 });
  
  const projectsRef = useRef(null);
  const areProjectsInView = useInView(projectsRef, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl"
          >
            <Image
              src="https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg"
              alt="Stavebný tím"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold font-roboto-condensed mb-6">O našej spoločnosti</h2>
            <p className="text-muted-foreground mb-6">
              Sme medzinárodná stavebná firma poskytujúca komplexné služby v oblasti výstavby, 
              demolácií a technickej infraštruktúry. S viac ako 15-ročnými skúsenosťami a projektmi 
              vo viac ako 20 krajinách sme sa etablovali ako dôveryhodný partner pre 
              súkromných aj verejných klientov.
            </p>
            <p className="text-muted-foreground mb-6">
              Náš tím pozostáva z vysoko kvalifikovaných odborníkov, ktorí sa zaväzujú poskytovať 
              výnimočnú kvalitu a inovatívne riešenia pre každý projekt, bez ohľadu na jeho veľkosť či zložitosť.
            </p>
            
            <div ref={statsRef} className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={areStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col items-center bg-background p-4 rounded-lg shadow-sm"
                  >
                    <div className="bg-primary/10 p-3 rounded-full mb-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-2xl font-bold">{stat.value}</span>
                    <span className="text-sm text-muted-foreground text-center">{stat.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          ref={projectsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={areProjectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <h3 className="text-2xl font-bold font-roboto-condensed mb-8 text-center">Významné projekty</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={areProjectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-lg">{project.name}</h4>
                    <span className="text-sm text-muted-foreground">{project.type}</span>
                  </div>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {project.year}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}