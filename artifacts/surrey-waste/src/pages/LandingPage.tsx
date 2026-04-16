import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2, ChevronRight, Clock, MapPin, Quote, Recycle, ShieldCheck, Star, Truck } from 'lucide-react';

const WASTE_TYPE_LABELS: Record<string, string> = {
  mixed: 'Mixed Construction Waste',
  timber: 'Timber & Wood',
  plasterboard: 'Plasterboard',
  rubble: 'Hardcore / Rubble',
  office: 'Office Strip-out',
  other: 'Other',
};

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    postcode: '',
    type: '',
    notes: '',
  });

  const updateField = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleQuoteRequest = (e: React.FormEvent) => {
    e.preventDefault();
    const wasteLabel = form.type ? WASTE_TYPE_LABELS[form.type] ?? form.type : 'Not specified';
    const subject = `Quote Request${form.company ? ` from ${form.company}` : ''}`;
    const lines = [
      'Hi Surrey Waste,',
      '',
      'I would like to request a quote for a waste collection. My details are below:',
      '',
      `Name: ${form.name || '-'}`,
      `Company: ${form.company || '-'}`,
      `Phone: ${form.phone || '-'}`,
      `Postcode: ${form.postcode || '-'}`,
      `Waste Type: ${wasteLabel}`,
      '',
      'Notes:',
      form.notes || '-',
      '',
      'Thanks,',
      form.name || '',
    ];
    const body = lines.join('\n');
    const mailto = `mailto:info@surreywaste.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-border py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src="/images/surrey-logo.png" alt="Surrey Waste Logo" className="w-12 h-12 object-contain drop-shadow-md" />
            <span className={`font-display font-extrabold text-xl tracking-tight uppercase ${isScrolled ? 'text-foreground' : 'text-white drop-shadow-lg'}`}>Surrey Waste</span>
          </a>
          <div className={`hidden md:flex items-center gap-8 text-sm font-semibold ${isScrolled ? 'text-muted-foreground' : 'text-white/90 drop-shadow'}`}>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
            <a href="#environment" className="hover:text-primary transition-colors">Recycling</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <Button asChild className="hidden md:flex uppercase font-bold tracking-wider text-xs px-6 rounded-full shadow-lg shadow-primary/30">
            <a href="#book">Book Now</a>
          </Button>
        </div>
      </nav>
      {/* Hero — emerald banner aesthetic */}
      <section className="relative flex items-center overflow-hidden">
        {/* Banner-style background image */}
        <img
          src="/images/hero-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 via-transparent to-emerald-900/20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
              Trusted by Trade & Commercial
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-[0.95] tracking-tight uppercase text-balance mb-6 text-white drop-shadow-2xl">
              Surrey<br/>Waste.
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100/90 font-medium max-w-xl mx-auto lg:mx-0 mb-8">
              Waste removal &amp; clearance experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="rounded-full uppercase font-bold tracking-wider text-sm h-14 px-8 shadow-2xl shadow-primary/40" asChild>
                <a href="#book">Book Collection <ChevronRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full uppercase font-bold tracking-wider text-sm h-14 px-8 border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white" asChild>
                <a href="#how-it-works">How We Work</a>
              </Button>
            </div>
          </motion.div>

          {/* Castle logo centerpiece */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-primary/50 rounded-full blur-[100px] scale-75"></div>
            <img
              src="/images/surrey-logo.png"
              alt="Surrey Waste Castle Logo"
              className="relative w-[280px] md:w-[400px] h-auto object-contain drop-shadow-[0_20px_60px_rgba(16,185,129,0.6)]"
            />
          </motion.div>
        </div>

      </section>
      {/* Services / Features */}
      <section className="py-16 bg-background" id="services">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-8"
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Service</span>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold uppercase tracking-tight mt-3">
              Built for Trade.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Truck, title: "Driver Loads", desc: "We do the heavy lifting." },
              { icon: MapPin, title: "Any Location", desc: "City centres. Tight access. Sorted." },
              { icon: ShieldCheck, title: "Fully Licensed", desc: "Insured, compliant, trusted." },
              { icon: Clock, title: "Fast Turnaround", desc: "Rapid response, every time." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-background rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <feature.icon className="h-7 w-7 text-primary group-hover:text-white" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* How it Works — emerald background */}
      <section className="py-16 relative overflow-hidden bg-brand-flow" id="how-it-works">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-emerald-400/20 rounded-full blur-[120px]"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-8"
          >
            <span className="text-emerald-300 font-bold uppercase tracking-widest text-sm">The Process</span>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold uppercase tracking-tight mt-3 text-white">
              Four Simple Steps.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Book", desc: "Schedule online in minutes." },
              { step: "02", title: "Prepare", desc: "Stack your waste, ready to go." },
              { step: "03", title: "Collect", desc: "Our driver loads everything." },
              { step: "04", title: "Recycle", desc: "Straight to our facility." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
              >
                <div className="font-display font-extrabold text-6xl text-emerald-300/40 mb-4">{item.step}</div>
                <h3 className="text-2xl font-display font-bold mb-2 uppercase text-white">{item.title}</h3>
                <p className="text-emerald-100/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Surrey Waste */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Why Us</span>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold uppercase tracking-tight mt-3 mb-8">
                The Trade<br/>
                <span className="text-primary">Choice.</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {[
                  "No skip permits required",
                  "No parking problems",
                  "Driver loads for you",
                  "Hard-to-access experts",
                  "Fully insured & licensed",
                  "Small to medium loads",
                ].map((point, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="font-semibold leading-tight">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="absolute inset-0 bg-primary/25 rounded-full blur-[90px] scale-75"></div>
              <img
                src="/images/surrey-logo.png"
                alt="Surrey Waste Castle Emblem"
                className="relative w-[280px] md:w-[360px] h-auto object-contain drop-shadow-[0_15px_50px_rgba(16,185,129,0.4)]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-secondary/40" id="reviews">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Trusted by Trade</span>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold uppercase tracking-tight mt-3">
              What Clients Say.
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider ml-2">Verified on Checkatrade</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Mark T.",
                location: "Guildford",
                image: "/images/review-mark.png",
                text: "Booked a collection for site clearance. Driver arrived on time, loaded everything himself, and left the site spotless. Will use again.",
              },
              {
                name: "Sarah L.",
                location: "Woking",
                image: "/images/review-sarah.png",
                text: "Brilliant service from start to finish. Quick quote, easy booking, and the team were professional and friendly. Highly recommended.",
              },
              {
                name: "James P.",
                location: "Surrey",
                image: "/images/review-james.png",
                text: "Needed an office strip-out cleared fast. Surrey Waste responded same day and handled it all. Fair price, no fuss.",
              },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-all relative"
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6">"{review.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <div className="font-bold text-sm">{review.name}</div>
                    <div className="text-xs text-muted-foreground">{review.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.checkatrade.com/trades/surreywaste"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline uppercase tracking-wider"
            >
              Read all reviews on Checkatrade <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Environmental */}
      <section className="py-16 bg-background" id="environment">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-8 shadow-xl shadow-primary/30"
            >
              <Recycle className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold uppercase tracking-tight mb-6">
              Recycled.<br/><span className="text-primary">Responsibly.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every collection goes straight to our recycling facility. Full waste transfer notes provided.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm font-bold uppercase tracking-wider text-muted-foreground">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 0% Landfill Target</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Fully Compliant</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> ISO Certified</span>
            </div>
          </div>
        </div>
      </section>
      {/* Booking Form */}
      <section className="py-16 relative overflow-hidden bg-brand-flow" id="book">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px]"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-6xl font-display font-extrabold uppercase tracking-tight mb-4 text-white">Book Now</h2>
              <p className="text-lg text-emerald-100/90">
                Or call <span className="font-bold text-white">07874 271317</span>
              </p>
            </div>

            <motion.div
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/40"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form className="space-y-6" onSubmit={handleQuoteRequest}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs uppercase font-bold tracking-wider text-muted-foreground">Name</Label>
                    <Input id="name" value={form.name} onChange={updateField('name')} placeholder="John Doe" className="h-12 rounded-xl border-border focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-xs uppercase font-bold tracking-wider text-muted-foreground">Company</Label>
                    <Input id="company" value={form.company} onChange={updateField('company')} placeholder="Acme Construction" className="h-12 rounded-xl border-border focus-visible:ring-primary" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs uppercase font-bold tracking-wider text-muted-foreground">Phone</Label>
                    <Input id="phone" type="tel" value={form.phone} onChange={updateField('phone')} placeholder="07700 900000" className="h-12 rounded-xl border-border focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postcode" className="text-xs uppercase font-bold tracking-wider text-muted-foreground">Postcode</Label>
                    <Input id="postcode" value={form.postcode} onChange={updateField('postcode')} placeholder="GU1 1AA" className="h-12 rounded-xl border-border focus-visible:ring-primary" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type" className="text-xs uppercase font-bold tracking-wider text-muted-foreground">Waste Type</Label>
                  <Select value={form.type} onValueChange={(value) => setForm((prev) => ({ ...prev, type: value }))}>
                    <SelectTrigger className="h-12 rounded-xl border-border focus:ring-primary">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-border bg-background">
                      <SelectItem value="mixed">Mixed Construction Waste</SelectItem>
                      <SelectItem value="timber">Timber &amp; Wood</SelectItem>
                      <SelectItem value="plasterboard">Plasterboard</SelectItem>
                      <SelectItem value="rubble">Hardcore / Rubble</SelectItem>
                      <SelectItem value="office">Office Strip-out</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-xs uppercase font-bold tracking-wider text-muted-foreground">Notes</Label>
                  <Textarea id="notes" value={form.notes} onChange={updateField('notes')} placeholder="Site access, parking, special instructions..." className="min-h-[100px] rounded-xl border-border focus-visible:ring-primary resize-none" />
                </div>

                <Button type="submit" size="lg" className="w-full h-14 rounded-full uppercase font-bold tracking-wider text-sm shadow-lg shadow-primary/30">
                  Request Quote
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-background border-t border-border py-10" id="contact">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
            <div className="md:col-span-2">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <img src="/images/surrey-logo.png" alt="Surrey Waste Logo" className="w-11 h-11 object-contain" />
                <span className="font-display font-extrabold text-xl tracking-tight uppercase">Surrey Waste</span>
              </div>
              <p className="text-muted-foreground max-w-sm mx-auto md:mx-0">
                Waste removal &amp; clearance experts.
              </p>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wider text-xs mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Click &amp; Collect</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Site Clearance</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Office Strip-outs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Commercial</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wider text-xs mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>07874 271317</li>
                <li>info@surreywaste.com</li>
                <li><a href="https://www.surreywaste.com" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">www.surreywaste.com</a></li>
                <li>Surrey, GU1 1AA</li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Surrey Waste Ltd.</p>
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
