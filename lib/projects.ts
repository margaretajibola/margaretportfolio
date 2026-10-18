// lib/projects.ts
export const webdevProjects = [
  {
    title: "YelpCamp",
    description:
      "A full-stack web application for listing, reviewing, and managing campgrounds, with user authentication, photo uploads, and campground reviews.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "EJS", "Cloudinary"],
    github: "https://github.com/margaretajibola/YelpCamp",
    website: "https://yelpcamp-jade.vercel.app/",
  },
  {
    title: "WigsByMagss Booking Website",
    description:
      "A full-stack appointment booking platform for salon services, letting clients browse services and reserve time slots while giving owners an admin dashboard to manage bookings.",
    tech: ["React", "Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "TypeScript", "Playwright"],
    github: "https://github.com/margaretajibola/WigsbymagssBookingWebsite",
    website: "https://wigsbymagss-booking-website.vercel.app/",
  },
  {
    title: "Ping Pong Game",
    description:
      "A browser-based ping-pong (table tennis) game for two players, built as a learning exercise in DOM manipulation.",
    tech: ["HTML", "Bulma", "JavaScript"],
    github: "https://github.com/margaretajibola/Ping-Pong-Game",
  },
];

export const dataProjects = [
  {
    title: "IBM Data Engineering Capstone",
    description:
      "A capstone project implementing a complete data engineering pipeline, moving data from OLTP systems through ETL into a data warehouse, then powering analytics and machine learning.",
    tech: ["Python", "SQL", "MySQL", "MongoDB", "PostgreSQL", "Apache Airflow", "Apache Spark", "Google Looker Studio"],
    github: "https://github.com/margaretajibola/ibm-data-engineering-capstone",
  },
  {
    title: "IMDB Movies Data Pipeline",
    description:
      "An end-to-end batch ETL pipeline that extracts movie data from CSV, transforms it with Pandas, loads it into a PostgreSQL warehouse, and orchestrates and visualizes it with Airflow and Looker, with data quality validation via Great Expectations.",
    tech: ["Python", "Pandas", "PostgreSQL", "Apache Airflow", "Google Looker Studio", "Great Expectations"],
    github: "https://github.com/margaretajibola/imdb-movies-pipeline",
  },
];

export const agenticProjects = [
  {
    title: "AI Agent Eval Dashboard",
    description:
      "A benchmarking and evaluation system for LLM agents from OpenAI, Anthropic, and Ollama, running them against the GAIA benchmark with an automated Python test runner and a Streamlit dashboard to compare performance.",
    tech: ["Python", "LangGraph", "LangChain", "Streamlit", "GAIA Benchmark"],
    github: "https://github.com/margaretajibola/ai_agent_eval_dashboard",
  },
  {
    title: "Nimbus Novelty Socks RAG Agent",
    description:
      "A corrective RAG chatbot that answers employee questions about company policies (PTO, expenses, IT security, benefits) by retrieving and grading relevant docs, then rewriting the query to retry when the results fall short.",
    tech: ["Python", "LangGraph", "LangChain", "Chroma", "OpenAI", "Streamlit"],
    github: "https://github.com/margaretajibola/nimbus_novelty_socks_rag_agent",
  },
];
