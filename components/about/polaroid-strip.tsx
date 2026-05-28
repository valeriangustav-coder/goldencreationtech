"use client";

import {
  BriefcaseBusiness,
  CarFront,
  Landmark,
  MapPin,
  MonitorSmartphone,
  Palette,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
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
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 220, damping: 18, mass: 0.6 });
  const tx = useTransform(sx, (v) => `${v}px`);
  const ty = useTransform(sy, (v) => `${v}px`);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>): void => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const max = 18;
    const k = 0.25;
    mx.set(Math.max(-max, Math.min(max, dx * k)));
    my.set(Math.max(-max, Math.min(max, dy * k)));
  };

  const handleLeave = (): void => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      initial={{ opacity: 0, y: -120, filter: "blur(18px)", rotate: photo.rotate }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", rotate: photo.rotate }}
      transition={{
        duration: 0.9,
        delay: 0.05 + index * 0.08,
        ease: EASE,
      }}
      style={{
        x: tx,
        y: ty,
        rotate: photo.rotate,
      }}
      whileHover={{ y: -6, scale: 1.015 }}
      className="relative flex aspect-[4/5] w-[clamp(8.8rem,14vw,11rem)] shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-white/18 to-white/8 p-2.5 shadow-[0_14px_30px_-20px_rgba(0,0,0,0.55)] backdrop-blur-xl dark:border-white/12 dark:from-white/10 dark:to-white/5"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(198,147,43,0.20),transparent_38%),radial-gradient(circle_at_86%_88%,rgba(255,255,255,0.14),transparent_44%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(198,147,43,0.24),transparent_38%),radial-gradient(circle_at_86%_88%,rgba(255,255,255,0.08),transparent_44%)]"
      />

      <div className="relative rounded-xl border border-white/15 bg-black/10 p-1.5 dark:border-white/10 dark:bg-white/5">
        <Icon className="h-4 w-4 text-foreground/80" aria-hidden="true" />
      </div>
      <div className="relative space-y-1.5 rounded-xl border border-white/15 bg-black/10 p-2 dark:border-white/10 dark:bg-white/5">
        <p className="text-[10px] leading-tight font-semibold tracking-tight text-foreground">
          {photo.title}
        </p>
        <p className="text-[8px] leading-[1.25] tracking-tight text-foreground/70">
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
    return <div aria-hidden="true" className="h-[clamp(8rem,15vw,12rem)] w-full" />;
  }

  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:px-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-3 text-center">
        <h2 className="font-serif text-[2rem] font-medium leading-tight tracking-tight sm:text-[2.5rem]">
          <span className="text-foreground">Solutions</span>{" "}
          <span className="text-[#c6932b]">We Deliver</span>
        </h2>
        <p className="max-w-[64ch] text-[15px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[17px]">
          We design scalable digital platforms that help businesses,
          institutions, and organizations operate smarter in the modern world.
        </p>
      </div>

      <div className="flex flex-wrap w-full items-start justify-center gap-2 sm:gap-2.5">
        {PHOTOS.map((photo, i) => (
          <PolaroidCard key={photo.id} photo={photo} index={i} />
        ))}
      </div>
    </div>
  );
}
