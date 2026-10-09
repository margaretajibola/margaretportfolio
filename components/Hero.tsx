// components/Hero.tsx
import Link from "next/link";

export function Hero() {
  return (
    <section className="text-center mt-10 mb-4">
      <p className="text-accent font-semibold text-xl md:text-2xl mb-3">👋 Welcome to my portfolio</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
        Hi, I&apos;m Margaret Ajibola
      </h1>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
        A Full Stack and QA Engineer who builds reliable, user-focused web applications
        and ensures quality through automation and testing &mdash; now expanding into
        agentic AI engineering, building and evaluating LLM-powered agent systems.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="#projects"
          className="bg-accent hover:bg-accent-hover text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors"
        >
          View Projects
        </a>
        <Link
          href="/contact"
          className="border border-white/15 hover:border-accent hover:text-accent text-gray-300 px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
