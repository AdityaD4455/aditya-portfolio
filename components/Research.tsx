import { research } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { FileText, Award, Calendar, Quote } from "lucide-react";

export default function Research() {
  return (
    <section id="research" className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="05 — Research"
          title="Published research"
          description="Peer-reviewed work on real-time, AI-powered analytics."
        />

        <Reveal>
          <div className="glass glass-border-glow rounded-3xl p-8 sm:p-10 grid lg:grid-cols-[auto_1fr] gap-8 items-start">
            <div className="h-16 w-16 rounded-2xl bg-violet/10 text-violet flex items-center justify-center flex-shrink-0">
              <FileText size={28} />
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold leading-snug mb-4 max-w-2xl">
                {research.title}
              </h3>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
                <span className="inline-flex items-center gap-2 text-sm text-cyan font-mono">
                  <Award size={15} /> {research.journal}
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-green font-mono">
                  <Calendar size={15} /> {research.date}
                </span>
              </div>

              <div className="mb-6">
                <p className="eyebrow mb-2">Abstract</p>
                <p className="text-muted text-sm leading-relaxed max-w-2xl">
                  {research.abstract}
                </p>
              </div>

              <div className="glass rounded-xl p-4 mb-6 border-l-2 border-violet">
                <p className="font-mono text-xs text-muted flex items-start gap-2">
                  <Quote size={14} className="text-violet flex-shrink-0 mt-0.5" />
                  Dhonde, A. D. &ldquo;InsightSphere AI Pro: A Real-Time Social
                  Media Analytics Platform with AI-Powered Insights.&rdquo;{" "}
                  {research.journal}, {research.date}.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink hover:border-cyan hover:text-cyan transition-colors"
              >
                Request Full Paper
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
