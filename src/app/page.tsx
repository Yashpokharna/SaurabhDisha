import Image from "next/image";
import AutoplayVideo from "./components/AutoplayVideo";
import CountdownTimer from "./components/CountdownTimer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Fixed nav */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-accent/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-8 px-6 py-3">
          <a href="#hero" className="shrink-0 rounded-lg bg-white/30 px-2 py-1">
            <Image src="/logo.png" alt="Saurabh & Disha" width={80} height={40} className="h-9 w-auto object-contain" />
          </a>
          <a href="#hero" className="text-base font-medium text-foreground hover:text-accent transition-colors">Home</a>
          <a href="#gallery" className="text-base font-medium text-foreground hover:text-accent transition-colors">Photos</a>
          <a href="#videos" className="text-base font-medium text-foreground hover:text-accent transition-colors">Videos</a>
          <a href="#wedding" className="text-base font-medium text-foreground hover:text-accent transition-colors">Wedding</a>
        </div>
      </nav>

      {/* Hero - Redesigned */}
      <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16 pb-20">
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
        <div className="relative flex max-w-2xl flex-col items-center text-center">
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
        </div>

        {/* Scroll indicator */}
        <a
          href="#story"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted/70 hover:text-accent transition-colors"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </section>

      {/* Our Story */}
      <section id="story" className="border-t border-accent/20 bg-section-alt/50 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif mb-6 text-4xl font-semibold text-foreground sm:text-5xl md:text-6xl">
            Our Story
          </h2>
          <p className="font-sans text-lg leading-relaxed text-muted">
            From the moment we met, we knew there was something special. Every laugh, every adventure,
            and every quiet moment has led us here — ready to say &quot;I do&quot; and start our greatest
            chapter together. Add your own story here!
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="bg-section-alt/30 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif mb-2 text-center text-4xl font-semibold text-foreground sm:text-5xl md:text-6xl">
            Our Photos
          </h2>
          <p className="font-sans mb-12 text-center text-lg text-muted">
            Memories we&apos;ve captured along the way
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-lg border-2 border-dashed border-accent/40 bg-background flex items-center justify-center"
              >
                <div className="flex flex-col items-center gap-2 text-muted">
                  <svg className="h-12 w-12 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <span className="text-sm font-medium">Add photo {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section id="videos" className="border-t border-accent/20 bg-section-alt/50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif mb-2 text-center text-4xl font-semibold text-foreground sm:text-5xl md:text-6xl">
            Our Videos
          </h2>
          <p className="font-sans mb-12 text-center text-lg text-muted">
            Moments in motion
          </p>

          <div className="mx-auto mb-8 w-full max-w-5xl lg:max-w-6xl">
            <p className="font-sans mb-4 text-center text-base font-medium uppercase tracking-wider text-accent">Pre-Wedding Teaser</p>
            <AutoplayVideo
              src="/SAURABH%20%26%20DISHA%20PRE%20WEDDING%20TEASER.mp4"
              className="w-full rounded-xl shadow-xl"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-video overflow-hidden rounded-lg border-2 border-dashed border-accent/40 bg-background flex items-center justify-center"
              >
                <div className="flex flex-col items-center gap-2 text-muted">
                  <svg className="h-16 w-16 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  <span className="text-sm font-medium">Add video {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Details */}
      <section id="wedding" className="px-6 py-20">
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

          <div className="mb-8">
            <p className="font-sans mb-4 text-center text-lg font-medium uppercase tracking-wider text-accent">
              Counting down to the big day
            </p>
            <CountdownTimer targetDate="2026-02-10" />
          </div>

          <div className="mb-4 text-center">
            <p className="font-sans mb-3 text-lg font-medium uppercase tracking-wider text-accent">Venue</p>
            <p className="font-serif text-2xl font-semibold text-foreground sm:text-3xl md:text-4xl">Club Mahindra Resort</p>
            <p className="font-sans mt-2 text-lg text-muted">NH-8, Lai, Udaipur, Rajasthan 313001</p>
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

          <div className="mt-12 rounded-xl border-2 border-dashed border-accent/40 bg-section-alt/50 p-12 text-center">
            <p className="font-sans text-lg text-muted">Add more wedding details — schedule, dress code, RSVP info, etc.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent/20 px-6 py-12">
        <div className="flex justify-center rounded-lg bg-white/30 py-4 px-6">
          <Image src="/logo.png" alt="Saurabh & Disha" width={160} height={80} className="h-14 w-auto object-contain" />
        </div>
        <p className="font-sans mt-2 text-center text-sm text-muted">
          With love, together forever
        </p>
      </footer>
    </div>
  );
}
