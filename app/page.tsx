// app/page.tsx
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { webdevProjects, dataProjects, agenticProjects } from "@/lib/projects";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Agentic Engineering Projects */}
      {agenticProjects.length > 0 && (
        <section id="projects" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Agentic Engineering Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {agenticProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Web Development Projects */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Web Development Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {webdevProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Data Projects */}
      {dataProjects.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Data Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {dataProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
