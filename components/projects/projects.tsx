"use client";

import {
  ArrowRight,
  Bot,
  Compass,
  Layers,
  LineChart,
  Sparkles,
  Wand2,
} from "lucide-react";
import { useEffect, useState, type ComponentType, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  images: string[];
  imageAlt: string;
};

const PROJECTS: Project[] = [
  {
    id: "enterprise-suite",
    icon: Sparkles,
    iconLabel: "University Platform",
    title:
      "University Digital Operations Platform for academic services, institutional workflows, and management reporting.",
    description:
      "GoldenCreation Tech designed and delivered a secure digital platform for the University of Dar es Salaam to centralize academic information, improve service workflows, and support efficient communication across university departments.",
    meta: "Education Systems, 2026",
    imageRatio: 1024 / 620,
    images: ["/project-enterprise.png"],
    imageAlt: "Enterprise business system showcase",
  },
  {
    id: "hospitality-web",
    icon: Compass,
    iconLabel: "Agriculture Platform",
    title:
      "Digital agriculture commerce platform for commodity trade, export coordination, and market visibility.",
    description:
      "GoldenCreation Tech designed and delivered a modern agribusiness platform that helps producers, exporters, and buyers access trusted market information, streamline trade communication, and improve digital customer engagement.",
    meta: "Agriculture Systems, 2025",
    imageRatio: 1024 / 560,
    images: ["/project-hospitality-web-v3.png"],
    imageAlt: "Agriculture digital platform case study",
  },
  {
    id: "logistics-mobile",
    icon: LineChart,
    iconLabel: "Vehicle Marketplace",
    title:
      "Digital vehicle marketplace platform for car sales, imports, and customer vehicle discovery.",
    description:
      "GoldenCreation Tech designed and developed TG World, a modern automotive platform that helps customers explore vehicles, compare brands, and connect with trusted car import and sales services through a streamlined digital experience.",
    meta: "Automotive Systems, 2025",
    imageRatio: 1024 / 500,
    images: ["/project-logistics-mobile-v3.png"],
    imageAlt: "Logistics mobile operations app",
  },
  {
    id: "client-portal",
    icon: Wand2,
    iconLabel: "Youth Chamber Platform",
    title:
      "Digital membership platform for youth business engagement, programs, and community growth.",
    description:
      "GoldenCreation Tech designed and developed the TYCC platform for Tanzania Youth Chamber of Commerce, enabling young entrepreneurs to join, explore programs, and connect with opportunities that support business and innovation across Tanzania.",
    meta: "Membership Systems, 2025",
    imageRatio: 1024 / 500,
    images: ["/project-tycc-platform.png"],
    imageAlt: "TYCC Tanzania Youth Chamber of Commerce platform",
  },
  {
    id: "design-system",
    icon: Layers,
    iconLabel: "Financial Platform",
    title:
      "Secure digital finance platform for client onboarding, account access, and service operations.",
    description:
      "GoldenCreation Tech designed and delivered a modern financial services platform that enables streamlined sign-in, structured account workflows, and reliable customer access to core finance operations.",
    meta: "Financial Systems, 2026",
    imageRatio: 1024 / 500,
    images: ["/project-financial-platform.png"],
    imageAlt: "Financial platform sign-in and operations interface",
  },
  {
    id: "analytics-hub",
    icon: Bot,
    iconLabel: "Ocean Marketplace",
    title:
      "Mobile commerce platform for product discovery, seller access, and streamlined purchasing.",
    description:
      "GoldenCreation Tech designed and delivered the Ocean marketplace experience, enabling customers to browse products, compare options, and complete purchases through a clean mobile-first commerce interface.",
    meta: "Commerce Systems, 2026",
    imageRatio: 1024 / 500,
    images: ["/project-ocean-marketplace.png"],
    imageAlt: "Ocean marketplace mobile app platform",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight md:text-[3rem] lg:text-[3.5rem]">
              <span className="text-foreground">Our</span>{" "}
              <span className="text-[#c6932b]">projects</span>
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              Selected GoldenCreation Tech engagements across software, web, mobile,
              systems, and product design.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all case studies
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const [activeImage, setActiveImage] = useState(0);
  const Icon = project.icon;

  useEffect(() => {
    if (project.images.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveImage((prev) => (prev + 1) % project.images.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [project.images]);

  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <article className="project-card flex cursor-pointer flex-col gap-4 rounded-3xl border border-[#c6932b]/25 bg-background p-3 sm:p-3.5">
        <header className="flex items-center gap-2.5 px-1 pt-2">
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#c6932b]/40 bg-[#c6932b]/10">
            <Icon className="h-3.5 w-3.5 text-[#c6932b]" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold tracking-tight text-[#c6932b]">
            {project.iconLabel}
          </span>
        </header>

        <div
          className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
          style={{ aspectRatio: project.imageRatio }}
        >
          <div className="project-card__image-inner">
            {project.images.map((imageSrc, imageIndex) => (
              <Image
                key={`${project.id}-${imageIndex}`}
                src={imageSrc}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
                className={`object-contain object-center transition-opacity duration-700 ${
                  imageIndex === activeImage ? "opacity-100" : "opacity-0"
                }`}
                priority={index < 2 && imageIndex === 0}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
            {project.title}
          </h3>
          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
            {project.description}
          </p>
        </div>

      </article>
    </FadeIn>
  );
}
