import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { contactEmail, projects, services } from "@/lib/site-content";

export function ButtonLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      className={secondary ? "button button-secondary" : "button"}
      href={href}
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </Link>
  );
}
export function PageIntro({
  title,
  children,
}: {
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="page-intro shell">
      <h1>{title}</h1>
      <p>{children}</p>
    </section>
  );
}
export function ProjectImage({
  index,
  priority = false,
  sizes = "(min-width: 768px) 50vw, 100vw",
}: {
  index: number;
  priority?: boolean;
  sizes?: string;
}) {
  const project = projects[index % projects.length]!;
  return (
    <Image
      src={project.image}
      alt={`${project.title} digital platform preview`}
      fill
      sizes={sizes}
      priority={priority}
    />
  );
}
export function ClientStrip() {
  return (
    <div
      className="client-strip shell"
      aria-label="Selected project organizations"
    >
      <span className="eyebrow">Digital experiences for</span>
      <div className="client-window">
        <div className="client-track">
          {[0, 1].map((copy) => (
            <div
              className="client-group"
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
            >
              <span>University of Dar es Salaam</span>
              <span>TG World</span>
              <span>TYCC</span>
              <span>Ocean</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand">
            GoldenCreation<span>Tech</span>
          </Link>
          <p>
            Thoughtful design.
            <br />
            Dependable technology.
            <br />
            Built together.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/projects">Our work</Link>
          <Link href="/about">About us</Link>
          <Link href="/solutions">Solutions</Link>
        </div>
        <div>
          <h2>Our expertise</h2>
          {services.slice(0, 4).map((s) => (
            <Link key={s.id} href={`/services#${s.id}`}>
              {s.title}
            </Link>
          ))}
        </div>
        <div>
          <h2>Let’s talk</h2>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <p>
            Mbezi Beach, Masana
            <br />
            Dar es Salaam, Tanzania
          </p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} GoldenCreation Tech</span>
        <span>From Tanzania. For what’s next.</span>
      </div>
      <div className="greeting-window" aria-hidden="true">
        <div className="greeting-track">
          <span>Hello. Jambo. Let’s create. </span>
          <span>Hello. Jambo. Let’s create. </span>
        </div>
      </div>
    </footer>
  );
}
