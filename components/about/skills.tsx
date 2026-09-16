import type { ReactNode } from "react";

const SKILLS = [
  "Software Development",
  "Website Design",
  "Mobile App Development",
  "Business Systems",
  "UI/UX Design",
  "Digital Solutions",
  "Product Discovery",
  "API Integration",
  "Maintenance & Support",
];

export function Skills(): ReactNode {
  return (
    <div>
      <h3>
        Services
      </h3>
      <div>
        <div>
          {SKILLS.map((skill) => (
            <span
              key={skill}

            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
