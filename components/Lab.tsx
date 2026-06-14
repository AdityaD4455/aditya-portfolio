import { labCategories } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import {
  BrainCircuit,
  Layers,
  Eye,
  MessageSquare,
  Sparkles,
  Database,
  Bot,
  BarChart3,
} from "lucide-react";

const icons = [
  BrainCircuit,
  Layers,
  Eye,
  MessageSquare,
  Sparkles,
  Database,
  Bot,
  BarChart3,
];

export default function Lab() {
  return (
    <section id="lab" className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="03 — AI Innovation Lab"
          title="Where models meet real problems"
          description="Core domains of exploration — from classical ML to autonomous agents and retrieval-augmented systems."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {labCategories.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.title} delay={(i % 4) * 0.08}>
                <div className="group glass glass-border-glow rounded-2xl p-6 h-full transition-transform hover:-translate-y-1.5 duration-300">
                  <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-violet/10 text-violet group-hover:bg-violet/20 group-hover:text-cyan transition-colors mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-semibold text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
