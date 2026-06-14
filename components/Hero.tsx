"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import NeuralField from "./NeuralField";
import RoleRotator from "./RoleRotator";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute inset-0 bg-node-grid bg-[size:32px_32px] opacity-30" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-violet/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute inset-0 opacity-60">
        <NeuralField />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
          {/* Text column */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow mb-5"
            >
              {profile.brandInfinity} — Portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              {profile.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 font-display text-2xl sm:text-3xl text-muted"
            >
              <RoleRotator roles={profile.roles} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-xl sm:text-2xl font-display font-medium max-w-xl text-ink/90"
            >
              {profile.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 text-base sm:text-lg text-muted max-w-xl"
            >
              {profile.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 rounded-full bg-violet px-7 py-3.5 text-sm font-semibold text-bg transition-transform hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-ink hover:border-cyan hover:text-cyan transition-colors"
              >
                <Download size={16} /> Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-ink hover:border-green hover:text-green transition-colors"
              >
                <Mail size={16} /> Contact
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex items-center gap-5"
            >
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted hover:text-cyan transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted hover:text-cyan transition-colors"
              >
                <Github size={20} />
              </a>
              <span className="h-4 w-px bg-line" />
              <span className="text-sm text-muted font-mono">
                {profile.location}
              </span>
            </motion.div>
          </div>

          {/* Portrait column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto lg:mx-0 lg:justify-self-end"
          >
            <div className="relative w-64 sm:w-80 lg:w-96 aspect-[4/5]">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet/40 via-cyan/20 to-green/30 blur-2xl opacity-60 animate-pulse-slow" />
              {/* Frame */}
              <div className="glass glass-border-glow relative w-full h-full rounded-[2rem] overflow-hidden">
                <Image
                  src="/profile.jpeg"
                  alt={`Portrait of ${profile.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 320px, 384px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 glass glass-border-glow rounded-2xl px-5 py-3"
              >
                <p className="font-mono text-xs text-cyan tracking-widest">
                  STATUS
                </p>
                <p className="font-display text-sm font-semibold mt-0.5">
                  Open to Opportunities
                </p>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-cyan transition-colors"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
}
