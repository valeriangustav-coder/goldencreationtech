import Link from "next/link";
import { ButtonLink, ProjectImage } from "@/components/template/shared";
import { projects } from "@/lib/site-content";
export function Hero() {
  return (
    <section className="home-hero shell">
      <div className="hero-copy">
        <p className="eyebrow hero-enter">
          DESIGN. DEVELOP. MAKE A DIFFERENCE.
        </p>
        <h1 className="hero-enter">
          Big ideas.
          <br />
          Thoughtful design.
          <br />
          <em>Built to work.</em>
        </h1>
        <p className="hero-description hero-enter">
          We build websites, apps, and business systems that move your business
          forward. From first idea to what’s next.
        </p>
        <div className="button-row hero-enter">
          <ButtonLink href="/projects">Explore our work</ButtonLink>
          <ButtonLink href="/services" secondary>
            Our services
          </ButtonLink>
        </div>
      </div>
      <div
        className="hero-mosaic"
        aria-label="A selection of our digital projects"
      >
        {[
          [0, 5],
          [4, 2],
          [1, 3],
        ].map((row, rowIndex) => (
          <div className={`mosaic-row mosaic-row-${rowIndex}`} key={rowIndex}>
            {row.map((index) => (
              <Link
                key={index}
                className="mosaic-tile"
                href={`/projects#${projects[index]!.id}`}
              >
                <ProjectImage
                  index={index}
                  priority
                  sizes="(min-width: 768px) 35vw, 70vw"
                />
              </Link>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
