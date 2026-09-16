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

    >
      <Image
        src={SITE_LOGO}
        alt="GoldenCreation Tech logo"
        width={64}
        height={64}
        sizes="(min-width: 640px) 64px, 44px"

        priority
      />
    </Link>
  );
}
