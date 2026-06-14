"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

export default function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -8, y: px * 8 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
      style={{ perspective: 1000 }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.2s ease-out",
        }}
        className="glass glass-border-glow rounded-2xl p-6 h-full flex flex-col"
      >
        <div className="flex items-start justify-between mb-4">
          <span className="font-mono text-xs text-cyan tracking-widest">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-xs text-green border border-green/30 rounded-full px-3 py-1">
            {project.metric}
          </span>
        </div>

        <h3 className="font-display text-xl font-semibold mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-muted mb-4 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2.5 py-1 rounded-full bg-surface2 text-muted border border-line"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-auto">
          <button
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-cyan transition-colors"
          >
            Details <ArrowUpRight size={15} />
          </button>
          <span className="h-4 w-px bg-line" />
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-cyan transition-colors"
            aria-label={`${project.title} GitHub repository`}
          >
            <Github size={15} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}
