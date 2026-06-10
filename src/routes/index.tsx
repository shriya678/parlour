import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import interiorImg from "@/assets/interior.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceMakeup from "@/assets/service-makeup.jpg";
import serviceSkin from "@/assets/service-skin.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Lilas — Hair & Beauty Atelier" },
      { name: "description", content: "An intimate hair, color and beauty atelier. Couture cuts, lived-in color and quiet luxury treatments by appointment." },
      { property: "og:title", content: "Maison Lilas — Hair & Beauty Atelier" },
      { property: "og:description", content: "Couture cuts, lived-in color and quiet luxury treatments by appointment." },
    ],
  }),
  component: Index,
});

const services = [
  {
    n: "01",
    title: "Cut & Style",
    desc: "Precision cuts shaped to bone structure and the way you wear your hair through the week.",
    price: "from £85",
    img: serviceHair,
  },
  {
    n: "02",
    title: "Colour Atelier",
    desc: "Hand-painted balayage, soft baby-lights and bespoke gloss — composed in soft blush rooms.",
    price: "from £180",
    img: serviceMakeup,
  },
  {
    n: "03",
    title: "Skin & Ritual",
    desc: "Sculpting facials, lash and brow design, bridal makeup. Quiet, slow, considered.",
    price: "from £120",
    img: serviceSkin,
  },
];

const stylists = [
  { name: "Élodie Marchand", role: "Founder · Colourist" },
  { name: "Ines Laurent",   role: "Senior Stylist" },
  { name: "Mila Okafor",    role: "Skin Therapist" },
  { name: "Juno Sasaki",    role: "Makeup Artist" },
];

const testimonials = [
  {
    quote: "I walked out feeling like the most considered version of myself. Élodie's colour work is poetry.",
    name: "Camille R.",
    note: "Notting Hill",
  },
  {
    quote: "Maison Lilas isn't a salon, it's an afternoon. The kind of place you build your week around.",
    name: "Aïcha B.",
    note: "Marylebone",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <About />
      <Stylists />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <a href="#top" className="font-display text-2xl tracking-wide text-foreground">
          Maison <em className="text-primary">Lilas</em>
        </a>
        <nav className="hidden items-center gap-10 text-sm text-foreground/80 md:flex">
          <a href="#services" className="transition hover:text-primary">Services</a>
          <a href="#about" className="transition hover:text-primary">Atelier</a>
          <a href="#stylists" className="transition hover:text-primary">Stylists</a>
          <a href="#booking" className="transition hover:text-primary">Visit</a>
        </nav>
        <a
          href="#booking"
          className="rounded-full border border-foreground/20 bg-background/40 px-5 py-2.5 text-xs uppercase tracking-[0.25em] text-foreground backdrop-blur transition hover:bg-primary hover:text-primary-foreground hover:border-primary"
        >
          Book
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="A guest at Maison Lilas with a soft chignon"
          width={1280}
          height={1600}
          className="h-full w-full object-cover object-right opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-24 md:px-10">
        <p className="eyebrow mb-8">Est. 2014 · Marylebone, London</p>
        <h1 className="max-w-3xl font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] tracking-tight text-foreground">
          A quiet atelier <br />
          for <em className="text-primary">considered</em> <br />
          beauty.
        </h1>
        <p className="mt-10 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
          Cuts, colour and skin rituals composed slowly, one guest at a time. No rush, no playlist
          on shuffle — just the version of you that you've been meaning to meet.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-5">
          <a
            href="#booking"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm uppercase tracking-[0.25em] text-primary-foreground shadow-soft transition hover:bg-primary/90"
          >
            Reserve a chair
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
          <a href="#services" className="text-sm uppercase tracking-[0.25em] text-foreground/70 hover:text-primary">
            View the menu
          </a>
        </div>

        <div className="mt-24 grid max-w-2xl grid-cols-3 gap-8 border-t border-border pt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <div>
            <div className="font-display text-4xl text-foreground normal-case tracking-normal">11</div>
            <div className="mt-2">years in practice</div>
          </div>
          <div>
            <div className="font-display text-4xl text-foreground normal-case tracking-normal">4</div>
            <div className="mt-2">chairs only</div>
          </div>
          <div>
            <div className="font-display text-4xl text-foreground normal-case tracking-normal">∞</div>
            <div className="mt-2">cups of jasmine</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["Balayage", "·", "Couture Cuts", "·", "Bridal", "·", "Skin Sculpting", "·", "Brow Design", "·", "Lived-in Colour", "·"];
  return (
    <div className="border-y border-border bg-secondary/40 py-6 overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap font-display text-2xl italic text-primary/80 animate-[scroll_40s_linear_infinite]">
        {[...words, ...words, ...words].map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
        <div>
          <p className="eyebrow mb-6">The Menu</p>
          <h2 className="max-w-2xl font-display text-5xl leading-[1.05] md:text-7xl">
            Three rooms.<br />
            One <em className="text-primary">unhurried</em> afternoon.
          </h2>
        </div>
        <p className="max-w-sm text-muted-foreground">
          Each appointment is private. We block the room, pour the tea and begin only when you've
          settled in.
        </p>
      </div>

      <div className="mt-20 grid gap-10 md:grid-cols-3">
        {services.map((s) => (
          <article key={s.title} className="group">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted shadow-petal">
              <img
                src={s.img}
                alt={s.title}
                width={800}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 font-display text-xl text-background mix-blend-difference">
                {s.n}
              </span>
            </div>
            <div className="mt-6 flex items-baseline justify-between gap-4">
              <h3 className="font-display text-3xl">{s.title}</h3>
              <span className="text-xs uppercase tracking-[0.2em] text-primary">{s.price}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-2 md:items-center md:gap-24 md:px-10 md:py-40">
        <div className="relative">
          <img
            src={interiorImg}
            alt="The Maison Lilas atelier interior"
            width={1600}
            height={1100}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-sm object-cover shadow-soft"
          />
          <div className="absolute -bottom-6 -right-6 hidden h-40 w-40 rounded-full bg-primary md:block" />
        </div>

        <div>
          <p className="eyebrow mb-6">The Atelier</p>
          <h2 className="font-display text-5xl leading-[1.05] md:text-6xl">
            A small house, <br />
            <em className="text-primary">softly</em> kept.
          </h2>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
            Maison Lilas began as a single chair in a flat above a flower shop. A decade on, we are
            still small on purpose — four chairs, a quiet skin room, and a team that's been together
            longer than most marriages.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            We use Oway, K18 and Augustinus Bader exclusively. Tea is loose-leaf. The playlist is
            chosen each morning. The light, when we can help it, is candle.
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8">
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-primary">Address</dt>
              <dd className="mt-2 font-display text-xl">14 Chiltern Street<br />Marylebone, W1U</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-primary">Hours</dt>
              <dd className="mt-2 font-display text-xl">Tue – Sat<br />10 — 19</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function Stylists() {
  return (
    <section id="stylists" className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <p className="eyebrow mb-6">The Hands</p>
      <h2 className="max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl">
        Four stylists. <em className="text-primary">One</em> point of view.
      </h2>

      <div className="mt-20 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {stylists.map((s, i) => (
          <div
            key={s.name}
            className="group relative flex aspect-[3/4] flex-col justify-end bg-card p-8 transition hover:bg-primary"
          >
            <span className="absolute right-6 top-6 font-display text-sm text-muted-foreground transition group-hover:text-primary-foreground/70">
              0{i + 1}
            </span>
            <h3 className="font-display text-2xl leading-tight text-foreground transition group-hover:text-primary-foreground">
              {s.name}
            </h3>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition group-hover:text-primary-foreground/80">
              {s.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-2 md:px-10 md:py-40">
        {testimonials.map((t) => (
          <figure key={t.name} className="flex flex-col">
            <blockquote className="font-display text-3xl italic leading-snug md:text-4xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4 text-sm">
              <span className="h-px w-10 bg-primary-foreground/40" />
              <span className="uppercase tracking-[0.25em]">{t.name}</span>
              <span className="text-primary-foreground/60">— {t.note}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

const BOOKING_EMAIL = "hello@maisonlilas.co";

function Booking() {
  const [form, setForm] = useState({ name: "", email: "", service: "", note: "" });

  const update = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Booking enquiry — ${form.name || "New guest"}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Preferred service: ${form.service}`,
      "",
      "Note:",
      form.note,
    ].join("\n");
    window.location.href = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="booking" className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <div className="grid gap-16 md:grid-cols-[1fr_auto] md:items-end md:gap-24">
        <div>
          <p className="eyebrow mb-6">Visit</p>
          <h2 className="font-display text-5xl leading-[1.02] md:text-8xl">
            Reserve <em className="text-primary">your</em><br />afternoon.
          </h2>
          <p className="mt-8 max-w-md text-muted-foreground">
            New guests begin with a fifteen-minute consultation. Tea included, naturally. Same-day
            bookings are rare, but we keep a quiet list — write to us.
          </p>

          <form className="mt-12 grid max-w-xl gap-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" type="text" placeholder="Your full name" value={form.name} onChange={update("name")} required />
              <Field label="Email" type="email" placeholder="you@example.com" value={form.email} onChange={update("email")} required />
            </div>
            <Field label="Preferred service" type="text" placeholder="Cut & style, colour, skin…" value={form.service} onChange={update("service")} />
            <Field label="Anything we should know" type="text" placeholder="A note for the team" value={form.note} onChange={update("note")} />
            <button
              type="submit"
              className="mt-4 inline-flex items-center justify-center gap-3 rounded-full bg-foreground px-8 py-4 text-sm uppercase tracking-[0.25em] text-background transition hover:bg-primary"
            >
              Send enquiry →
            </button>
          </form>
        </div>

        <aside className="space-y-6 border-l border-border pl-10 text-sm text-muted-foreground">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Call</p>
            <p className="mt-2 font-display text-2xl text-foreground">+44 20 7946 0214</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Write</p>
            <p className="mt-2 font-display text-2xl text-foreground">hello@maisonlilas.co</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Follow</p>
            <p className="mt-2 font-display text-2xl text-foreground">@maison.lilas</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({
  label,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <label className="group block">
      <span className="block text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="mt-2 w-full border-b border-border bg-transparent py-3 text-base text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-primary"
      />
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
        <div className="font-display text-xl text-foreground">
          Maison <em className="text-primary">Lilas</em>
        </div>
        <p>© {new Date().getFullYear()} Maison Lilas Atelier. Composed with care in Marylebone.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary">Instagram</a>
          <a href="#" className="hover:text-primary">Journal</a>
          <a href="#" className="hover:text-primary">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
