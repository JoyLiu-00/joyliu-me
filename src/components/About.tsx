import { background } from "../config/site"
import FadeIn from "./FadeIn"

export default function About() {
  return (
    <section id="about" className="border-t border-border bg-gray-50/50">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <FadeIn>
          <h2 className="text-sm font-medium uppercase tracking-widest text-subtle">
            About
          </h2>
          <p className="mt-3 max-w-lg text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Background
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {background.map((card, i) => (
            <FadeIn key={card.label} delay={i * 0.08}>
              <article className="rounded-xl border border-border bg-white p-6 transition-colors hover:border-border-strong">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-subtle">
                    {card.label}
                  </p>
                  {card.period && (
                    <time className="shrink-0 text-xs text-subtle">
                      {card.period}
                    </time>
                  )}
                </div>
                <h3 className="mt-2 text-base font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{card.subtitle}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
