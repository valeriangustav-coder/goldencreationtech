"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { services, process, projects } from "@/lib/site-content";
import { ProjectImage } from "./shared";

export function ServicePanel({ isProcess = false }: { isProcess?: boolean }) {
  const [open, setOpen] = useState<string | null>(null);
  const items = isProcess ? process : services;
  return (
    <section
      className={`expertise-panel shell ${isProcess ? "process-panel" : ""}`}
    >
      <div className="panel-inner">
        <div className="panel-heading">
          <p className="eyebrow">
            {isProcess ? "HOW WE GET THERE" : "FROM IDEA TO LAUNCH"}
          </p>
          <h2>
            {isProcess ? (
              <>
                A clear path.
                <br />A shared <em>purpose.</em>
              </>
            ) : (
              <>
                Good design meets
                <br />
                <em>great engineering.</em>
              </>
            )}
          </h2>
        </div>
        <div className="accordion">
          {items.map((item, index) => {
            const expanded = open === item.id;
            return (
              <div
                className={
                  expanded ? "accordion-item is-open" : "accordion-item"
                }
                key={item.id}
              >
                <h3>
                  <button
                    aria-expanded={expanded}
                    aria-controls={`panel-${item.id}`}
                    id={`trigger-${item.id}`}
                    onClick={() => setOpen(expanded ? null : item.id)}
                  >
                    <span className="accordion-number">0{index + 1}</span>
                    <span>{item.title}</span>
                    <Plus aria-hidden="true" />
                  </button>
                </h3>
                <div
                  className="accordion-panel"
                  id={`panel-${item.id}`}
                  role="region"
                  aria-labelledby={`trigger-${item.id}`}
                  inert={!expanded}
                >
                  <div className="accordion-clip">
                    <div className="accordion-content">
                      <div>
                        <p>{item.description}</p>
                        {!isProcess && (
                          <Link
                            href={`/services#${item.id}`}
                            className="text-link"
                          >
                            Explore this service{" "}
                            <ArrowRight size={17} aria-hidden="true" />
                          </Link>
                        )}
                      </div>
                      {!isProcess && (
                        <div className="accordion-media">
                          <ProjectImage
                            index={services[index]!.image}
                            sizes="(min-width: 768px) 35vw, 90vw"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {!isProcess && (
          <div className="engagement">
            <div>
              <p className="eyebrow">BUILT AROUND YOU</p>
              <h3>
                A team for your
                <br />
                next chapter.
              </h3>
            </div>
            <div>
              <h4>End-to-end partnership</h4>
              <p>
                From discovery and design to development and launch, we bring
                the pieces together.
              </p>
            </div>
            <div>
              <h4>Ongoing collaboration</h4>
              <p>
                Keep improving with project-based support, a retainer, or a
                dedicated delivery team.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (
      !node ||
      !window.IntersectionObserver ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          node.animate(
            [
              { transform: "translateY(40px)", opacity: 0 },
              { transform: "translateY(0)", opacity: 1 },
            ],
            { duration: 600, easing: "ease-out" }
          );
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref}>{children}</div>;
}

export function ProjectCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({
    active: false,
    moved: false,
    startX: 0,
    startScroll: 0,
  });
  const [position, setPosition] = useState(0);
  const [points, setPoints] = useState<number[]>([0]);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const update = () => {
      const max = node.scrollWidth - node.clientWidth;
      const offsets = Array.from(node.children).map((child) =>
        Math.min(
          (child as HTMLElement).offsetLeft -
            (node.firstElementChild as HTMLElement).offsetLeft,
          max
        )
      );
      setPoints([...new Set(offsets)]);
    };
    const resize = new ResizeObserver(update);
    resize.observe(node);
    update();
    return () => resize.disconnect();
  }, []);
  const go = (index: number) => {
    ref.current?.scrollTo({
      left: points[index] ?? 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };
  return (
    <section className="carousel-section shell" aria-label="Featured projects">
      <h2>
        See what’s <em>possible.</em>
      </h2>
      <div
        className="carousel-track"
        ref={ref}
        tabIndex={0}
        aria-label="Scroll through featured projects"
        onDragStart={(e) => e.preventDefault()}
        onPointerDown={(e) => {
          if (e.pointerType !== "mouse" || e.button !== 0) return;
          drag.current = {
            active: true,
            moved: false,
            startX: e.clientX,
            startScroll: e.currentTarget.scrollLeft,
          };
        }}
        onPointerMove={(e) => {
          if (!drag.current.active) return;
          const distance = e.clientX - drag.current.startX;
          if (Math.abs(distance) > 6) {
            drag.current.moved = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            e.currentTarget.style.scrollSnapType = "none";
            e.currentTarget.scrollLeft = drag.current.startScroll - distance;
          }
        }}
        onPointerUp={(e) => {
          drag.current.active = false;
          e.currentTarget.style.scrollSnapType = "";
          if (e.currentTarget.hasPointerCapture(e.pointerId))
            e.currentTarget.releasePointerCapture(e.pointerId);
        }}
        onPointerCancel={(e) => {
          drag.current.active = false;
          e.currentTarget.style.scrollSnapType = "";
        }}
        onClickCapture={(e) => {
          if (drag.current.moved) {
            e.preventDefault();
            drag.current.moved = false;
          }
        }}
        onScroll={(e) => {
          const left = e.currentTarget.scrollLeft;
          const nearest = points.reduce(
            (best, point, i) =>
              Math.abs(point - left) < Math.abs(points[best]! - left)
                ? i
                : best,
            0
          );
          setPosition(nearest);
        }}
      >
        {projects.map((p, i) => (
          <Link className="carousel-card" key={p.id} href={`/projects#${p.id}`}>
            <div className="project-image">
              <ProjectImage index={i} />
            </div>
            <h3>{p.title}</h3>
            <span className="eyebrow">{p.category}</span>
          </Link>
        ))}
      </div>
      <div className="carousel-controls">
        <button
          aria-label="Previous project"
          disabled={position === 0}
          onClick={() => go(position - 1)}
        >
          <ArrowLeft size={18} />
        </button>
        <div className="carousel-dots">
          {points.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to project position ${i + 1}`}
              aria-current={position === i ? "true" : undefined}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <button
          aria-label="Next project"
          disabled={position >= points.length - 1}
          onClick={() => go(position + 1)}
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
