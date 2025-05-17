"use client"

import React, {useRef} from 'react';
import {motion, useInView} from 'framer-motion';
import {Hammer, Shovel, ToyBrick as Brick, Wind, Building} from 'lucide-react';
import {cn} from '@/lib/utils';

const serviceCards = [
    {
        id: 1,
        title: 'Demolačné práce',
        description: 'Profesionálne a bezpečné demolačné služby pre budovy a konštrukcie všetkých veľkostí.',
        icon: Hammer,
        className: 'md:col-span-2 row-span-1',
        color: 'bg-chart-1/10 hover:bg-chart-1/20',
        iconColor: 'text-chart-1'
    },
    {
        id: 2,
        title: 'Výkopové práce',
        description: 'Presné výkopové služby s využitím modernej techniky.',
        icon: Shovel,
        className: 'md:col-span-1 row-span-1',
        color: 'bg-chart-2/10 hover:bg-chart-2/20',
        iconColor: 'text-chart-2'
    },
    {
        id: 3,
        title: 'Murárske práce',
        description: 'Odborné murárske služby s dôrazom na kvalitu a estetiku.',
        icon: Brick,
        className: 'md:col-span-1 row-span-1',
        color: 'bg-chart-3/10 hover:bg-chart-3/20',
        iconColor: 'text-chart-3'
    },
    {
        id: 4,
        title: 'Vzduchotechnika',
        description: 'Komplexné riešenia vzduchotechniky pre optimálnu kvalitu vzduchu a reguláciu teploty.',
        icon: Wind,
        className: 'md:col-span-2 row-span-1',
        color: 'bg-chart-4/10 hover:bg-chart-4/20',
        iconColor: 'text-chart-4'
    },
    {
        id: 5,
        title: 'Komplexné stavebné riešenia',
        description: 'Kompletné stavebné služby od plánovania a dizajnu až po realizáciu a odovzdanie.',
        icon: Building,
        className: 'md:col-span-2 row-span-1',
        color: 'bg-chart-5/10 hover:bg-chart-5/20',
        iconColor: 'text-chart-5'
    },
];

interface ServiceCardProps {
    service: {
        id: number;
        title: string;
        description: string;
        icon: React.ComponentType<IconProps>;
        className: string;
        color: string;
        iconColor: string;
    };
}

interface IconProps {
    className?: string
}

const ServiceCard = ({service}: ServiceCardProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, amount: 0.3});

    const {title, description, icon: Icon, className, color, iconColor} = service;

    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0, y: 20}}
            animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
            transition={{duration: 0.5, delay: service.id * 0.1}}
            className={cn(
                "rounded-2xl p-6 transition-all duration-300 h-full",
                className,
                color
            )}
        >
            <div className="h-full flex flex-col">
                <div className={cn("p-3 rounded-xl w-fit mb-4", color, iconColor)}>
                    <Icon className="h-6 w-6"/>
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
            </div>
        </motion.div>
    );
};

export default function ServicesSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {once: true, amount: 0.1});

    return (
        <section id="services" className="py-20 bg-background">
            <div className="container">
                <div ref={sectionRef} className="text-center mb-12">
                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                        transition={{duration: 0.5}}
                        className="text-3xl font-bold font-roboto-condensed mb-3"
                    >
                        Naše služby
                    </motion.h2>
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                        transition={{duration: 0.5, delay: 0.1}}
                        className="text-muted-foreground max-w-2xl mx-auto"
                    >
                        Komplexné stavebné riešenia prispôsobené vašim potrebám
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {serviceCards.map((service) => (
                        <ServiceCard key={service.id} service={service}/>
                    ))}
                </div>
            </div>
        </section>
    );
}