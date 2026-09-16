"use client";

import {
  BriefcaseBusiness,
  CarFront,
  Landmark,
  MapPin,
  MonitorSmartphone,
  Palette,
} from "lucide-react";
import { motion } from "motion/react";
import { useRef, useSyncExternalStore, type ReactNode } from "react";

type Polaroid = {
  id: string;
  rotate: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

const PHOTOS: Polaroid[] = [
  {
    id: "a",
    rotate: -8,
    title: "University Systems",
    description:
      "Digital platforms for universities, institutions, and academic management.",
    icon: Landmark,
  },
  {
    id: "b",
    rotate: 6,
    title: "Vehicle Marketplace",
    description:
      "Modern automotive platforms for vehicle sales, imports, and inventory management.",
    icon: CarFront,
  },
  {
    id: "c",
    rotate: -4,
    title: "Business Automation",
    description:
      "Smart workflow systems for operations, reporting, and enterprise management.",
    icon: BriefcaseBusiness,
  },
  {
    id: "d",
    rotate: 7,
    title: "Mobile & Web Apps",
    description:
      "Custom cross-platform applications built for scalability and performance.",
    icon: MonitorSmartphone,
  },
  {
    id: "e",
    rotate: -6,
    title: "UI/UX & Business Systems",
    description:
      "Professional digital experiences focused on usability and business growth.",
    icon: Palette,
  },
  {
    id: "f",
    rotate: 5,
    title: "Dar es Salaam, Tanzania",
    description:
      "Locally built technology solutions delivering global-standard digital experiences.",
    icon: MapPin,
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function PolaroidCard({
  photo,
  index,
}: {
  photo: Polaroid;
  index: number;
}): ReactNode {
  const Icon = photo.icon;
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -120, filter: "blur(18px)", rotate: photo.rotate }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", rotate: photo.rotate }}
      transition={{
        duration: 0.9,
        delay: 0.05 + index * 0.08,
        ease: EASE,
      }}

      whileHover={{ y: -6, scale: 1.015 }}

    >
      <div
        aria-hidden="true"

      />

      <div>
        <Icon aria-hidden="true" />
      </div>
      <div>
        <p>
          {photo.title}
        </p>
        <p>
          {photo.description}
        </p>
      </div>
    </motion.div>
  );
}

export function PolaroidStrip(): ReactNode {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return <div aria-hidden="true" />;
  }

  return (
    <div>
      <div>
        <h2>
          <span>Solutions</span>{" "}
          <span>We Deliver</span>
        </h2>
        <p>
          We design scalable digital platforms that help businesses,
          institutions, and organizations operate smarter in the modern world.
        </p>
      </div>

      <div>
        {PHOTOS.map((photo, i) => (
          <PolaroidCard key={photo.id} photo={photo} index={i} />
        ))}
      </div>
    </div>
  );
}
