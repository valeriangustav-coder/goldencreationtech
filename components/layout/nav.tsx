"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import PillNav from "./pill-nav";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export function Nav(): ReactNode {
  const pathname = usePathname();
  const activeHref =
    NAV_ITEMS.find((item) =>
      item.href === "/"
        ? pathname === "/"
        : pathname === item.href || pathname.startsWith(`${item.href}/`)
    )?.href ?? "/";

  return (
    <PillNav
      logo="/logo-goldencreation-site.png"
      logoAlt="GoldenCreation Tech logo"
      items={[...NAV_ITEMS]}
      activeHref={activeHref}
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
      ease="power2.easeOut"
      baseColor="#000000"
      pillColor="#ffffff"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#000000"
      initialLoadAnimation
    />
  );
}
