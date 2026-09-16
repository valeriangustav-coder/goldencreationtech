"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState, type ReactNode } from "react";

type Entry = {
  company: string;
  role: string;
  period: string;
  slug?: string;
  brand?: string;
};

const ENTRIES: Entry[] = [
  {
    company: "Discovery & Planning",
    role: "Requirements analysis and digital strategy alignment",
    period: "Phase 01",
    brand: "#c6932b",
  },
  {
    company: "UI/UX Design",
    role: "Wireframes, prototypes, and interaction design systems",
    period: "Phase 02",
    brand: "#111111",
  },
  {
    company: "Full-Stack Development",
    role: "Secure, scalable implementation across web and backend",
    period: "Phase 03",
    brand: "#0a0a0a",
  },
  {
    company: "Mobile App Delivery",
    role: "Cross-platform application development and testing",
    period: "Phase 04",
    brand: "#1c1c1c",
  },
  {
    company: "Business Systems Integration",
    role: "Automation, reporting, and process optimization",
    period: "Phase 05",
    brand: "#2a2a2a",
  },
  {
    company: "Launch & Support",
    role: "Deployment, monitoring, and continuous improvements",
    period: "Phase 06",
    brand: "#3a3a3a",
  },
];

const COLLAPSED_COUNT = 2.5;
const ROW_HEIGHT = 64;
const ROW_GAP = 8;

export function Experience(): ReactNode {
  const [open, setOpen] = useState(false);
  const collapsedHeight =
    Math.floor(COLLAPSED_COUNT) * ROW_HEIGHT +
    Math.floor(COLLAPSED_COUNT) * ROW_GAP +
    (COLLAPSED_COUNT % 1) * ROW_HEIGHT;
  const hiddenCount = ENTRIES.length - Math.floor(COLLAPSED_COUNT);

  return (
    <div>
      <h3>
        Delivery process
      </h3>
      <div

      >
        <motion.div

          initial={false}
          animate={{
            height: open ? "auto" : collapsedHeight,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}

        >
          <ul>
            {ENTRIES.map((entry) => (
              <li
                key={`${entry.company}-${entry.period}`}


              >
                <CompanyLogo entry={entry} />
                <div>
                  <span>
                    {entry.company}
                  </span>
                  <span>
                    {entry.role}
                    <span>•</span>
                    <span>{entry.period}</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <AnimatePresence>
          {!open && (
            <motion.div
              key="fade"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              aria-hidden="true"


            />
          )}
        </AnimatePresence>

        {hiddenCount > 0 && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}

          >
            {open ? "Show less" : `Show ${hiddenCount} more`}
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.25 }}

            >
              <ChevronDown aria-hidden="true" />
            </motion.span>
          </button>
        )}
      </div>
    </div>
  );
}

function CompanyLogo({ entry }: { entry: Entry }): ReactNode {
  const initials = entry.company.charAt(0);
  return (
    <span

      aria-hidden="true"

    >
      {entry.slug ? (
        <img
          src={`https://cdn.simpleicons.org/${entry.slug}`}
          alt=""
          width={24}
          height={24}

          draggable={false}
        />
      ) : (
        <span>
          {initials}
        </span>
      )}
    </span>
  );
}
