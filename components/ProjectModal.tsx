"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Github } from "lucide-react";
import { projects } from "@/lib/data";
import { useEffect } from "react";

type Project = (typeof projects)[number];

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
        >
          <div
            className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative glass glass-border-glow rounded-3xl max-w-lg w-full p-8 max-h-[85vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-muted hover:text-ink transition-colors"
              aria-label="Close project details"
            >
              <X size={22} />
            </button>

            <span className="font-mono text-xs text-green border border-green/30 rounded-full px-3 py-1 inline-block mb-4">
              {project.metric}
            </span>

            <h3 className="font-display text-2xl font-bold mb-3">
              {project.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-6">
              {project.longDescription}
            </p>

            <div className="mb-6">
              <p className="eyebrow mb-3">Key Features</p>
              <div className="flex flex-wrap gap-2">
                {project.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs px-3 py-1.5 rounded-full bg-violet/10 text-violet border border-violet/20"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <p className="eyebrow mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1.5 rounded-full bg-surface2 text-muted border border-line"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-violet px-5 py-2.5 text-sm font-semibold text-bg hover:scale-105 transition-transform"
              >
                <Github size={16} /> View Code
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
