import { ButtonLink } from "@/components/template/shared";
import { contactEmail } from "@/lib/site-content";
export function ContactCard() {
  return (
    <section className="contact-row shell" id="contact">
      <h2>
        Good things start
        <br />
        with a <em>conversation.</em>
      </h2>
      <div>
        <p>
          Have an idea, a challenge, or a next step in mind? Let’s build
          something useful together.
        </p>
        <ButtonLink href={`mailto:${contactEmail}`}>Let’s talk</ButtonLink>
      </div>
    </section>
  );
}
