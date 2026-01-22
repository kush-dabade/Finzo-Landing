"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export function FinzoNavbar() {
  const navItems = [
    { name: "Why Finzo?", link: "#value" },
    { name: "Features", link: "#features" },
    { name: "Pricing", link: "#pricing" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar className=" bg-black/35 border-b border-white/10">
      <NavBody className="h-14">
        <NavbarLogo />

        <NavItems
          items={navItems}
          className="
    text-sm font-medium text-white/80
    [&_a]:px-0
    [&_a]:py-1
    [&_a]:transition
    [&_a:hover]:text-white
  "
        />

        <div className="flex items-center gap-3">
          <NavbarButton
            variant="secondary"
            className="
              text-white/80
              hover:text-white
              hover:bg-white/5
              transition
            "
          >
            Sign in
          </NavbarButton>

          <NavbarButton
            variant="primary"
            className="
              bg-white text-black
              hover:bg-white/90
              font-medium
            "
          >
            Get started
          </NavbarButton>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          className="bg-black/95 backdrop-blur-xl"
        >
          <nav className="flex flex-col gap-6">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  text-lg font-medium
                  text-white/80
                  hover:text-white
                  transition
                "
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="mt-10 flex w-full flex-col gap-3">
            <NavbarButton
              variant="secondary"
              className="w-full text-white/90"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign in
            </NavbarButton>

            <NavbarButton
              variant="primary"
              className="w-full bg-white text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get started
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
