"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Lab", href: "#lab" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line px-6 py-12">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-3">
          <a
            href="#hero"
            className="font-display text-xl font-bold tracking-tight"
          >
            AD<span className="text-gradient">∞</span>
          </a>
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-cyan transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-muted hover:text-cyan transition-colors"
          >
            <Mail size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-cyan transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-cyan transition-colors"
          >
            <Github size={18} />
          </a>
          <span className="h-4 w-px bg-line" />
          <a
            href="#hero"
            aria-label="Back to top"
            className="inline-flex items-center justify-center h-9 w-9 rounded-full glass glass-border-glow text-ink hover:text-cyan transition-colors"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
