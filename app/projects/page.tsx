import { ContactCard } from "@/components/contact/contact-card";
import { Projects } from "@/components/projects/projects";
import { PageIntro } from "@/components/template/shared";
import { createMetadata } from "@/lib/metadata";
export const metadata = createMetadata({
  title: "Our work",
  path: "/projects",
  description:
    "Explore GoldenCreation Tech’s work across websites, mobile apps, and business systems.",
});
export default function ProjectsPage() {
  return (
    <main id="main-content">
      <PageIntro
        title={
          <>
            Our <em>work.</em>
          </>
        }
      >
        Digital experiences built around real people and practical business
        needs. A selection of what we’ve brought to life.
      </PageIntro>
      <Projects />
      <ContactCard />
    </main>
  );
}
