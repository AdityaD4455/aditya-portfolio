"use client";

import { useEffect, useRef } from "react";

// A constellation of nodes that traces an infinity (∞) path, echoing the
// AD∞ mark, with connecting lines that draw themselves on load and a
// subtle parallax response to the pointer.
export default function NeuralField() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    function handleMove(e: PointerEvent) {
      const rect = svg!.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      svg!.style.setProperty("--px", `${x * 14}`);
      svg!.style.setProperty("--py", `${y * 14}`);
    }
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  // Nodes laid out roughly along an infinity / figure-eight curve
  const nodes: { x: number; y: number; r: number; delay: number }[] = [
    { x: 120, y: 200, r: 4, delay: 0 },
    { x: 220, y: 110, r: 3, delay: 0.4 },
    { x: 340, y: 90, r: 5, delay: 0.8 },
    { x: 460, y: 150, r: 3, delay: 1.2 },
    { x: 500, y: 250, r: 6, delay: 0.2 },
    { x: 430, y: 330, r: 3, delay: 0.6 },
    { x: 320, y: 350, r: 4, delay: 1.0 },
    { x: 200, y: 320, r: 3, delay: 1.4 },
    { x: 100, y: 260, r: 5, delay: 0.9 },
    { x: 620, y: 200, r: 4, delay: 0.5 },
    { x: 700, y: 120, r: 3, delay: 1.1 },
    { x: 760, y: 230, r: 5, delay: 0.3 },
    { x: 680, y: 320, r: 3, delay: 1.3 },
  ];

  const links: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 0],
    [4, 9], [9, 10], [10, 11], [11, 12], [12, 9], [9, 3],
  ];

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 800 450"
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      style={
        {
          "--px": "0",
          "--py": "0",
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="nf-line" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#14F195" stopOpacity="0.5" />
        </linearGradient>
        <radialGradient id="nf-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g
        style={{
          transform: "translate(calc(var(--px) * 1px), calc(var(--py) * 1px))",
          transition: "transform 0.6s ease-out",
        }}
      >
        {links.map(([a, b], i) => {
          const na = nodes[a];
          const nb = nodes[b];
          return (
            <line
              key={i}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke="url(#nf-line)"
              strokeWidth="1"
              strokeDasharray="1000"
              className="animate-line-draw"
              style={{ animationDelay: `${i * 0.08}s` }}
            />
          );
        })}

        {nodes.map((n, i) => (
          <g key={i}>
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r + 10}
              fill="url(#nf-glow)"
              opacity="0.15"
            />
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill="#F5F7FF"
              className="animate-node-pulse"
              style={{ animationDelay: `${n.delay}s` }}
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
