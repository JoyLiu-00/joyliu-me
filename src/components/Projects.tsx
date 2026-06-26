import { projects } from "../config/site"
import FadeIn from "./FadeIn"

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <FadeIn>
          <h2 className="text-sm font-medium uppercase tracking-widest text-subtle">
            Projects
          </h2>
          <p className="mt-3 max-w-lg text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Things I&apos;m building
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.08}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border border-border bg-white p-6 transition-colors hover:border-border-strong hover:bg-gray-50"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-accent-hover">
                      {project.name}
                    </h3>
                    {"status" in project && project.status && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2 py-0.5 text-[11px] font-medium text-muted">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {project.status}
                      </span>
                    )}
                  </div>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <p className="mt-4 text-xs text-subtle">
                  {project.url.replace("https://", "")}
                </p>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
