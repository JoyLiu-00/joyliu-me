import { building } from "../config/site"
import FadeIn from "./FadeIn"

export default function Experience() {
  return (
    <section id="building" className="border-t border-border bg-gray-50/50">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <FadeIn>
          <h2 className="text-sm font-medium uppercase tracking-widest text-subtle">
            What I&apos;m building
          </h2>
          <p className="mt-3 max-w-lg text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            At Avoca
          </p>
        </FadeIn>

        <div className="mt-12 space-y-10">
          {building.map((company, i) => (
            <FadeIn key={company.company} delay={i * 0.1}>
              <article className="rounded-xl border border-border bg-white p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-foreground">
                  {company.company}
                </h3>

                <div className="mt-6">
                  {company.roles.map((role, roleIndex) => {
                    const isLast = roleIndex === company.roles.length - 1

                    return (
                      <div key={role.title} className="relative flex gap-4">
                        <div className="flex flex-col items-center">
                          <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-foreground bg-white" />
                          {!isLast && (
                            <span className="my-1 w-px flex-1 bg-border" />
                          )}
                        </div>

                        <div className={`min-w-0 flex-1 ${isLast ? "" : "pb-8"}`}>
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                            <div>
                              <h4 className="text-base font-semibold text-foreground">
                                {role.title}
                              </h4>
                            </div>
                            <time className="mt-1 shrink-0 text-sm text-subtle sm:mt-0">
                              {role.period}
                            </time>
                          </div>
                          <ul className="mt-4 space-y-2">
                            {role.bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className="flex gap-2 text-sm leading-relaxed text-muted"
                              >
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-subtle" />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
