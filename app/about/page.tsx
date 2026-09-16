import Link from "next/link";
import { ContactCard } from "@/components/contact/contact-card";
import {
  PageIntro,
  ProjectImage,
  ClientStrip,
} from "@/components/template/shared";
import { createMetadata } from "@/lib/metadata";
export const metadata = createMetadata({
  title: "About",
  path: "/about",
  description:
    "Meet GoldenCreation Tech, a software and digital product company based in Dar es Salaam, Tanzania.",
});
const values = [
  [
    "Start with people.",
    "We design around the people using a product and the teams that depend on it every day.",
  ],
  [
    "Make the complex clear.",
    "Clear interfaces and practical workflows help people get things done with confidence.",
  ],
  [
    "Build to last.",
    "Maintainable engineering and a dependable foundation matter as much as the first impression.",
  ],
  [
    "Work as one team.",
    "We bring product thinking, design, and development together in close collaboration with our clients.",
  ],
  [
    "Stay curious.",
    "Every project begins by understanding the problem and finding a useful way forward.",
  ],
  [
    "Care about the details.",
    "From the smallest interaction to the complete system, quality is part of how we work.",
  ],
];
export default function AboutPage() {
  return (
    <main id="main-content">
      <PageIntro
        title={
          <>
            Your next chapter.
            <br />
            Our shared <em>ambition.</em>
          </>
        }
      >
        We’re GoldenCreation Tech, a software and digital product company in Dar
        es Salaam. We bring thoughtful design and dependable engineering to your
        next idea.
      </PageIntro>
      <section
        className="about-gallery shell"
        aria-label="A glimpse of our digital work"
      >
        {[0, 5, 2, 3].map((index) => (
          <div key={index}>
            <ProjectImage index={index} />
          </div>
        ))}
      </section>
      <ClientStrip />
      <section className="mission shell">
        <div>
          <h2>
            Useful technology.
            <br />
            <em>Lasting value.</em>
          </h2>
          <p>
            Our focus is simple: help organizations turn their operational and
            product goals into working digital systems. We combine pragmatic
            product thinking with strong engineering to build platforms that are
            scalable, maintainable, and easy to use.
          </p>
        </div>
      </section>
      <section className="values shell">
        <div className="light-panel">
          <p className="eyebrow">WHAT GUIDES US</p>
          <h2>
            Good work starts
            <br />
            with good <em>principles.</em>
          </h2>
          <div className="values-grid">
            {values.map(([title, text], i) => (
              <article key={title}>
                <span className="eyebrow">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="location-row shell">
        <h2>
          Based in Tanzania.
          <br />
          Built for <em>possibility.</em>
        </h2>
        <div>
          <p>
            Find us in Mbezi Beach, Masana, Dar es Salaam. We work with local
            and international businesses through project-based, retainer, and
            dedicated-team engagements.
          </p>
          <p className="eyebrow">DAR ES SALAAM · TANZANIA</p>
        </div>
      </section>
      <ContactCard />
      <Link
        href="/projects"
        className="about-bottom-mosaic shell"
        aria-label="Explore all of our work"
      >
        {[1, 4, 3, 5].map((i) => (
          <div key={i}>
            <ProjectImage index={i} />
          </div>
        ))}
      </Link>
    </main>
  );
}
