import type { ReactNode } from "react";

type Entry = {
  school: string;
  degree: string;
  period: string;
  slug?: string;
};

const ENTRIES: Entry[] = [
  {
    school: "Head Office",
    degree: "Mbezi Beach, Masana, Dar es Salaam",
    period: "Tanzania",
  },
  {
    school: "Service Coverage",
    degree: "Local and international digital delivery",
    period: "Remote & On-site",
  },
  {
    school: "Engagement Model",
    degree: "Project-based, retainer, and dedicated teams",
    period: "Flexible",
  },
];

export function Education(): ReactNode {
  return (
    <div>
      <h3>
        Company profile
      </h3>
      <div>
        <ul>
          {ENTRIES.map((entry) => (
            <li
              key={`${entry.school}-${entry.period}`}


            >
              <SchoolLogo entry={entry} />
              <div>
                <span>
                  {entry.school}
                </span>
                <span>
                  {entry.degree}
                  <span>•</span>
                  <span>{entry.period}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SchoolLogo({ entry }: { entry: Entry }): ReactNode {
  const initials = entry.school.charAt(0);
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
