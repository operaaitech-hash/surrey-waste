import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Leaf, BarChart3, Recycle, Droplet, Globe2, CheckCircle, ArrowDown } from 'lucide-react';

export function EnvironmentalPage() {
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
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A2E20] selection:bg-[#165134] selection:text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-[#FDFDFD]/90 backdrop-blur-md border-[#E5EBE7] py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#165134] flex items-center justify-center">
              <Globe2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-medium text-lg tracking-tight">Surrey Waste</span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-[#4A5D50]">
            <a href="#mission" className="hover:text-[#165134] transition-colors">Mission</a>
            <a href="#impact" className="hover:text-[#165134] transition-colors">Impact</a>
            <a href="#process" className="hover:text-[#165134] transition-colors">Material Journey</a>
            <a href="#service" className="hover:text-[#165134] transition-colors">Collection</a>
          </div>
          <Button asChild className="hidden md:flex bg-[#165134] hover:bg-[#113C26] text-white rounded-full px-6 py-2 h-auto text-sm font-medium transition-all duration-300">
            <a href="#book">Book Collection</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#F4F7F5]" id="mission">
        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-[#165134]/20 bg-[#165134]/5 text-[#165134] text-xs font-medium tracking-wide">
                  <Leaf className="w-3.5 h-3.5" />
                  Environmental Resource Recovery
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.1] tracking-tight mb-6 text-[#1A2E20]">
                  Every load collected.<br />
                  <span className="text-[#165134]">Nothing to landfill.</span>
                </h1>
                <p className="text-lg md:text-xl text-[#4A5D50] max-w-lg mb-10 leading-relaxed font-light">
                  We are an environmental company that happens to collect commercial waste. Your site's offcuts aren't rubbish—they are tomorrow's raw materials.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full bg-[#165134] hover:bg-[#113C26] text-white h-14 px-8 font-medium text-base transition-all duration-300 shadow-[0_8px_30px_rgb(22,81,52,0.2)]" asChild>
                    <a href="#book">Schedule a Collection <ArrowRight className="ml-2 h-4 w-4" /></a>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full h-14 px-8 border-[#165134]/20 text-[#165134] hover:bg-[#165134]/5 hover:border-[#165134]/40 font-medium text-base transition-all duration-300" asChild>
                    <a href="#impact">View Our Impact</a>
                  </Button>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="relative h-[60vh] lg:h-[80vh] w-full rounded-[2rem] overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <img 
                src="/__mockup/images/surrey-circular.png" 
                alt="Circular economy concept with natural textures" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-white/10 rounded-[2rem]"></div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#4A5D50]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <a href="#impact" className="flex flex-col items-center gap-2 hover:text-[#165134] transition-colors">
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </section>

      {/* Impact / Stats Section */}
      <section className="py-32 bg-[#FDFDFD]" id="impact">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-medium tracking-widest uppercase text-[#165134] mb-4">Measurable Impact</h2>
              <h3 className="text-4xl md:text-5xl font-display font-medium text-[#1A2E20] leading-tight">
                Sustainability by the numbers.
              </h3>
              <p className="mt-6 text-lg text-[#4A5D50] font-light">
                We believe in total transparency. Every collection contributes to our environmental mission of eliminating commercial landfill waste.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, stat: "98.4%", label: "Landfill Diversion Rate", desc: "Of all commercial materials collected in the last 12 months." },
              { icon: Recycle, stat: "12,400", label: "Tons Recycled Annually", desc: "Processed and returned to the manufacturing supply chain." },
              { icon: Droplet, stat: "100%", label: "Carbon Neutral Fleet", desc: "Our collection vehicles operate with fully offset emissions." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="bg-[#F4F7F5] rounded-[2rem] p-10 text-center flex flex-col items-center group hover:bg-[#165134] hover:text-white transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-8 text-[#165134] group-hover:text-[#165134] shadow-sm">
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="text-5xl font-display font-medium mb-4">{item.stat}</div>
                <div className="text-lg font-medium mb-3">{item.label}</div>
                <div className="text-sm text-[#4A5D50] group-hover:text-white/80 font-light leading-relaxed">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Journey Section */}
      <section className="py-32 bg-[#1A2E20] text-white" id="process">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-sm font-medium tracking-widest uppercase text-[#A3C4B3] mb-4">The Material Journey</h2>
              <h3 className="text-4xl md:text-5xl font-display font-medium leading-tight mb-8">
                From site waste to raw material.
              </h3>
              
              <div className="space-y-12 mt-12 relative before:absolute before:inset-0 before:ml-[1.1rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                {[
                  { step: "01", title: "Collection", desc: "We arrive at your site and load the materials. Our efficient service minimizes disruption to your project while maximizing resource recovery." },
                  { step: "02", title: "Sorting Facility", desc: "Materials are transported to our advanced recovery facility where they are separated by type: timber, plastics, metals, and aggregates." },
                  { step: "03", title: "Processing", desc: "Sorted materials are processed—wood is chipped, concrete is crushed, plastics are baled—preparing them for their next lifecycle." },
                  { step: "04", title: "New Life", desc: "Processed materials are distributed to manufacturing partners, entering the circular economy as raw inputs for new products." }
                ].map((item, i) => (
                  <div key={i} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#A3C4B3] bg-[#1A2E20] text-[#A3C4B3] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 font-medium text-sm">
                      {item.step}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] pb-4 md:pb-0">
                      <div className="flex flex-col">
                        <h4 className="text-xl font-medium mb-2">{item.title}</h4>
                        <p className="text-[#A3C4B3] font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative h-[80vh] rounded-[2rem] overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <img 
                src="/__mockup/images/surrey-materials.png" 
                alt="Modern material recovery facility" 
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E20] to-transparent mix-blend-multiply"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collection Service Section */}
      <section className="py-32 bg-[#F4F7F5]" id="service">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Driver Loads", desc: "Our team handles the heavy lifting, saving you labor time." },
                { title: "No Permits", desc: "Skip the bureaucratic hassle of skip permits and parking suspensions." },
                { title: "City Center Ready", desc: "We access restricted sites and narrow streets with ease." },
                { title: "Compliance First", desc: "Full waste transfer notes provided for your environmental records." }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-[#E5EBE7]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <CheckCircle className="w-6 h-6 text-[#165134] mb-4" />
                  <h4 className="text-lg font-medium text-[#1A2E20] mb-2">{feature.title}</h4>
                  <p className="text-[#4A5D50] text-sm font-light leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="order-1 lg:order-2 max-w-xl"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-medium tracking-widest uppercase text-[#165134] mb-4">The Mechanism</h2>
              <h3 className="text-4xl md:text-5xl font-display font-medium text-[#1A2E20] leading-tight mb-6">
                Collection is how we fulfill our mission.
              </h3>
              <p className="text-lg text-[#4A5D50] font-light leading-relaxed mb-6">
                To recover materials efficiently, we needed a collection model that worked for modern construction and retail environments.
              </p>
              <p className="text-lg text-[#4A5D50] font-light leading-relaxed mb-10">
                Our click-and-collect service is designed for sites where skips aren't viable. We arrive, we load, we depart—taking your materials directly to our recovery facilities without disrupting your site operations.
              </p>
              
              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`w-12 h-12 rounded-full border-2 border-[#F4F7F5] bg-[#E5EBE7] flex items-center justify-center overflow-hidden z-${4-i}0`}>
                      <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=e5ebe7`} alt="Avatar" className="w-full h-full opacity-50" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#4A5D50] font-medium">Trusted by 500+ commercial<br/>partners across Surrey.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-32 bg-white relative overflow-hidden" id="book">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#165134]/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-[#E5EBE7] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-2 bg-[#1A2E20] p-12 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-display font-medium mb-4">Partner with us.</h3>
                  <p className="text-[#A3C4B3] font-light leading-relaxed mb-8">
                    Schedule a collection and join our mission to eliminate commercial landfill waste.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Leaf className="w-4 h-4 text-[#A3C4B3]" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">Environmental Commitment</div>
                        <div className="text-xs text-[#A3C4B3] mt-1">Full compliance documentation</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4 text-[#A3C4B3]" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">Fast Response</div>
                        <div className="text-xs text-[#A3C4B3] mt-1">Typically within 24 hours</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="text-sm text-[#A3C4B3] mb-1">Direct Line</div>
                  <div className="text-xl font-medium">0800 123 4567</div>
                </div>
              </div>
              
              <div className="md:col-span-3 p-12">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs font-medium text-[#4A5D50]">Contact Name</Label>
                      <Input id="name" placeholder="Jane Smith" className="h-12 rounded-xl border-[#E5EBE7] bg-[#FDFDFD] focus-visible:ring-[#165134]" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-xs font-medium text-[#4A5D50]">Company</Label>
                      <Input id="company" placeholder="Green Build Ltd" className="h-12 rounded-xl border-[#E5EBE7] bg-[#FDFDFD] focus-visible:ring-[#165134]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs font-medium text-[#4A5D50]">Email</Label>
                      <Input id="email" type="email" placeholder="jane@example.com" className="h-12 rounded-xl border-[#E5EBE7] bg-[#FDFDFD] focus-visible:ring-[#165134]" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-xs font-medium text-[#4A5D50]">Phone</Label>
                      <Input id="phone" type="tel" placeholder="07700 900000" className="h-12 rounded-xl border-[#E5EBE7] bg-[#FDFDFD] focus-visible:ring-[#165134]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type" className="text-xs font-medium text-[#4A5D50]">Primary Material Type</Label>
                    <Select>
                      <SelectTrigger className="h-12 rounded-xl border-[#E5EBE7] bg-[#FDFDFD] focus:ring-[#165134]">
                        <SelectValue placeholder="Select material for recovery" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-[#E5EBE7]">
                        <SelectItem value="mixed">Mixed Commercial</SelectItem>
                        <SelectItem value="timber">Timber & Wood</SelectItem>
                        <SelectItem value="plasterboard">Plasterboard</SelectItem>
                        <SelectItem value="rubble">Hardcore / Aggregate</SelectItem>
                        <SelectItem value="metal">Metals</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-xs font-medium text-[#4A5D50]">Project Details</Label>
                    <Textarea id="notes" placeholder="Location, volume, and specific access requirements..." className="min-h-[100px] rounded-xl border-[#E5EBE7] bg-[#FDFDFD] focus-visible:ring-[#165134] resize-none" />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-14 rounded-full bg-[#165134] hover:bg-[#113C26] text-white font-medium text-base transition-all duration-300">
                    Request Collection
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A2E20] text-[#A3C4B3] py-16 border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#165134] flex items-center justify-center">
                  <Globe2 className="w-4 h-4 text-white" />
                </div>
                <span className="font-display font-medium text-lg tracking-tight text-white">Surrey Waste</span>
              </div>
              <p className="max-w-sm font-light leading-relaxed">
                Transforming commercial waste into tomorrow's resources. A sustainable approach to site clearance.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-6">Company</h4>
              <ul className="space-y-3 text-sm font-light">
                <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Impact Report</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Material Recovery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-6">Services</h4>
              <ul className="space-y-3 text-sm font-light">
                <li><a href="#" className="hover:text-white transition-colors">Commercial Collection</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Site Clearance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance Documentation</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light">
            <p>&copy; {new Date().getFullYear()} Surrey Waste Ltd. Registered Environmental Carrier.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Environmental Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper icon
function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
