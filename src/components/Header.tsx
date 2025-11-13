"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target as Node)
      ) {
        setIsResourcesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/#portfolio" },
  ];

  const resourcesLinks = [
    { name: "Blogs", href: "/resources/blogs" },
    { name: "Videos", href: "/resources/videos" },
    { name: "Terms of Service", href: "/resources/terms-of-service" },
    { name: "Privacy Policy", href: "/resources/privacy-policy" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold gradient-text"
          >
            Dream Home Investments
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-white transition-colors font-medium relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesRef}>
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="text-white/90 hover:text-white transition-colors font-medium relative group flex items-center gap-1"
              >
                Resources
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isResourcesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isResourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 glass-card py-2">
                  {resourcesLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/5 transition-colors"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/#contact"
              className="btn-hero-primary text-sm py-2 px-4"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 glass-card">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/90 hover:text-white transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {/* Mobile Resources */}
              <div className="flex flex-col">
                <button
                  onClick={() =>
                    setIsResourcesOpen(!isResourcesOpen)
                  }
                  className="text-white/90 hover:text-white transition-colors font-medium py-2 flex items-center justify-between"
                >
                  Resources
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isResourcesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isResourcesOpen && (
                  <div className="pl-4 mt-2 flex flex-col gap-2">
                    {resourcesLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-white/70 hover:text-white transition-colors text-sm py-1"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsResourcesOpen(false);
                        }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/#contact"
                className="btn-hero-primary text-sm py-2 px-4 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

