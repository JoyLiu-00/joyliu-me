import { skills } from "../config/site"
import FadeIn from "./FadeIn"

export default function Skills() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <FadeIn>
          <h2 className="text-sm font-medium uppercase tracking-widest text-subtle">
            Skills
          </h2>
          <p className="mt-3 max-w-lg text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Technologies &amp; expertise
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ul className="mt-10 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li key={skill}>
                <span className="inline-block rounded-full border border-border bg-white px-4 py-1.5 text-sm text-foreground transition-colors hover:border-border-strong hover:bg-gray-50">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  )
}
