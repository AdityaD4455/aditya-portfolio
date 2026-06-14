import { experience, certifications } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Briefcase, BadgeCheck } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 bg-surface/40">
      <div className="absolute inset-0 bg-node-grid bg-[size:32px_32px] opacity-10 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="06 — Experience"
          title="Career & credentials"
          description="Professional experience alongside certifications that back up the fundamentals."
        />

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8">
          {/* Experience */}
          <div className="space-y-6">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.08}>
                <div className="glass glass-border-glow rounded-2xl p-7">
                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 rounded-xl bg-violet/10 text-violet flex items-center justify-center flex-shrink-0">
                      <Briefcase size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h3 className="font-display text-lg font-semibold">
                          {job.role}
                        </h3>
                        <span className="font-mono text-xs text-cyan">
                          {job.period}
                        </span>
                      </div>
                      <p className="text-sm text-muted mb-4">{job.company}</p>
                      <ul className="space-y-2 mb-4">
                        {job.points.map((point) => (
                          <li
                            key={point}
                            className="text-sm text-muted flex items-start gap-2"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {job.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono px-2.5 py-1 rounded-full bg-surface2 text-muted border border-line"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <Reveal>
              <h3 className="font-display text-xl font-semibold mb-5 flex items-center gap-2">
                <BadgeCheck className="text-cyan" size={22} />
                Certifications
              </h3>
            </Reveal>
            <ul className="space-y-3">
              {certifications.map((cert, i) => (
                <Reveal key={cert.name} delay={i * 0.06}>
                  <li className="glass glass-border-glow rounded-xl p-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-medium text-sm">{cert.name}</p>
                      <p className="text-xs text-muted mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-green flex-shrink-0">
                      {cert.year}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
