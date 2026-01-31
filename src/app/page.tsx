import Image from "next/image";
import AutoplayVideo from "./components/AutoplayVideo";
import CountdownTimer from "./components/CountdownTimer";
import AnimateOnScroll from "./components/AnimateOnScroll";
import PhotoGallerySlider from "./components/PhotoGallerySlider";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Fixed nav */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-accent/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-8 px-6 py-3">
          <a href="#hero" className="shrink-0">
            <Image src="/logo.png" alt="Saurabh & Disha" width={100} height={50} className="h-10 w-auto object-contain sm:h-11" />
          </a>
          <a href="#hero" className="text-base font-medium text-foreground hover:text-accent transition-colors">Home</a>
          <a href="#gallery" className="text-base font-medium text-foreground hover:text-accent transition-colors">Photos</a>
          <a href="#videos" className="text-base font-medium text-foreground hover:text-accent transition-colors">Videos</a>
          <a href="#wedding" className="text-base font-medium text-foreground hover:text-accent transition-colors">Wedding</a>
        </div>
      </nav>

      {/* Hero - Redesigned */}
      <section id="hero" className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden px-6 pt-24 pb-20">
        {/* Background layers */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_20%,var(--tw-gradient-stops))] from-accent/15 via-accent/5 to-transparent" />
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full bg-accent-light/30 blur-2xl" />
        <div className="absolute right-1/4 top-1/4 h-48 w-48 rounded-full bg-accent-light/20 blur-2xl" />

        {/* Subtle grain overlay */}
        <div className="absolute inset-0 -z-[5] opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

        {/* Decorative corner flourishes */}
        <div className="pointer-events-none absolute left-8 top-24 text-accent/20 animate-float hidden md:block">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="currentColor" className="w-16 h-16 md:w-20 md:h-20">
            <path d="M40 5 Q60 20 55 45 Q50 70 40 75 Q30 70 25 45 Q20 20 40 5Z" />
          </svg>
        </div>
        <div className="pointer-events-none absolute right-8 top-24 text-accent/20 animate-float-delay hidden md:block">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="currentColor" className="w-16 h-16 md:w-20 md:h-20 scale-x-[-1]">
            <path d="M40 5 Q60 20 55 45 Q50 70 40 75 Q30 70 25 45 Q20 20 40 5Z" />
          </svg>
        </div>
        <div className="pointer-events-none absolute bottom-32 left-12 text-accent/15 animate-float hidden lg:block">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor" className="w-12 h-12 -rotate-45">
            <path d="M30 2 L35 15 L48 20 L35 25 L30 38 L25 25 L12 20 L25 15 Z" />
          </svg>
        </div>
        <div className="pointer-events-none absolute bottom-32 right-12 text-accent/15 animate-float-delay hidden lg:block">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor" className="w-12 h-12 rotate-45">
            <path d="M30 2 L35 15 L48 20 L35 25 L30 38 L25 25 L12 20 L25 15 Z" />
          </svg>
        </div>

        {/* Main content with decorative frame */}
        <AnimateOnScroll animation="fadeUp" duration={1.2} immediate>
        <div className="relative flex max-w-2xl flex-col items-center text-center mt-6 md:mt-6">
          <div className="absolute -inset-4 rounded-3xl border border-accent/10 pointer-events-none" />
          <div className="absolute -inset-8 rounded-4xl border border-accent/5 pointer-events-none" />

          <p className="font-sans mb-5 text-base font-medium tracking-[0.35em] text-accent uppercase">
            We&apos;re getting married
          </p>

          <div className="mb-6 flex w-24 items-center justify-center gap-2">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-accent/50" />
            <span className="text-accent/60 text-lg">♥</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-accent/50" />
          </div>

          <h1 className="font-serif mb-6 text-6xl font-semibold tracking-tight text-foreground sm:text-7xl md:text-8xl drop-shadow-sm">
            Saurabh & Disha
          </h1>

          <div className="mb-6 rounded-full bg-accent/10 px-6 py-2">
            <p className="font-sans text-xl font-medium text-foreground sm:text-2xl">
              February 10, 2026
            </p>
          </div>

          <p className="font-sans mb-10 max-w-lg text-lg leading-relaxed text-muted">
            Join us as we begin our forever together — a celebration of love, family, and new beginnings.
          </p>

          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <a
              href="#gallery"
              className="rounded-full border-2 border-accent/50 bg-accent/10 px-10 py-4 font-medium text-foreground transition-all hover:bg-accent/20 hover:border-accent/70"
            >
              See Our Moments
            </a>
            <a
              href="#wedding"
              className="rounded-full border border-accent/30 px-10 py-4 font-medium text-muted transition-all hover:text-foreground hover:border-accent/50"
            >
              Wedding Details
            </a>
          </div>

          {/* Countdown - in flow below buttons */}
          <div className="mt-12 pt-8 border-t border-accent/20 w-full max-w-xl">
            <p className="font-sans mb-2 text-center text-xs font-medium uppercase tracking-wider text-accent">Counting down to the big day</p>
            <CountdownTimer targetDate="2026-02-10" />
          </div>
        </div>
        </AnimateOnScroll>
      </section>

      {/* Our Story */}
      <section id="story" className="relative border-t border-accent/20 bg-section-alt/50 px-6 py-20 pt-28 overflow-hidden scroll-mt-20">
        {/* Background - matches site */}
        <div className="absolute inset-0 -z-10" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
        
        <AnimateOnScroll animation="fadeUp">
          <div className="relative max-w-6xl mx-auto">
            {/* Section header with decorative elements */}
            <div className="text-center mb-20 space-y-6">
              {/* Decorative top flourish */}
              <div className="flex items-center justify-center gap-4">
                <svg className="w-12 h-12 text-accent/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
                </svg>
              </div>
              
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground">
                Our Story
              </h2>
              
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
                <span className="font-sans text-accent text-sm tracking-widest">CHAPTER ONE</span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent via-accent/50 to-transparent" />
              </div>
            </div>

            {/* Main content with creative layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image side with artistic frame */}
              <div className="relative group">
                {/* Decorative corner elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-accent/30 rounded-tl-3xl" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-accent/30 rounded-br-3xl" />
                
                {/* Floating accent shape */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500" />
                
                {/* Main image container */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
                  
                  <Image
                    src="/M4_05730%20%281%29.JPG"
                    alt="Saurabh & Disha"
                    width={500}
                    height={625}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Decorative heart overlay */}
                  <div className="absolute bottom-6 right-6 z-20 bg-section-alt/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-accent/20">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Timeline dot connector (visible only on large screens) */}
                <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-px bg-gradient-to-r from-accent/50 to-transparent">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full border-2 border-section-alt shadow-lg" />
                </div>
              </div>

              {/* Story content side */}
              <div className="space-y-8">
                {/* Story text with elegant styling */}
                <div className="relative">
                  {/* Quote mark decoration */}
                  <div className="absolute -top-6 -left-2 lg:-left-6 text-accent/20 text-7xl font-serif leading-none">
                    "
                  </div>
                  
                  <div className="relative space-y-6 pl-4 lg:pl-8">
                    <p className="font-sans text-xl md:text-2xl leading-relaxed text-muted">
                      From the moment we met, we knew there was something special. Every laugh, every adventure, and every quiet moment has led us here — ready to say &quot;I do&quot; and start our greatest chapter together.
                    </p>
                    
                    <p className="font-sans text-lg leading-relaxed text-muted/90">
                      Our journey has been filled with unforgettable memories, shared dreams, and endless love. This is just the beginning of our forever.
                    </p>
                  </div>
                </div>

                {/* Elegant info cards */}
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="backdrop-blur-sm rounded-xl p-6 border border-accent/20 bg-background/40 text-center space-y-2">
                    <p className="font-sans text-xs tracking-widest uppercase text-accent font-medium">Years Together</p>
                    <p className="font-serif text-3xl text-foreground">∞</p>
                  </div>
                  <div className="backdrop-blur-sm rounded-xl p-6 border border-accent/20 bg-background/40 text-center space-y-2">
                    <p className="font-sans text-xs tracking-widest uppercase text-accent font-medium">Memories Made</p>
                    <p className="font-serif text-3xl text-foreground">Countless</p>
                  </div>
                </div>

                {/* Signature-style ending */}
                <div className="pt-8 space-y-4">
                  <div className="h-px bg-gradient-to-r from-accent/30 to-transparent w-32" />
                  <p className=" text-2xl text-accent">
                    #SaurabhKiDisha
                  </p>
                  {/* <p className="font-sans text-sm text-muted tracking-wide">
                    Saurabh &amp; Disha • Est. [Your Year]
                  </p> */}
                </div>
              </div>
            </div>

            {/* Decorative bottom element */}
            <div className="mt-20 flex justify-center">
              <div className="flex items-center gap-3">
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
                <svg className="w-6 h-6 text-accent/40" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <div className="h-px w-20 bg-gradient-to-l from-transparent via-accent/40 to-transparent" />
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="bg-section-alt/30 px-6 py-20 pt-28 scroll-mt-20">
        <AnimateOnScroll animation="fadeUp">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif mb-2 text-center text-4xl font-semibold text-foreground sm:text-5xl md:text-6xl">
            Our Photos
          </h2>
          <p className="font-sans mb-12 text-center text-lg text-muted">
            Memories we&apos;ve captured along the way
          </p>

          <PhotoGallerySlider />
        </div>
        </AnimateOnScroll>
      </section>

      {/* Videos */}
      <section id="videos" className="border-t border-accent/20 bg-section-alt/50 px-6 py-20 pt-28 scroll-mt-20">
        <AnimateOnScroll animation="fadeUp">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif mb-2 text-center text-4xl font-semibold text-foreground sm:text-5xl md:text-6xl">
            Our Videos
          </h2>
          <p className="font-sans mb-12 text-center text-lg text-muted">
            Moments in motion
          </p>

          <div className="mx-auto w-full max-w-5xl lg:max-w-6xl">
            <p className="font-sans mb-4 text-center text-base font-medium uppercase tracking-wider text-accent">Pre-Wedding Teaser</p>
            <AutoplayVideo
              src="/SAURABH%20%26%20DISHA%20PRE%20WEDDING%20TEASER.mp4"
              className="w-full rounded-xl shadow-xl"
            />
          </div>
        </div>
        </AnimateOnScroll>
      </section>

      {/* Wedding Details */}
      <section id="wedding" className="px-6 py-20 pt-28 scroll-mt-20">
        <AnimateOnScroll animation="fadeUp">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif mb-2 text-center text-4xl font-semibold text-foreground sm:text-5xl md:text-6xl">
            Wedding Day
          </h2>
          <p className="font-sans mb-12 text-center text-xl text-muted">
            Save the date
          </p>

          <div className="mb-12 text-center">
            <p className="font-sans mb-3 text-lg font-medium uppercase tracking-wider text-accent">Date</p>
            <p className="font-serif text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">10th February 2026</p>
          </div>

          <div className="mb-4 text-center">
            <p className="font-sans mb-3 text-lg font-medium uppercase tracking-wider text-accent">Venue</p>
            <p className="font-serif text-2xl font-semibold text-foreground sm:text-3xl md:text-4xl">Club Mahindra Resort</p>
            <p className="font-sans mt-2 text-lg text-muted">NH-8, Near Indo American School, Udaipur, Rajasthan 313001</p>
            <a
              href="https://maps.google.com/?q=Club+Mahindra+Udaipur+Rajasthan"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-lg text-accent underline underline-offset-2 transition-colors hover:opacity-80"
            >
              Open in Google Maps →
            </a>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-accent/20 shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=Club+Mahindra+Udaipur+Rajasthan&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Club Mahindra Resort Udaipur Location"
              className="block w-full"
            />
          </div>
        </div>
        </AnimateOnScroll>
      </section>

      {/* Footer - matches site dark theme */}
      <footer className="relative overflow-hidden border-t border-accent/20 bg-section-alt">
        {/* Floating decorative shapes */}
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-accent/40 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-accent/40 rounded-full" />
        {/* Circle with couple photo */}
        <div className="absolute top-20 right-20 w-40 h-40 overflow-hidden rounded-full border-2 border-accent/30 shadow-xl">
          <Image
            src="/M4_05906.jpeg"
            alt="Saurabh & Disha"
            width={160}
            height={160}
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-24">
          {/* Main asymmetric content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
            {/* Left: Large brand section */}
            <div className="lg:col-span-7 space-y-10">
              {/* Logo */}
              <a href="#hero" className="inline-block">
                <Image 
                  src="/logo.png" 
                  alt="Saurabh & Disha" 
                  width={200} 
                  height={100} 
                  className="h-20 w-auto object-contain sm:h-24" 
                />
              </a>

              {/* Names with decorative line */}
              <div className="space-y-6">
                <div className="flex items-end gap-4">
                  <div className="space-y-2">
                    <h3 className="font-display text-5xl lg:text-6xl text-foreground leading-none">
                      Saurabh
                    </h3>
                    <div className="flex items-center gap-3">
                      <div className="h-0.5 w-12 bg-accent" />
                      <span className="font-display text-3xl text-accent">&</span>
                      <div className="h-0.5 w-12 bg-accent" />
                    </div>
                    <h3 className="font-display text-5xl lg:text-6xl text-foreground leading-none">
                      Disha
                    </h3>
                  </div>
                </div>
                
                <p className="text-accent text-base tracking-[0.25em] font-medium">
                  #SaurabhKiDisha
                </p>
              </div>

              {/* Message in artistic box */}
              <div className="relative max-w-lg">
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-accent/40" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-accent/40" />
                <div className="px-8 py-10 space-y-4">
                  <p className="text-muted leading-relaxed">
                    Thank you for being part of our journey. Your love and blessings mean everything to us as we step into this beautiful new chapter together.
                  </p>
                  <div className="flex items-center gap-3 pt-4">
                    <div className="flex-1 h-px bg-gradient-to-r from-accent/50 to-transparent" />
                    <p className="font-display text-lg text-foreground italic">With gratitude</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Compact links and info */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
              {/* Navigation in columns */}
              <div className="space-y-6">
                <h4 className="text-xs tracking-[0.3em] uppercase text-accent font-semibold">
                  Quick Links
                </h4>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                  <a href="#hero" className="footer-link">Home</a>
                  <a href="#story" className="footer-link">Our Story</a>
                  <a href="#gallery" className="footer-link">Photos</a>
                  <a href="#videos" className="footer-link">Videos</a>
                  <a href="#wedding" className="footer-link">Wedding</a>
                </div>
              </div>

              {/* Event info card - Save the Date */}
              <div className="rounded-2xl p-6 border border-accent backdrop-blur-sm space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-accent">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  <span className="text-xs tracking-widest uppercase font-medium">Save the Date</span>
                </div>
                <p className="font-display text-2xl text-foreground">February 10, 2026</p>
                <p className="text-sm text-muted">Club Mahindra Resort, Udaipur</p>
              </div>

              {/* Creator signature style */}
              <div className="space-y-3">
                <div className="h-px bg-gradient-to-r from-accent/30 to-transparent" />
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-muted">Designed by</span>
                  <a
                    href="https://yashpokharna.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-lg text-foreground hover:text-accent transition-colors underline decoration-accent/30 decoration-2 underline-offset-4 hover:decoration-accent"
                  >
                    Yash Pokharna
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
