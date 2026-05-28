import type { ReactNode } from "react";
import Image from "next/image";

import { HeroCtas } from "./hero-ctas";
import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";

const PORTRAIT_SRC = "/gold-hero-cards.png";

export function Hero(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 pt-44 pb-24 sm:px-10 sm:pt-56 sm:pb-32">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-8">
          <FadeIn className="flex flex-col gap-4">
            <p className="text-[20px] leading-tight tracking-tight font-medium text-foreground">
              Welcome to{" "}
              <span className="text-[#c6932b]">GoldenCreation Tech</span>
            </p>

            <h1 className="text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[2.5rem] lg:text-[3.65rem]">
              <span className="block text-foreground">Building modern software</span>
              <span className="block text-[#c6932b]">for growing businesses</span>
            </h1>

            <p className="max-w-[34ch] text-[22px] leading-[1.4] tracking-tight text-foreground/65">
              We design and develop websites, mobile apps, business systems,
              and digital products with reliable engineering and thoughtful UI/UX.
            </p>

            <HeroCtas />
          </FadeIn>

          <ScaleUnblur className="flex justify-stretch lg:justify-end">
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm lg:max-w-130">
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                <Image
                  src={PORTRAIT_SRC}
                  alt="GoldenCreation Tech team"
                  fill
                  sizes="(min-width: 1024px) 42rem, 100vw"
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}
