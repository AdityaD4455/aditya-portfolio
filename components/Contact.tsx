"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, CheckCircle2 } from "lucide-react";
import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = "Message should be at least 10 characters";
    return next;
  }

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "df82546f-acc4-4bdd-a293-6f2839447ac1",
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New portfolio message from ${form.name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="07 — Contact"
          title="Let's build something intelligent"
          description="Open to AI/ML engineering roles, internships, and collaborations. Reach out — I usually respond within a day."
        />

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8">
          <Reveal className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="glass glass-border-glow rounded-2xl p-6 flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="h-11 w-11 rounded-xl bg-violet/10 text-violet flex items-center justify-center flex-shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-muted font-mono uppercase tracking-wider">
                  Email
                </p>
                <p className="font-medium text-sm mt-0.5 break-all">
                  {profile.email}
                </p>
              </div>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-border-glow rounded-2xl p-6 flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="h-11 w-11 rounded-xl bg-cyan/10 text-cyan flex items-center justify-center flex-shrink-0">
                <Linkedin size={20} />
              </div>
              <div>
                <p className="text-xs text-muted font-mono uppercase tracking-wider">
                  LinkedIn
                </p>
                <p className="font-medium text-sm mt-0.5">
                   linkedin.com/in/aditya-dhonde4455
                </p>
              </div>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-border-glow rounded-2xl p-6 flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="h-11 w-11 rounded-xl bg-green/10 text-green flex items-center justify-center flex-shrink-0">
                <Github size={20} />
              </div>
              <div>
                <p className="text-xs text-muted font-mono uppercase tracking-wider">
                  GitHub
                </p>
                <p className="font-medium text-sm mt-0.5">
                  github.com/AdityaD4455
                </p>
              </div>
            </a>

            <div className="glass glass-border-glow rounded-2xl p-6 flex items-center gap-4">
              <div className="h-11 w-11 rounded-xl bg-surface2 text-muted flex items-center justify-center flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-muted font-mono uppercase tracking-wider">
                  Location
                </p>
                <p className="font-medium text-sm mt-0.5">
                  {profile.location}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="glass glass-border-glow rounded-2xl p-7 sm:p-8 relative overflow-hidden"
              noValidate
            >
              {submitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-bg/90 backdrop-blur-sm text-center px-6"
                >
                  <CheckCircle2 className="text-green mb-3" size={40} />
                  <p className="font-display text-lg font-semibold">
                    Message sent
                  </p>
                  <p className="text-sm text-muted mt-1 mb-4">
                    Thanks for reaching out — I&apos;ll get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-cyan hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono uppercase tracking-wider text-muted mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full rounded-xl bg-surface2 border border-line px-4 py-3 text-sm text-ink focus:border-cyan outline-none transition-colors"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1.5">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-wider text-muted mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full rounded-xl bg-surface2 border border-line px-4 py-3 text-sm text-ink focus:border-cyan outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1.5">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-xs font-mono uppercase tracking-wider text-muted mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full rounded-xl bg-surface2 border border-line px-4 py-3 text-sm text-ink focus:border-cyan outline-none transition-colors resize-none"
                  placeholder="Tell me about the role, project, or opportunity..."
                />
                {errors.message && (
                  <p className="text-xs text-red-400 mt-1.5">
                    {errors.message}
                  </p>
                )}
              </div>

              {submitError && (
                <p className="text-sm text-red-400 mb-4">{submitError}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-violet px-7 py-3.5 text-sm font-semibold text-bg hover:scale-105 transition-transform disabled:opacity-60 disabled:hover:scale-100"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
