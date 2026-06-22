import { site } from "../config/site"
import FadeIn from "./FadeIn"

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-24">
      <FadeIn>
        {site.showOpenToOpportunities && (
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Open to opportunities
          </span>
        )}

        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Software Engineer &amp; Builder
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Columbia-trained, New York-based. I build AI agents and products at
          Avoca — helping enterprise teams move faster with intelligent
          automation.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Get in touch
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-border-strong hover:bg-gray-50"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-border-strong hover:bg-gray-50"
          >
            LinkedIn
          </a>
        </div>
      </FadeIn>
    </section>
  )
}
