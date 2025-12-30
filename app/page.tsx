import React from "react";

export default function RightBesideSinglePage() {
  const NAV = [
    { href: "#team", label: "Team" },
    { href: "#mission", label: "Mission" },
    { href: "#what", label: "What We Do" },
        { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            {/* Badge logo */}
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-transparent">
              <img
                src="/brand/logo-badge.png"
                alt="Right Beside badge"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">Right Beside</div>
              <div className="text-xs text-neutral-500">Boca Raton, Florida</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
              >
                {n.label}
              </a>
            ))}
          </nav>

          
        </div>

        {/* Mobile Nav */}
        <div className="mx-auto max-w-6xl px-4 pb-3 md:hidden">
          <div className="flex flex-wrap gap-2">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-lg border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-700 hover:border-neutral-300 hover:text-neutral-900"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700">
              Based in Boca Raton • Starting local • Built to scale nationwide
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Essential aid kits. Delivered with dignity.
            </h1>

            <p className="mt-4 max-w-xl text-neutral-600 md:text-lg">
              Right Beside collects donated items and assembles practical kits for people who need aid.
              We start in South Florida and build systems to expand nationwide.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-xl border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-900 hover:border-neutral-400"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <StatCard title="In-kind first" desc="Items go directly into kits." />
              <StatCard title="Partner-ready" desc="Distribution can scale through partners." />
              <StatCard title="Repeatable" desc="Standard kits = consistent impact." />
            </div>
          </div>

          {/* Right-side brand block */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            {/* Wide logo */}
            <div className="flex items-center justify-center rounded-2xl border border-neutral-200 bg-transparent px-6 py-8">
              <img
                src="/brand/logo-wide.png"
                alt="Right Beside logo"
                className="max-h-32 w-auto object-contain"
              />
            </div>

            <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <div className="text-sm font-semibold">Location</div>
              <div className="mt-1 text-sm text-neutral-600">
                Boca Raton / South Florida
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <Section
        id="team"
        title="Team"
        subtitle="Founder-led with a governing board (names can be added later)."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold">Founder</div>
            <div className="mt-2 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-600">
              [Founder Name — add later]
            </div>
          </Card>

          <Card>
            <div className="text-sm font-semibold">Board of Directors</div>
            <div className="mt-2 space-y-2">
              {[
                "[Director 1 — add later]",
                "[Director 2 — add later]",
                "[Director 3 — add later]",
              ].map((x) => (
                <div
                  key={x}
                  className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-600"
                >
                  {x}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Mission */}
      <Section
        id="mission"
        title="Mission"
        subtitle="Simple, scalable, and not locked to one cause or one location."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold">One-sentence mission</div>
            <p className="mt-3 text-sm text-neutral-700">
              To provide essential aid through thoughtfully assembled kits for people who need support during times of hardship.
            </p>
          </Card>

          <Card>
            <div className="text-sm font-semibold">What we’re about</div>
            <p className="mt-3 text-sm text-neutral-700">
              We turn donated items into standardized kits that meet basic life needs. We start in South Florida,
              operate responsibly, and build repeatable systems to expand nationwide.
            </p>
          </Card>
        </div>
      </Section>

      {/* What we do */}
      <Section
        id="what"
        title="What We Do"
        subtitle="We assemble and distribute essential aid kits using donated items."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <div className="text-sm font-semibold">Collect</div>
            <p className="mt-2 text-sm text-neutral-700">
              We collect donated essential items from individuals, schools, and community groups.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">Assemble</div>
            <p className="mt-2 text-sm text-neutral-700">
              Items are organized into standardized kits designed to meet basic life needs.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">Deliver</div>
            <p className="mt-2 text-sm text-neutral-700">
              Kits are delivered locally and through partners to people who need support.
            </p>
          </Card>
        </div>
      </Section>

      {/* Donate */}
      

      {/* Contact */}
      <Section
        id="contact"
        title="Contact Us"
        subtitle="Reach us by email or on Instagram."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold">Email</div>
            <div className="mt-2 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-600">
              rightbeside2026@gmail.com
            </div>

            <div className="mt-6 text-sm font-semibold">Location</div>
            <div className="mt-2 text-sm text-neutral-700">Boca Raton, Florida</div>
          </Card>

          <Card>
            <div className="text-sm font-semibold">Social</div>
            <div className="mt-3 space-y-3">
              <div className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-600">
                Instagram: <a className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-700" href="https://www.instagram.com/rightbeside2026/" target="_blank" rel="noreferrer">@rightbeside2026</a>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-600">
                TikTok: <a className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-700" href="https://www.tiktok.com/@rightbeside.2026" target="_blank" rel="noreferrer">@rightbeside.2026</a>
              </div>
              <div className="text-xs text-neutral-500">
                Instagram is live; TikTok can be added later. Contact form can be added when you want.
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-10 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Right Beside • Boca Raton, FL</div>
          <div className="text-xs text-neutral-500">Built for in-kind donations and scalable distribution.</div>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
          {subtitle ? <p className="mt-3 text-neutral-600">{subtitle}</p> : null}
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
      {children}
    </div>
  );
}

function StatCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-xs text-neutral-600">{desc}</div>
    </div>
  );
}

function KitCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="text-lg font-semibold">{title}</div>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-700">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
