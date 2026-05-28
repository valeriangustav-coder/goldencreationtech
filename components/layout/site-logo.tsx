"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const SITE_LOGO = "/logo-goldencreation-site.png";

export function SiteLogo(): ReactNode {
  return (
    <Link
      href="/"
      aria-label="GoldenCreation Tech home"
      className="focus-ring fixed left-4 top-4 z-[60] inline-flex items-center justify-center rounded-xl border border-[#c6932b]/45 bg-black/92 p-1 shadow-[0_10px_24px_-12px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:scale-[1.03] sm:left-6 sm:top-6"
    >
      <Image
        src={SITE_LOGO}
        alt="GoldenCreation Tech logo"
        width={64}
        height={64}
        sizes="(min-width: 640px) 64px, 44px"
        className="h-11 w-11 rounded-lg object-cover sm:h-14 sm:w-14"
        priority
      />
    </Link>
  );
}
