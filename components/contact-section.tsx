"use client"

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, Globe, Building } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Meno musí mať aspoň 2 znaky.",
  }),
  email: z.string().email({
    message: "Prosím zadajte platnú emailovú adresu.",
  }),
  phone: z.string().min(5, {
    message: "Prosím zadajte platné telefónne číslo.",
  }),
  message: z.string().min(10, {
    message: "Správa musí mať aspoň 10 znakov.",
  }),
});

const contactDetails = [
  {
    icon: Building,
    title: 'Sídlo spoločnosti',
    details: 'Main Office Tower, 123 Business Avenue, Londýn',
  },
  {
    icon: Phone,
    title: 'Telefónne číslo',
    details: '+44 123 456 7890',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'contact@spacesolutions.com',
  },
  {
    icon: Clock,
    title: 'Pracovná doba',
    details: 'Pondelok - Piatok: 8:00 - 18:00',
  },
];

const locations = [
  { city: 'Londýn', role: 'Hlavné sídlo' },
  { city: 'Berlín', role: 'Európska centrála' },
  { city: 'Dubaj', role: 'Blízky východ' },
  { city: 'Singapur', role: 'Ázia a Pacifik' },
];

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Formulár odoslaný",
      description: "Budeme vás kontaktovať čo najskôr.",
    });
    console.log(values);
    form.reset();
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold font-roboto-condensed mb-3">
            Kontaktujte nás
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted-foreground max-w-2xl mx-auto">
            Máte projekt na mysli? Kontaktujte nás ešte dnes a spoločne vytvoríme niečo výnimočné.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-xl p-8 shadow-sm"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Meno</FormLabel>
                      <FormControl>
                        <Input placeholder="Vaše meno" className="bg-background" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Váš email" className="bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefón</FormLabel>
                        <FormControl>
                          <Input placeholder="Vaše telefónne číslo" className="bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Správa</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Povedzte nám o vašom projekte" 
                          rows={6}
                          className="bg-background resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-chart-1 hover:bg-chart-1/90 text-white"
                >
                  Odoslať správu
                </Button>
              </form>
            </Form>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-card p-6 rounded-xl shadow-sm"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="bg-chart-1/10 p-3 rounded-full">
                        <Icon className="h-5 w-5 text-chart-1" />
                      </div>
                      <div>
                        <h3 className="font-bold">{item.title}</h3>
                        <p className="text-muted-foreground">{item.details}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div 
              variants={itemVariants}
              className="bg-card p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-chart-1/10 p-3 rounded-full">
                  <Globe className="h-5 w-5 text-chart-1" />
                </div>
                <h3 className="font-bold text-lg">Naša globálna prítomnosť</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {locations.map((location, index) => (
                  <div key={index} className="p-4 bg-background rounded-lg">
                    <h4 className="font-bold">{location.city}</h4>
                    <p className="text-sm text-muted-foreground">{location.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}