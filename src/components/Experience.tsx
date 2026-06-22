import { experiences } from "../config/site"
import FadeIn from "./FadeIn"

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-gray-50/50">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <FadeIn>
          <h2 className="text-sm font-medium uppercase tracking-widest text-subtle">
            Experience
          </h2>
          <p className="mt-3 max-w-lg text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Where I&apos;ve worked
          </p>
        </FadeIn>

        <div className="mt-12 space-y-10">
          {experiences.map((job, i) => (
            <FadeIn key={job.title} delay={i * 0.1}>
              <article className="rounded-xl border border-border bg-white p-6 sm:p-8">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {job.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted">{job.company}</p>
                  </div>
                  <time className="mt-2 text-sm text-subtle sm:mt-0">
                    {job.period}
                  </time>
                </div>
                <ul className="mt-5 space-y-2">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-subtle" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
