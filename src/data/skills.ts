import type { SkillGroup } from "@/types/skills";

export const skills: SkillGroup[] = [
  {
    id: "backend",
    label: { de: "Backend", en: "Backend" },
    items: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Hibernate",
      "JPA",
      "RESTful APIs",
      "Microservices",
    ],
  },
  {
    id: "frontend-mobile",
    label: { de: "Frontend & Mobil", en: "Frontend & mobile" },
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Redux",
      "Zustand",
      "Context API",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    id: "databases",
    label: { de: "Datenbanken & Caching", en: "Databases & caching" },
    items: ["PostgreSQL", "Redis"],
  },
  {
    id: "testing",
    label: { de: "Testing & Dokumentation", en: "Testing & documentation" },
    items: ["JUnit", "Mockito", "Swagger/OpenAPI"],
  },
  {
    id: "tools",
    label: { de: "Tools & Betriebssysteme", en: "Tools & operating systems" },
    items: ["Git", "GitHub", "Maven", "Docker", "Postman", "Linux (CLI, Bash)"],
  },
  {
    id: "basics",
    label: { de: "Grundkenntnisse", en: "Basic knowledge" },
    items: ["MongoDB"],
  },
];
