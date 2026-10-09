export default function AboutPage() {
  return (
    <main className="px-6 py-10">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-foreground">About Me</h1>
        <p className="mb-4 text-gray-300 leading-relaxed">
          Hi, I’m <span className="font-semibold text-foreground">Margaret Ajibola</span>, a Software Engineer with experience in full-stack development, quality assurance, and growing expertise in data and agentic AI engineering. I enjoy building reliable, scalable web applications and intuitive user experiences.
        </p>

        <p className="mb-4 text-gray-300 leading-relaxed">
          My background includes hands-on work in web development, automation testing, API validation, data workflows, and building and evaluating LLM agent systems. I’ve worked with technologies like <span className="font-medium text-foreground">Next.js, React, TypeScript, Playwright, PostgreSQL, Prisma, Airflow, Spark, LangChain, and LangGraph</span>.
        </p>

        <p className="text-gray-300 leading-relaxed">
          I’m driven by curiosity and problem-solving, and I’m always learning how to better design, test, and deliver high-quality software.
        </p>
      </section>
    </main>
  );
}
