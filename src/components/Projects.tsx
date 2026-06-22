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
            Things I&apos;ve built
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
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-accent-hover">
                    {project.name}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="text-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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

          <FadeIn delay={0.16}>
            <div className="flex h-full flex-col items-center justify-center rounded-xl border border-dashed border-border bg-gray-50/50 p-6 text-center">
              <p className="text-sm font-medium text-subtle">More coming soon</p>
              <p className="mt-1 text-xs text-subtle">
                Placeholder for future projects
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
