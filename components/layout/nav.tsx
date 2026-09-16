"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { contactEmail, services, stages } from "@/lib/site-content";

export function Nav() {
  const pathname = usePathname();
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeMenu = () => {
    dialog.current?.close();
    document.body.style.overflow = "";
    menuButton.current?.focus();
  };
  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setDropdown(null);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);
  useEffect(() => {
    dialog.current?.close();
    document.body.style.overflow = "";
  }, [pathname]);
  return (
    <header className="site-header shell">
      <Link className="brand" href="/" aria-label="GoldenCreation Tech home">
        <span className="brand-symbol" aria-hidden="true">
          ✳
        </span>
        <span>
          GoldenCreation<small>TECH</small>
        </span>
      </Link>
      <nav
        className="desktop-nav"
        ref={navRef}
        aria-label="Main navigation"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            const trigger = navRef.current?.querySelector<HTMLButtonElement>(
              `button[aria-expanded="true"]`
            );
            setDropdown(null);
            trigger?.focus();
          }
        }}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setDropdown(null);
        }}
      >
        <Link
          aria-current={pathname === "/projects" ? "page" : undefined}
          href="/projects"
        >
          Work
        </Link>
        {[
          {
            name: "Services",
            href: "/services",
            items: services.map((s) => ({ id: s.id, title: s.title })),
          },
          {
            name: "Solutions",
            href: "/solutions",
            items: stages.map((s) => ({ id: s.id, title: s.label })),
          },
        ].map((group) => (
          <div className="nav-group" key={group.name}>
            <button
              aria-expanded={dropdown === group.name}
              aria-controls={`nav-${group.name}`}
              onClick={() =>
                setDropdown(dropdown === group.name ? null : group.name)
              }
            >
              {group.name}
              <ChevronDown size={13} aria-hidden="true" />
            </button>
            <div
              className="nav-dropdown"
              id={`nav-${group.name}`}
              hidden={dropdown !== group.name}
            >
              <Link href={group.href} onClick={() => setDropdown(null)}>
                Explore all {group.name.toLowerCase()}{" "}
                <ArrowUpRight size={16} />
              </Link>
              {group.items.map((item) => (
                <Link
                  key={item.id}
                  href={`${group.href}#${item.id}`}
                  onClick={() => setDropdown(null)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <Link
          aria-current={pathname === "/about" ? "page" : undefined}
          href="/about"
        >
          About
        </Link>
      </nav>
      <a className="button header-contact" href={`mailto:${contactEmail}`}>
        Let’s talk <ArrowUpRight size={17} aria-hidden="true" />
      </a>
      <button
        className="menu-toggle"
        ref={menuButton}
        aria-label="Open navigation"
        aria-controls="mobile-menu"
        aria-expanded={mobileOpen}
        onClick={() => {
          dialog.current?.showModal();
          setMobileOpen(true);
          document.body.style.overflow = "hidden";
        }}
      >
        <Menu />
      </button>
      <dialog
        id="mobile-menu"
        className="mobile-menu"
        ref={dialog}
        onClose={() => {
          setMobileOpen(false);
          document.body.style.overflow = "";
        }}
        aria-label="Navigation"
      >
        <div className="mobile-menu-top">
          <span className="brand">GoldenCreation Tech</span>
          <button aria-label="Close navigation" onClick={closeMenu}>
            <X />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/projects" onClick={closeMenu}>
            Work
          </Link>
          <details>
            <summary>
              Services <ChevronDown />
            </summary>
            <Link href="/services" onClick={closeMenu}>
              All services
            </Link>
            {services.map((s) => (
              <Link key={s.id} href={`/services#${s.id}`} onClick={closeMenu}>
                {s.title}
              </Link>
            ))}
          </details>
          <details>
            <summary>
              Solutions <ChevronDown />
            </summary>
            <Link href="/solutions" onClick={closeMenu}>
              All solutions
            </Link>
            {stages.map((s) => (
              <Link key={s.id} href={`/solutions#${s.id}`} onClick={closeMenu}>
                {s.label}
              </Link>
            ))}
          </details>
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>
          <a
            className="button"
            href={`mailto:${contactEmail}`}
            onClick={closeMenu}
          >
            Let’s talk <ArrowUpRight />
          </a>
        </nav>
      </dialog>
    </header>
  );
}
