// app/layout.tsx
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Margaret Ajibola | Full Stack Engineer",
  description: "Portfolio showcasing Margaret Ajibola's full-stack and QA engineering projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        <Navbar />
        <main className="min-h-screen container mx-auto px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
