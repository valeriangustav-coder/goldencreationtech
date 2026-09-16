import { ContactCard } from "@/components/contact/contact-card";
import {
  PageIntro,
  ProjectImage,
  ButtonLink,
} from "@/components/template/shared";
import {
  ProjectCarousel,
  Reveal,
  ServicePanel,
} from "@/components/template/interactions";
import { stages, contactEmail } from "@/lib/site-content";
import { createMetadata } from "@/lib/metadata";
export const metadata = createMetadata({
  title: "Solutions",
  path: "/solutions",
  description:
    "Digital solutions for startups, growing businesses, and organizations.",
});
export default function SolutionsPage() {
  return (
    <main id="main-content">
      <div className="solutions-intro">
        <PageIntro
          title={
            <>
              Wherever you are.
              <br />
              Whatever’s <em>next.</em>
            </>
          }
        >
          A first product. A growing business. A complex organization. We shape
          the right digital solution around your next step.
        </PageIntro>
      </div>
      <section
        className="solutions-mosaic shell"
        aria-label="Digital product examples"
      >
        {[5, 2, 1, 0].map((i) => (
          <div key={i}>
            <ProjectImage index={i} priority />
          </div>
        ))}
      </section>
      <Reveal>
        <section className="shell reasons">
          <div className="light-panel">
            <p className="eyebrow">ONE CONNECTED TEAM</p>
            <h2>
              Design and technology.
              <br />
              <em>Better together.</em>
            </h2>
            <div className="values-grid">
              {[
                [
                  "A complete perspective",
                  "Product thinking, interface design, and engineering work together from the start.",
                ],
                [
                  "A partnership that fits",
                  "Project-based delivery, a retainer, or a dedicated team shaped around your needs.",
                ],
                [
                  "Clarity along the way",
                  "Defined scope, shared reviews, and working features keep the next step clear.",
                ],
                [
                  "Room to evolve",
                  "Maintainable systems and ongoing support help your platform grow with your business.",
                ],
              ].map(([title, text]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section className="stages shell">
          <h2>
            Built for your
            <br />
            <em>next stage.</em>
          </h2>
          <div className="stage-grid">
            {stages.map((stage) => (
              <article className="stage-card" id={stage.id} key={stage.id}>
                <p className="eyebrow">{stage.label}</p>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
                <ul>
                  {stage.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ButtonLink
                  href={`mailto:${contactEmail}?subject=${encodeURIComponent(stage.label + " project")}`}
                >
                  Let’s explore
                </ButtonLink>
              </article>
            ))}
          </div>
        </section>
      </Reveal>
      <Reveal>
        <ServicePanel isProcess />
      </Reveal>
      <ProjectCarousel />
      <div className="solutions-contact">
        <ContactCard />
      </div>
    </main>
  );
}
