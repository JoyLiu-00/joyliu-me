import { interests } from "../config/site"
import FadeIn from "./FadeIn"

export default function Interests() {
  return (
    <section className="border-t border-border bg-gray-50/50">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <FadeIn>
          <h2 className="text-sm font-medium uppercase tracking-widest text-subtle">
            Interests
          </h2>
          <p className="mt-3 max-w-lg text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Outside of work
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ul className="mt-10 flex flex-wrap gap-3">
            {interests.map((interest) => (
              <li
                key={interest}
                className="rounded-lg border border-border bg-white px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-border-strong"
              >
                {interest}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  )
}
