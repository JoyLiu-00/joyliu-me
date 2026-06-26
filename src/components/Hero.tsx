import { site } from "../config/site"
import FadeIn from "./FadeIn"

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-24">
      <FadeIn>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-12">
          <div className="shrink-0">
            <img
              src={site.profileImage}
              alt={`${site.name} profile`}
              className="h-36 w-36 rounded-full border border-border object-cover shadow-sm sm:h-44 sm:w-44"
            />
          </div>

          <div className="min-w-0 flex-1">
            {site.showOpenToChat && (
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Open to chat / network
              </span>
            )}

            <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:whitespace-nowrap sm:text-4xl lg:text-5xl">
              {site.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {site.subheadline}
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
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
