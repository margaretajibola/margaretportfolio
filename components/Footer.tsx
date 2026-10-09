// components/Footer.tsx
export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Margaret Ajibola. Built with Next.js & TypeScript.</p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/margaretajibola"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/margaret-ajibola-5a324a160/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:margaretajibola3@gmail.com"
            className="hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
