"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

type Project = (typeof projects)[number];

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-28 px-6 bg-surface/40">
      <div className="absolute inset-0 bg-node-grid bg-[size:32px_32px] opacity-10 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="04 — Selected Work"
          title="Code that works, not just concepts"
          description="A mix of AI platforms, generative AI systems and cloud infrastructure — built end-to-end."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={setActive}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}