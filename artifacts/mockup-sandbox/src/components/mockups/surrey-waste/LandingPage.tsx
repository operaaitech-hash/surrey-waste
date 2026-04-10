import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2, ChevronRight, Clock, MapPin, Recycle, ShieldCheck, Truck } from 'lucide-react';

export function LandingPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-background/90 backdrop-blur-md border-border py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <span className="font-display font-bold text-background text-lg leading-none tracking-tighter">SW</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight uppercase">Surrey Waste</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How it Works</a>
            <a href="#environment" className="hover:text-foreground transition-colors">Environment</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <Button asChild className="hidden md:flex uppercase font-bold tracking-wider text-xs px-6 rounded-none">
            <a href="#book">Book Collection</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10 z-10" />
          <div className="absolute inset-0 bg-black/20 z-10" />
          <img 
            src="/__mockup/images/surrey-hero.png" 
            alt="Surrey Waste Collection Vehicle" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Commercial & Trade
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tighter uppercase text-balance mb-6">
                No Skip Permits.<br />
                <span className="text-muted-foreground">No Parking Problems.</span><br />
                <span className="text-primary">Just Hassle-Free</span><br />
                Waste Removal.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
                Premium click-and-collect waste clearance for shop fitters, builders, and refurbers in city centres and restricted-access locations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-none uppercase font-bold tracking-wider text-sm h-14 px-8" asChild>
                  <a href="#book">Book Collection <ChevronRight className="ml-2 h-4 w-4" /></a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-none uppercase font-bold tracking-wider text-sm h-14 px-8 border-border hover:bg-secondary" asChild>
                  <a href="#services">Explore Services</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction / Stats */}
      <section className="py-24 bg-secondary border-y border-border" id="services">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-6">Engineered for<br/>Trade Efficiency.</h2>
              <div className="w-12 h-1 bg-primary mb-8"></div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our click-and-collect waste collection service is specifically designed for trade and commercial customers, including shop refits, refurbishments, and projects in city centres or other hard-to-access locations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With our service, you simply prepare your waste in advance. Our experienced driver will arrive at your location, load the waste onto our vehicle, and remove it efficiently — allowing you to focus on your work without disruption.
              </p>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                { icon: Truck, title: "Driver Loads", desc: "We handle the heavy lifting so your team doesn't have to stop working." },
                { icon: MapPin, title: "Any Location", desc: "Perfect for restricted access, basements, and tight city centre streets." },
                { icon: ShieldCheck, title: "Fully Licensed", desc: "Insured and compliant operators providing complete peace of mind." },
                { icon: Clock, title: "Fast Turnaround", desc: "Rapid response times to keep your site clear and safe." }
              ].map((feature, i) => (
                <div key={i} className="bg-background p-8 border border-border group hover:border-primary/50 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-display font-bold text-xl mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image / Process Section */}
      <section className="py-24 bg-background" id="how-it-works">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col mb-16 items-center text-center">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4">The Process</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight">How it works</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="relative aspect-square lg:aspect-[4/5] bg-secondary overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/__mockup/images/surrey-service.png" 
                alt="Professional Waste Loading" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 border border-border pointer-events-none"></div>
            </motion.div>

            <div className="space-y-12">
              {[
                { step: "01", title: "Book Your Slot", desc: "Schedule a collection time that suits your project timeline. No permits required." },
                { step: "02", title: "Prepare Waste", desc: "Gather your materials. No need to load it into a skip, just have it accessible." },
                { step: "03", title: "We Load & Remove", desc: "Our team arrives, efficiently loads your waste, and leaves the site clean." },
                { step: "04", title: "Responsible Disposal", desc: "Waste is transported to our facility for processing and recycling." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className="flex gap-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex-shrink-0 font-display font-bold text-4xl text-muted-foreground/30">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2 uppercase">{item.title}</h3>
                    <p className="text-muted-foreground text-lg">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us List */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-6 text-background">
                Why Choose<br/>Surrey Waste
              </h2>
              <p className="text-lg text-background/80 font-medium max-w-md">
                We are the preferred partner for trade professionals who value their time and demand reliability.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {[
                "No permits or parking required",
                "Fast and hassle-free waste removal",
                "Driver loads the waste for you",
                "Ideal for restricted or hard-to-access areas",
                "Fully insured and licensed operators",
                "Perfect for small to medium loads"
              ].map((point, i) => (
                <motion.div 
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-background shrink-0 mt-0.5" />
                  <span className="font-bold text-background leading-tight">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Environment Section */}
      <section className="py-24 bg-background" id="environment">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary border border-border rounded-full mb-4">
                <Recycle className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight">Environmental<br/>Credibility.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your waste is transported directly to our state-of-the-art recycling facility, where it is processed and disposed of in a responsible, environmentally compliant manner.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We provide full documentation and waste transfer notes, ensuring your site remains fully compliant with all environmental regulations.
              </p>
              <div className="pt-4">
                <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  <span>0% Landfill Target</span>
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  <span>Fully Compliant</span>
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  <span>ISO Certified</span>
                </div>
              </div>
            </div>
            
            <motion.div 
              className="order-1 lg:order-2 relative aspect-[16/9] lg:aspect-square bg-secondary overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/__mockup/images/surrey-recycling.png" 
                alt="Modern Recycling Facility" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-24 bg-secondary border-t border-border relative overflow-hidden" id="book">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4">Book Collection</h2>
              <p className="text-xl text-muted-foreground">Ready for hassle-free waste removal? Request your slot today.</p>
            </div>
            
            <motion.div 
              className="bg-background border border-border p-8 md:p-12 shadow-2xl relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary"></div>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-xs uppercase font-bold tracking-wider text-muted-foreground">Contact Name</Label>
                    <Input id="name" placeholder="John Doe" className="h-12 rounded-none border-border bg-secondary/50 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="company" className="text-xs uppercase font-bold tracking-wider text-muted-foreground">Company Name</Label>
                    <Input id="company" placeholder="Acme Construction" className="h-12 rounded-none border-border bg-secondary/50 focus-visible:ring-primary" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-xs uppercase font-bold tracking-wider text-muted-foreground">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="07700 900000" className="h-12 rounded-none border-border bg-secondary/50 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-xs uppercase font-bold tracking-wider text-muted-foreground">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="h-12 rounded-none border-border bg-secondary/50 focus-visible:ring-primary" />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="type" className="text-xs uppercase font-bold tracking-wider text-muted-foreground">Waste Type & Volume (Approx)</Label>
                  <Select>
                    <SelectTrigger className="h-12 rounded-none border-border bg-secondary/50 focus:ring-primary">
                      <SelectValue placeholder="Select primary waste type" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none border-border bg-background">
                      <SelectItem value="mixed">Mixed Construction Waste</SelectItem>
                      <SelectItem value="timber">Timber & Wood</SelectItem>
                      <SelectItem value="plasterboard">Plasterboard</SelectItem>
                      <SelectItem value="rubble">Hardcore / Rubble</SelectItem>
                      <SelectItem value="office">Office Strip-out / Furniture</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="postcode" className="text-xs uppercase font-bold tracking-wider text-muted-foreground">Collection Postcode</Label>
                  <Input id="postcode" placeholder="e.g. GU1 1AA" className="h-12 rounded-none border-border bg-secondary/50 focus-visible:ring-primary max-w-[200px]" />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="notes" className="text-xs uppercase font-bold tracking-wider text-muted-foreground">Site Access & Additional Notes</Label>
                  <Textarea id="notes" placeholder="Please mention any parking restrictions, access codes, or specific instructions..." className="min-h-[120px] rounded-none border-border bg-secondary/50 focus-visible:ring-primary resize-none" />
                </div>

                <Button type="submit" size="lg" className="w-full h-14 rounded-none uppercase font-bold tracking-wider text-sm">
                  Request Collection Quote
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-4">
                  By submitting this form, you agree to our terms of service. We aim to respond within 2 hours during business operations.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12 text-center md:text-left">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                <div className="w-6 h-6 bg-primary flex items-center justify-center">
                  <span className="font-display font-bold text-background text-[10px] leading-none tracking-tighter">SW</span>
                </div>
                <span className="font-display font-bold text-lg tracking-tight uppercase">Surrey Waste</span>
              </div>
              <p className="text-muted-foreground max-w-sm mx-auto md:mx-0">
                Premium commercial waste collection for trade professionals. Efficient, compliant, and reliable.
              </p>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Click & Collect</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Site Clearance</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Office Strip-outs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Hazardous Waste</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>0800 123 4567</li>
                <li>info@surreywaste.com</li>
                <li>Unit 4, Industrial Park</li>
                <li>Surrey, GU1 1AA</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Surrey Waste Ltd. All Rights Reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Licenses</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
