"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const colorMap: Record<string, string> = {
  violet: "bg-violet",
  cyan: "bg-cyan",
  green: "bg-green",
};

const textColorMap: Record<string, string> = {
  violet: "text-violet",
  cyan: "text-cyan",
  green: "text-green",
};

function SkillBar({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium">{name}</span>
        <span className={`text-xs font-mono ${textColorMap[color]}`}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-line overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${level}%` : 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full rounded-full ${colorMap[color]}`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 bg-surface/40">
      <div className="absolute inset-0 bg-node-grid bg-[size:32px_32px] opacity-10 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="02 — Control Center"
          title="Tools that power every build"
          description="A working toolkit spanning programming, machine learning, analytics, generative AI and cloud infrastructure."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <Reveal key={cat.title} delay={ci * 0.08}>
              <div className="glass glass-border-glow rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${colorMap[cat.color]} animate-node-pulse`}
                  />
                  <h3 className="font-display text-lg font-semibold">
                    {cat.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {cat.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={cat.color}
                      delay={si * 0.06}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
