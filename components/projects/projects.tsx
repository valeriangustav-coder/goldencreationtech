import { projects } from "@/lib/site-content";
import { ButtonLink, ProjectImage } from "@/components/template/shared";
export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
}) {
  return (
    <section className="work-section shell" aria-label="Selected work">
      {withHeadline && (
        <div className="section-label">
          <h2>Selected work</h2>
          <span>Ideas made real.</span>
        </div>
      )}
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" id={project.id} key={project.id}>
            <div className="project-image">
              <ProjectImage index={index} />
            </div>
            <div className="project-caption">
              <h2>{project.title}</h2>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            {!viewMoreVisible && (
              <p className="project-description">{project.description}</p>
            )}
          </article>
        ))}
      </div>
      {viewMoreVisible && (
        <div className="work-more">
          <ButtonLink href="/projects">More about our work</ButtonLink>
        </div>
      )}
    </section>
  );
}
