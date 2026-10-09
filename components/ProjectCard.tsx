// components/ProjectCard.tsx
type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  website?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group border border-white/10 rounded-xl p-6 bg-white/5 hover:bg-white/[0.07] hover:-translate-y-1 hover:border-accent/40 transition-all duration-200">
      <h3 className="text-xl text-foreground font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-medium bg-accent/15 text-accent px-2.5 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-accent font-medium group-hover:gap-2 transition-all"
        >
          View on GitHub
          <span aria-hidden="true">→</span>
        </a>
        {project.website && (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-gray-300 hover:text-accent font-medium transition-colors"
          >
            Live Site
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </div>
  );
}
