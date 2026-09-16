import { ContactCard } from "@/components/contact/contact-card";
import { Hero } from "@/components/hero/hero";
import { Projects } from "@/components/projects/projects";
import { ServicePanel } from "@/components/template/interactions";
import { createMetadata } from "@/lib/metadata";
export const metadata = createMetadata({ title: "Home", path: "/" });
export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <Projects withHeadline viewMoreVisible />
      <ServicePanel />
      <ContactCard />
    </main>
  );
}
