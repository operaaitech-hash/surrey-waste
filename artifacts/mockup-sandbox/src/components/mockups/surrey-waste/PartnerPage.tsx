import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  ShieldCheck, 
  MapPin, 
  Clock, 
  FileText, 
  CheckCircle2, 
  Truck, 
  Building2, 
  AlertTriangle,
  ChevronRight,
  Scale,
  Ruler,
  Info
} from 'lucide-react';

export function PartnerPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-green-600 selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${isScrolled ? 'bg-slate-950/95 backdrop-blur-md border-slate-800 py-3' : 'bg-slate-950 border-transparent py-5'}`}>
        <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
              <span className="font-bold text-white text-sm leading-none tracking-tighter">SW</span>
            </div>
            <div>
              <div className="font-bold text-lg tracking-tight text-white leading-none">SURREY WASTE</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold mt-1">Commercial Logistics</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#specifications" className="hover:text-white transition-colors">Specifications</a>
            <a href="#coverage" className="hover:text-white transition-colors">Coverage</a>
            <a href="#compliance" className="hover:text-white transition-colors">Compliance</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-400 border-r border-slate-800 pr-4">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>EA Carrier Reg: CBDU123456</span>
            </div>
            <Button className="bg-green-600 hover:bg-green-500 text-white font-bold uppercase tracking-wider text-xs rounded-sm px-6 h-10">
              Request Booking
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-slate-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 -z-10"></div>
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="bg-slate-900 border-slate-700 text-slate-300 font-mono text-[10px] uppercase tracking-wider rounded-sm px-2 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 inline-block"></span>
                  Trade Only
                </Badge>
                <Badge variant="outline" className="bg-slate-900 border-slate-700 text-slate-300 font-mono text-[10px] uppercase tracking-wider rounded-sm px-2 py-1">
                  B2B Logistics
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                Commercial Waste Removal For <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Restricted Sites.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-xl leading-relaxed">
                Click-and-collect logistics for shop fitters, builders, and commercial refurbers. We provide the vehicle, the labor, and the compliance documentation. No skip permits. No parking problems.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-10 max-w-lg">
                <div className="border border-slate-800 bg-slate-900/50 p-4 rounded-sm flex items-start gap-3">
                  <FileText className="w-5 h-5 text-green-500 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">Full Documentation</div>
                    <div className="text-xs text-slate-400">Waste transfer notes provided digitally same-day.</div>
                  </div>
                </div>
                <div className="border border-slate-800 bg-slate-900/50 p-4 rounded-sm flex items-start gap-3">
                  <Clock className="w-5 h-5 text-green-500 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">Rapid Deployment</div>
                    <div className="text-xs text-slate-400">Scheduled slots. We load while your team keeps working.</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-500 text-white font-bold uppercase tracking-wider text-sm rounded-sm h-14 px-8">
                  Get Trade Quote
                </Button>
                <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white font-bold uppercase tracking-wider text-sm rounded-sm h-14 px-8">
                  View Service Specs
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-green-500/20 to-slate-900/50 blur-xl"></div>
              <div className="relative border border-slate-800 rounded-sm overflow-hidden bg-slate-900 aspect-[4/3]">
                <img 
                  src="/__mockup/images/surrey-logistics.png" 
                  alt="Commercial waste logistics operation" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-sm"></div>
                
                {/* Data overlays on image */}
                <div className="absolute bottom-4 left-4 bg-slate-950/90 backdrop-blur border border-slate-800 p-3 rounded-sm flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono mb-0.5">Status</div>
                    <div className="text-xs font-bold text-white">Fully Insured & Licensed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table Section */}
      <section className="py-20 md:py-24 border-b border-slate-800" id="specifications">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3 flex items-center gap-3">
                <Truck className="w-6 h-6 text-green-500" />
                Service Specifications
              </h2>
              <p className="text-slate-400 max-w-2xl">
                Clear parameters for our collection services. If your site has specific constraints, contact our logistics team.
              </p>
            </div>
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 rounded-sm h-10 text-xs font-mono">
              Download PDF Spec Sheet
            </Button>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800">
              
              <div className="p-8">
                <div className="w-10 h-10 bg-slate-950 rounded border border-slate-800 flex items-center justify-center mb-6">
                  <Scale className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4">Capacity & Volume</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex justify-between items-center border-b border-slate-800/50 pb-2">
                    <span className="text-slate-400">Max Weight per load</span>
                    <span className="font-mono text-white">1,500 kg</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-slate-800/50 pb-2">
                    <span className="text-slate-400">Volume</span>
                    <span className="font-mono text-white">Up to 14 cubic yards</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-slate-800/50 pb-2">
                    <span className="text-slate-400">Equivalent to</span>
                    <span className="font-mono text-white">2x 8-yard skips</span>
                  </li>
                  <li className="flex justify-between items-center pb-2">
                    <span className="text-slate-400">Labor included</span>
                    <span className="font-mono text-white">1 Driver / Loader</span>
                  </li>
                </ul>
              </div>

              <div className="p-8">
                <div className="w-10 h-10 bg-slate-950 rounded border border-slate-800 flex items-center justify-center mb-6">
                  <AlertTriangle className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4">Accepted Materials</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex justify-between items-center border-b border-slate-800/50 pb-2">
                    <span className="text-slate-400">Mixed Construction</span>
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </li>
                  <li className="flex justify-between items-center border-b border-slate-800/50 pb-2">
                    <span className="text-slate-400">Timber & Wood</span>
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </li>
                  <li className="flex justify-between items-center border-b border-slate-800/50 pb-2">
                    <span className="text-slate-400">Plasterboard</span>
                    <span className="text-xs text-slate-500 font-mono bg-slate-950 px-2 py-0.5 rounded">Segregated only</span>
                  </li>
                  <li className="flex justify-between items-center pb-2">
                    <span className="text-slate-400">Asbestos / Hazardous</span>
                    <span className="text-xs text-red-400 font-mono bg-slate-950 px-2 py-0.5 rounded">Prohibited</span>
                  </li>
                </ul>
              </div>

              <div className="p-8">
                <div className="w-10 h-10 bg-slate-950 rounded border border-slate-800 flex items-center justify-center mb-6">
                  <Ruler className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4">Site Constraints</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex justify-between items-center border-b border-slate-800/50 pb-2">
                    <span className="text-slate-400">Permit required</span>
                    <span className="font-mono text-white">No</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-slate-800/50 pb-2">
                    <span className="text-slate-400">Parking required</span>
                    <span className="font-mono text-white">Temporary loading only</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-slate-800/50 pb-2">
                    <span className="text-slate-400">Vehicle height</span>
                    <span className="font-mono text-white">2.8m clearance req.</span>
                  </li>
                  <li className="flex justify-between items-center pb-2">
                    <span className="text-slate-400">Loading distance</span>
                    <span className="text-xs text-slate-500 font-mono bg-slate-950 px-2 py-0.5 rounded">Max 20m from vehicle</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Trade Concerns */}
      <section className="py-20 md:py-24 border-b border-slate-800 bg-slate-900/30" id="compliance">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">
                Compliance & Documentation
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                We understand that as a commercial contractor, your waste disposal needs to be bulletproof. We provide complete transparency and rigorous documentation for every collection.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-sm flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Waste Transfer Notes (WTN)</h4>
                    <p className="text-sm text-slate-400">Legally compliant electronic WTNs provided immediately upon job completion for your site records.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-sm flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Licenses & Insurance</h4>
                    <p className="text-sm text-slate-400">Upper Tier Waste Carrier registered (CBDU123456). £10m Public Liability insurance. Documentation available on request.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-sm flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Recycling Reporting</h4>
                    <p className="text-sm text-slate-400">Zero-to-landfill policy where possible. Detailed diversion reports can be generated for major projects.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-sm p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 blur-3xl rounded-full"></div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Info className="w-5 h-5 text-slate-400" />
                Common Trade Questions
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wider">Do I need to organise a permit?</h4>
                  <p className="text-slate-400 text-sm">No. Because our vehicle is continuously attended and actively loaded, it is classified as loading/unloading, not a stationed skip.</p>
                </div>
                <div className="h-px bg-slate-800 w-full"></div>
                <div>
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wider">What if the site has restricted parking?</h4>
                  <p className="text-slate-400 text-sm">We specialise in tight city centres. As long as there is safe loading access (yellow lines, loading bays), we can operate.</p>
                </div>
                <div className="h-px bg-slate-800 w-full"></div>
                <div>
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wider">Do your drivers hold CSCS cards?</h4>
                  <p className="text-slate-400 text-sm">Yes, all our commercial operators hold valid CSCS cards and carry full 5-point PPE as standard for active construction sites.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Booking Form / CTA */}
      <section className="py-20 md:py-24" id="process">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-bold text-white tracking-tight mb-4">Request Logistics</h2>
              <p className="text-slate-400 mb-8">
                Submit your site details and requirements. Our trade desk will respond within 60 minutes during working hours with a firm quote and availability.
              </p>
              
              <div className="bg-slate-900 border border-slate-800 rounded-sm p-6 mb-8">
                <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">Standard Operating Hours</div>
                <div className="flex justify-between items-center text-sm text-white mb-2">
                  <span>Monday - Friday</span>
                  <span className="font-mono">06:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center text-sm text-white">
                  <span>Saturday</span>
                  <span className="font-mono">07:00 - 13:00</span>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-400">
                  Out-of-hours collections available by special arrangement for night works.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-12">
              <form className="bg-slate-900 border border-slate-800 rounded-sm p-6 md:p-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-xs uppercase tracking-wider text-slate-400">Company Name *</Label>
                    <Input id="company" className="bg-slate-950 border-slate-800 text-white h-12 rounded-sm focus-visible:ring-green-500 focus-visible:border-green-500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact" className="text-xs uppercase tracking-wider text-slate-400">Site Contact *</Label>
                    <Input id="contact" className="bg-slate-950 border-slate-800 text-white h-12 rounded-sm focus-visible:ring-green-500 focus-visible:border-green-500" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs uppercase tracking-wider text-slate-400">Phone Number *</Label>
                    <Input id="phone" type="tel" className="bg-slate-950 border-slate-800 text-white h-12 rounded-sm focus-visible:ring-green-500 focus-visible:border-green-500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs uppercase tracking-wider text-slate-400">Email Address *</Label>
                    <Input id="email" type="email" className="bg-slate-950 border-slate-800 text-white h-12 rounded-sm focus-visible:ring-green-500 focus-visible:border-green-500" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="postcode" className="text-xs uppercase tracking-wider text-slate-400">Site Postcode *</Label>
                    <Input id="postcode" className="bg-slate-950 border-slate-800 text-white h-12 rounded-sm focus-visible:ring-green-500 focus-visible:border-green-500 font-mono" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type" className="text-xs uppercase tracking-wider text-slate-400">Primary Waste Type *</Label>
                    <Select>
                      <SelectTrigger className="bg-slate-950 border-slate-800 text-white h-12 rounded-sm focus:ring-green-500">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-slate-800 text-white rounded-sm">
                        <SelectItem value="mixed">Mixed Construction</SelectItem>
                        <SelectItem value="stripout">Office Strip-out</SelectItem>
                        <SelectItem value="timber">Timber/Wood</SelectItem>
                        <SelectItem value="rubble">Hardcore/Rubble</SelectItem>
                        <SelectItem value="other">Other (Specify in notes)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  <Label htmlFor="notes" className="text-xs uppercase tracking-wider text-slate-400">Site Access Details / Load Description</Label>
                  <Textarea 
                    id="notes" 
                    placeholder="Provide details about loading distance, parking restrictions, or specific materials..."
                    className="bg-slate-950 border-slate-800 text-white min-h-[120px] rounded-sm focus-visible:ring-green-500 focus-visible:border-green-500 resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-500 text-white font-bold uppercase tracking-wider text-sm rounded-sm h-14">
                  Submit Request
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-slate-800 pb-8">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center">
                <span className="font-bold text-slate-400 text-[10px] leading-none">SW</span>
              </div>
              <span className="font-bold text-white tracking-tight">Surrey Waste Logistics</span>
            </div>
            <div className="flex gap-6 text-sm text-slate-400 font-mono">
              <span>0800 123 4567</span>
              <span>operations@surreywaste.com</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Surrey Waste Ltd. Company No. 12345678.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Compliance Documentation</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
