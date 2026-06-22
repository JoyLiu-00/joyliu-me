import { navLinks, site } from "../config/site"
import FadeIn from "./FadeIn"

export default function Contact() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <FadeIn>
          <h2 className="text-sm font-medium uppercase tracking-widest text-subtle">
            Contact
          </h2>
          <p className="mt-6 max-w-md text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Have an idea or want to collaborate? I&apos;d love to hear from you.
          </p>

          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-flex items-center rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            {site.email}
          </a>
        </FadeIn>

        <div className="mt-20 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-subtle">
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
