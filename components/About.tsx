import { timeline, counters, education, profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Counter from "./Counter";
import { GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="01 — About"
          title="From curiosity to intelligent systems"
          description={`A short story of how ${profile.shortName} got here — and where it's headed next.`}
        />

        <div className="grid lg:grid-cols-[1fr_1px_1fr] gap-10 lg:gap-0">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-violet via-cyan to-green" />
            <ul className="space-y-10">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.08}>
                  <li className="relative pl-8">
                    <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-bg border-2 border-cyan animate-node-pulse" />
                    <p className="font-mono text-xs text-cyan tracking-widest">
                      {item.year}
                    </p>
                    <h3 className="font-display text-lg font-semibold mt-1">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm mt-1 max-w-md">
                      {item.desc}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block bg-line" />

          {/* Right column: counters + education */}
          <div className="lg:pl-10 flex flex-col gap-10">
            <div className="grid grid-cols-2 gap-4">
              {counters.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.08}>
                  <Counter value={c.value} suffix={c.suffix} label={c.label} />
                </Reveal>
              ))}
            </div>

            <div>
              <Reveal>
                <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                  <GraduationCap className="text-green" size={22} />
                  Education
                </h3>
              </Reveal>
              <ul className="space-y-4">
                {education.map((edu, i) => (
                  <Reveal key={edu.degree} delay={0.1 + i * 0.08}>
                    <li className="glass glass-border-glow rounded-2xl p-5">
                      <p className="font-display font-semibold">
                        {edu.degree}
                      </p>
                      <p className="text-sm text-muted mt-1">{edu.school}</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="font-mono text-xs text-cyan">
                          {edu.period}
                        </span>
                        <span className="font-mono text-xs text-green">
                          {edu.detail}
                        </span>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
