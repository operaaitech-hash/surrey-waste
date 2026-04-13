import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronRight, Clock, MapPin, Calendar, Check, ArrowRight } from 'lucide-react';

export function ConciergePage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-[#FDFBF9] text-[#2C2C2C] font-sans selection:bg-[#1C4D35] selection:text-white" style={{
      '--primary': '142 47% 21%',
      '--primary-foreground': '0 0% 100%',
      '--ring': '142 47% 21%',
      '--radius': '0.25rem',
    } as React.CSSProperties}>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF9]/80 backdrop-blur-md border-b border-black/5">
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#1C4D35]"></div>
            <span className="font-medium text-sm tracking-wide">Surrey Waste</span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm">
            <a href="#service" className="text-black/60 hover:text-black transition-colors">The Service</a>
            <a href="#process" className="text-black/60 hover:text-black transition-colors">Process</a>
            <a href="#details" className="text-black/60 hover:text-black transition-colors">Details</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:08001234567" className="hidden sm:block text-xs font-medium text-black/60 hover:text-black transition-colors">
              0800 123 4567
            </a>
            <Button variant="default" className="bg-[#1C4D35] hover:bg-[#153B28] text-white rounded-sm text-xs px-6 h-10 font-medium">
              Request Service
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-8 z-10 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-6 text-[#1A1A1A]">
                The problem, <br />
                <span className="text-black/40 italic font-serif">completely removed.</span>
              </h1>
              <p className="text-lg text-black/60 font-light leading-relaxed max-w-md">
                A premium managed waste service for commercial spaces. You request the time; we handle the loading, the logistics, and the compliance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-8 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-medium text-sm">Schedule a Collection</h3>
                <span className="text-xs text-black/40 font-medium">Step {step} of 2</span>
              </div>
              
              {step === 1 ? (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-xs text-black/60 font-normal">Location Postcode</Label>
                    <Input placeholder="e.g. GU1 1AA" className="h-12 bg-[#FDFBF9] border-black/10 focus-visible:ring-[#1C4D35]/20 focus-visible:border-[#1C4D35] rounded-sm transition-all" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs text-black/60 font-normal">Primary Waste Type</Label>
                    <Select>
                      <SelectTrigger className="h-12 bg-[#FDFBF9] border-black/10 focus:ring-[#1C4D35]/20 focus:border-[#1C4D35] rounded-sm transition-all">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent className="rounded-sm">
                        <SelectItem value="mixed">Mixed Commercial</SelectItem>
                        <SelectItem value="construction">Construction & Refit</SelectItem>
                        <SelectItem value="office">Office Furniture</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button 
                    onClick={() => setStep(2)}
                    className="w-full h-12 bg-[#1C4D35] hover:bg-[#153B28] text-white rounded-sm font-medium transition-colors"
                  >
                    Continue <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-xs text-black/60 font-normal">Date</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40" />
                        <Input placeholder="Select date" className="h-12 pl-10 bg-[#FDFBF9] border-black/10 focus-visible:ring-[#1C4D35]/20 focus-visible:border-[#1C4D35] rounded-sm transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs text-black/60 font-normal">Time Window</Label>
                      <Select>
                        <SelectTrigger className="h-12 bg-[#FDFBF9] border-black/10 focus:ring-[#1C4D35]/20 focus:border-[#1C4D35] rounded-sm transition-all">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent className="rounded-sm">
                          <SelectItem value="am">Morning (08:00 - 12:00)</SelectItem>
                          <SelectItem value="pm">Afternoon (12:00 - 17:00)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs text-black/60 font-normal">Contact Name</Label>
                    <Input placeholder="Your name" className="h-12 bg-[#FDFBF9] border-black/10 focus-visible:ring-[#1C4D35]/20 focus-visible:border-[#1C4D35] rounded-sm transition-all" />
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      onClick={() => setStep(1)}
                      className="w-1/3 h-12 rounded-sm border-black/10 font-normal"
                    >
                      Back
                    </Button>
                    <Button 
                      className="w-2/3 h-12 bg-[#1C4D35] hover:bg-[#153B28] text-white rounded-sm font-medium transition-colors"
                    >
                      Confirm Booking
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 relative h-[60vh] lg:h-[80vh] w-full mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 rounded-md overflow-hidden"
            >
              <img 
                src="/__mockup/images/surrey-concierge-hero.png" 
                alt="Clean serene space" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/5 mix-blend-multiply" />
            </motion.div>
            
            {/* Subtle floating element */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-8 left-[-2rem] bg-white/90 backdrop-blur-sm p-5 rounded-md shadow-lg border border-white/20 hidden md:flex items-center gap-4 max-w-xs"
            >
              <div className="w-10 h-10 rounded-full bg-[#1C4D35]/10 flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 text-[#1C4D35]" />
              </div>
              <div>
                <p className="text-sm font-medium text-black">Fully managed</p>
                <p className="text-xs text-black/60">No permits or parking required.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* The Service */}
      <section id="service" className="py-32 bg-white border-y border-black/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-24">
            <span className="text-[#1C4D35] text-xs font-medium tracking-widest uppercase">The Service</span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1A1A1A]">
              We respect your space, <br className="hidden md:block" />
              <span className="italic font-serif text-black/50">and we respect your time.</span>
            </h2>
            <p className="text-lg text-black/60 font-light leading-relaxed">
              Traditional waste removal is noisy, disruptive, and requires coordination. We offer a silent alternative: you book the time, our professionals arrive, load the waste, and leave. Your site remains undisturbed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            {[
              {
                title: "Driver Loading",
                desc: "Our team handles the physical removal. Your staff never needs to stop what they are doing."
              },
              {
                title: "Permit-Free",
                desc: "Because we load directly and do not leave skips on site, you avoid council permits and parking suspensions."
              },
              {
                title: "Restricted Access",
                desc: "Specialised in navigating tight city centres, basement load-outs, and challenging commercial properties."
              }
            ].map((feature, i) => (
              <div key={i} className="space-y-4">
                <div className="w-8 h-px bg-[#1C4D35] mb-6"></div>
                <h3 className="text-lg font-medium text-[#1A1A1A]">{feature.title}</h3>
                <p className="text-black/60 font-light leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 bg-[#FDFBF9]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 w-full rounded-md overflow-hidden">
              <img 
                src="/__mockup/images/surrey-concierge-detail.png" 
                alt="Professional service detail" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-16">
              <div>
                <span className="text-[#1C4D35] text-xs font-medium tracking-widest uppercase mb-4 block">The Process</span>
                <h2 className="text-3xl font-light tracking-tight text-[#1A1A1A]">Three steps to zero friction.</h2>
              </div>

              <div className="space-y-12">
                {[
                  { num: "01", title: "Schedule", desc: "Select a time window that aligns with your project phases. We operate on your schedule." },
                  { num: "02", title: "Collate", desc: "Simply gather the materials in an accessible area. No need to move them outside." },
                  { num: "03", title: "Removal", desc: "Our team arrives, efficiently removes all materials, and leaves the area immaculate." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-8 group">
                    <span className="text-sm font-medium text-black/30 group-hover:text-[#1C4D35] transition-colors">{step.num}</span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium text-[#1A1A1A]">{step.title}</h3>
                      <p className="text-black/60 font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Curated Details */}
      <section id="details" className="py-32 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-light tracking-tight mb-6">
                Service <br />
                <span className="italic font-serif text-white/50">Particulars</span>
              </h2>
              <p className="text-white/60 font-light leading-relaxed">
                The details that separate a standard operation from a managed service.
              </p>
            </div>
            
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="border-t border-white/10 divide-y divide-white/10">
                {[
                  { label: "Response Time", value: "Same-day or scheduled" },
                  { label: "Documentation", value: "Full waste transfer notes provided" },
                  { label: "Sustainability", value: "Zero-to-landfill target" },
                  { label: "Insurance", value: "Fully compliant & insured" },
                  { label: "Clientele", value: "Trade, builders, fitters" }
                ].map((item, i) => (
                  <div key={i} className="py-6 flex justify-between items-center">
                    <span className="text-white/60 font-light">{item.label}</span>
                    <span className="font-medium text-sm text-right max-w-[200px]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1A1A1A] mb-8">
            Ready to clear your space?
          </h2>
          <Button 
            className="h-14 px-8 bg-[#1C4D35] hover:bg-[#153B28] text-white rounded-sm font-medium transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Request a Collection
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#FDFBF9] border-t border-black/5 text-sm">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#1C4D35]"></div>
            <span className="font-medium tracking-wide">Surrey Waste</span>
          </div>
          <div className="text-black/40 font-light">
            &copy; {new Date().getFullYear()} Surrey Waste Ltd. Professional Managed Clearances.
          </div>
          <div className="flex gap-6 text-black/60">
            <a href="#" className="hover:text-black transition-colors">Terms</a>
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
