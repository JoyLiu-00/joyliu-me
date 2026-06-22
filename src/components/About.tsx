import { site } from "../config/site"
import FadeIn from "./FadeIn"

const cards = [
  {
    label: "Undergraduate",
    title: "University of British Columbia",
    subtitle: "Computer Science",
  },
  {
    label: "Graduate",
    title: "Columbia University",
    subtitle: "MS Operations Research",
  },
  {
    label: "Currently",
    title: "Software Engineer at Avoca",
    subtitle: "AI agents & enterprise products",
  },
  {
    label: "Location",
    title: site.location,
    subtitle: "United States",
  },
] as const

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
          {cards.map((card, i) => (
            <FadeIn key={card.label} delay={i * 0.08}>
              <article className="rounded-xl border border-border bg-white p-6 transition-colors hover:border-border-strong">
                <p className="text-xs font-medium uppercase tracking-wider text-subtle">
                  {card.label}
                </p>
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
