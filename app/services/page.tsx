import { ContactCard } from "@/components/contact/contact-card";
import {
  PageIntro,
  ProjectImage,
  ButtonLink,
} from "@/components/template/shared";
import { contactEmail, services } from "@/lib/site-content";
import { createMetadata } from "@/lib/metadata";
export const metadata = createMetadata({
  title: "Services",
  path: "/services",
  description:
    "Product design, websites, software, mobile apps, and business systems from GoldenCreation Tech.",
});
export default function ServicesPage() {
  return (
    <main id="main-content">
      <PageIntro
        title={
          <>
            Ideas into
            <br />
            <em>everyday impact.</em>
          </>
        }
      >
        From shaping the first experience to supporting your launch, we bring
        design and development together.
      </PageIntro>
      <div className="services-list shell">
        {services.map((service, index) => (
          <section className="service-article" key={service.id} id={service.id}>
            <div className="service-copy">
              <p className="eyebrow">0{index + 1} / OUR EXPERTISE</p>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul>
                {service.capabilities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <ButtonLink
                href={`mailto:${contactEmail}?subject=${encodeURIComponent(service.title)}`}
              >
                Let’s discuss your project
              </ButtonLink>
            </div>
            <div
              className="service-gallery"
              aria-label={`${service.title} project examples`}
            >
              {[
                service.image,
                (service.image + 1) % 6,
                (service.image + 2) % 6,
              ].map((i, j) => (
                <div key={j}>
                  <ProjectImage index={i} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <ContactCard />
    </main>
  );
}
