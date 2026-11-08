import type { Project } from "@/types/project";

// The array order is the display order.
export const projects: Project[] = [
  {
    slug: "cinetime",
    title: { de: "CineTime", en: "CineTime" },
    summary: {
      de: "Kinoreservierungsplattform – Teamprojekt mit Spring-Boot-Backend und Next.js-Frontend.",
      en: "Cinema reservation platform – team project with a Spring Boot backend and a Next.js frontend.",
    },
    description: {
      de: "CineTime ist eine Webplattform für Kinoreservierungen, die wir in einem fünfköpfigen Team entwickelt haben. Ich habe sowohl am Backend als auch am Frontend gearbeitet.",
      en: "CineTime is a web platform for cinema reservations that we built in a team of five. I worked on both the backend and the frontend.",
    },
    problem: {
      de: "Die Plattform brauchte eine sichere Benutzerverwaltung: Registrierung, Login, Passwort-Reset sowie geschützte Bereiche für Nutzer und Administratoren.",
      en: "The platform needed secure user management: registration, login, password reset and protected areas for users and administrators.",
    },
    solution: {
      de: "Ein Spring-Boot-Backend mit JWT-Authentifizierung, Refresh-Tokens und in Redis gespeicherten Reset-Tokens, dokumentiert mit Swagger, sowie ein Next.js-Frontend mit zentralem API-Client und geschützten Routen.",
      en: "A Spring Boot backend with JWT authentication, refresh tokens and reset tokens stored in Redis, documented with Swagger, plus a Next.js frontend with a central API client and protected routes.",
    },
    role: {
      de: "Full-Stack-Entwickler in einem fünfköpfigen Team",
      en: "Full-stack developer in a team of five",
    },
    highlights: {
      de: [
        "Konzipierte und baute das Spring-Boot-Grundgerüst mit einheitlicher Response- und globaler Exception-Handling-Struktur",
        "Implementierte Authentifizierung und Autorisierung mittels JWT sowie Absicherung der API-Endpunkte",
        "Entwickelte Endpunkte für Login, Registrierung, Refresh-Token, Logout sowie Passwort-vergessen-/-zurücksetzen-Flows",
        "Konzipierte das Datenbankschema inkl. Entity-Beziehungen in PostgreSQL",
        "Verwaltete Reset-Tokens über Redis zur sicheren, performanten Speicherung temporärer Authentifizierungsdaten",
        "Setzte CRUD-Endpunkte für die Admin-Benutzerverwaltung (admin/users, admin/user/{id}) sowie das eigene Benutzerprofil (user/me) um",
        "Analysierte und behob systematisch Bugs in der Authentifizierungs- und Datenbank-Logik zur Sicherstellung stabiler API-Responses",
        "Konfigurierte Swagger für die API-Dokumentation inkl. Security-Schema",
        "Baute das Frontend-Fundament mit Next.js: Layout-Struktur, Header/Footer-Komponenten sowie zentraler API-Client",
        "Implementierte den Authentifizierungsflow inkl. Protected-Route-Logik",
        "Konfigurierte die API-Anbindung über Umgebungsvariablen (.env.local)",
      ],
      en: [
        "Designed and built the Spring Boot foundation with a unified response structure and global exception handling",
        "Implemented authentication and authorization with JWT and secured the API endpoints",
        "Developed endpoints for login, registration, refresh token, logout and forgot/reset password flows",
        "Designed the database schema including entity relationships in PostgreSQL",
        "Managed reset tokens in Redis for secure, fast storage of temporary authentication data",
        "Implemented CRUD endpoints for admin user management (admin/users, admin/user/{id}) and the user's own profile (user/me)",
        "Systematically analyzed and fixed bugs in the authentication and database logic to ensure stable API responses",
        "Configured Swagger for the API documentation including the security scheme",
        "Built the frontend foundation with Next.js: layout structure, header/footer components and a central API client",
        "Implemented the authentication flow including protected-route logic",
        "Configured the API connection via environment variables (.env.local)",
      ],
    },
    tech: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "React",
      "Next.js",
      "JWT",
    ],
    images: [
      {
        src: "/media/projects/cinetime/cover.webp",
        width: 1600,
        height: 900,
        alt: {
          de: "Screenshot der CineTime-Webanwendung",
          en: "Screenshot of the CineTime web app",
        },
      },
    ],
    links: {
      github: "https://github.com/serkandezcan/cinetimefrontend",
      // TODO: add the live demo URL
    },
    featured: true,
    year: 2026,
  },
  {
    slug: "student-management-system",
    title: {
      de: "Student Management System",
      en: "Student Management System",
    },
    summary: {
      de: "Backend zur Digitalisierung der Verwaltungsprozesse einer Bildungseinrichtung.",
      en: "Backend for digitizing the administrative processes of an educational institution.",
    },
    description: {
      de: "Ein REST-Backend mit Spring Boot für die Verwaltung von Studenten, Kursen, Lehrkräften und Administrationsdaten – mit rollenbasiertem Zugriff und PostgreSQL.",
      en: "A Spring Boot REST backend for managing students, courses, teachers and administrative data – with role-based access and PostgreSQL.",
    },
    problem: {
      de: "Die Verwaltungsprozesse einer Bildungseinrichtung liefen manuell und sollten digitalisiert und optimiert werden.",
      en: "The administrative processes of an educational institution were manual and needed to be digitized and optimized.",
    },
    solution: {
      de: "Ein Backend mit Layered Architecture, rollenbasiertem Zugriff (Admin, Manager, Student), Pagination und Sortierung sowie zentralem Exception Handling.",
      en: "A backend with a layered architecture, role-based access (admin, manager, student), pagination and sorting, and centralized exception handling.",
    },
    role: {
      de: "Backend-Entwickler",
      en: "Backend developer",
    },
    highlights: {
      de: [
        "Entwicklung eines Backend-Systems zur Digitalisierung und Optimierung manueller Verwaltungsprozesse einer Bildungseinrichtung",
        "Implementierung vollständiger CRUD-Funktionalitäten für Studenten, Kurse, Lehrer und Administrationsdaten, strukturiert über separate Service-Klassen",
        "Konzeption eines rollenbasierten Zugriffssystems (Admin, Manager, Student) sowie relationaler Datenbankstrukturen mit PostgreSQL zur Sicherstellung von Datenintegrität",
        "Implementierung von Pagination und Sortierung (Spring Data JPA Pageable, PageRequest) für effizientes Laden großer Datenmengen in den Listen-Endpunkten",
        "Implementierung von zentralem Exception Handling zur einheitlichen Fehlerbehandlung sowie Etablierung einer Layered Architecture (Controller, Service, Repository) zur besseren Wartbarkeit",
      ],
      en: [
        "Developed a backend system to digitize and optimize the manual administrative processes of an educational institution",
        "Implemented full CRUD functionality for students, courses, teachers and administrative data, structured in separate service classes",
        "Designed a role-based access system (admin, manager, student) and relational database structures in PostgreSQL to ensure data integrity",
        "Implemented pagination and sorting (Spring Data JPA Pageable, PageRequest) for efficient loading of large datasets in list endpoints",
        "Implemented centralized exception handling for consistent error responses and established a layered architecture (controller, service, repository) for better maintainability",
      ],
    },
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "REST APIs",
      "PostgreSQL",
      "JWT",
    ],
    images: [
      {
        src: "/media/projects/student-management-system/cover.webp",
        width: 1600,
        height: 900,
        alt: {
          de: "API-Dokumentation des Student Management Systems",
          en: "API documentation of the Student Management System",
        },
      },
    ],
    links: {
      github: "https://github.com/ylmzburak/Backend-Project-Student-Managment",
    },
    featured: false,
    year: 2026,
  },
  {
    slug: "portfolio",
    title: { de: "Portfolio-Website", en: "Portfolio website" },
    summary: {
      de: "Diese Website: zweisprachiges Portfolio mit Next.js, statischem Export und AWS.",
      en: "This website: a bilingual portfolio built with Next.js, static export and AWS.",
    },
    description: {
      de: "Zweisprachiges Portfolio und Lebenslauf (Deutsch/Englisch), statisch exportiert mit Next.js und gehostet auf AWS S3 und CloudFront.",
      en: "A bilingual portfolio and CV (German/English), statically exported with Next.js and hosted on AWS S3 and CloudFront.",
    },
    problem: {
      de: "Ich wollte ein schnelles, barrierefreies und zweisprachiges Portfolio – ohne Server und ohne unnötige Bibliotheken – dessen Code ich in jedem Detail erklären kann.",
      en: "I wanted a fast, accessible and bilingual portfolio – without a server or unnecessary libraries – whose code I can explain in every detail.",
    },
    solution: {
      de: "Statischer Export mit Next.js, eine eigene typsichere i18n-Lösung ohne Bibliothek, Design-Tokens mit Tailwind CSS v4 und automatisches Deployment über GitHub Actions mit OIDC.",
      en: "Static export with Next.js, a custom type-safe i18n solution without a library, design tokens with Tailwind CSS v4, and automated deployment via GitHub Actions with OIDC.",
    },
    role: {
      de: "Konzeption, Entwicklung und Deployment",
      en: "Design, development and deployment",
    },
    highlights: {
      de: [
        "Typsichere Zweisprachigkeit ohne Bibliothek: fehlende Übersetzungen führen zu einem Build-Fehler",
        "Hell-/Dunkelmodus mit light-dark() und color-scheme, ohne Aufblitzen beim Laden",
        "Statischer Export mit generateStaticParams für alle Sprachen und Projekte",
        "Selbst gehostete Schrift über next/font – keine Anfragen an Google",
      ],
      en: [
        "Type-safe bilingual content without a library: missing translations fail the build",
        "Light/dark mode with light-dark() and color-scheme, without a flash on load",
        "Static export with generateStaticParams for every locale and project",
        "Self-hosted font via next/font – no requests to Google",
      ],
    },
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vitest",
      "GitHub Actions",
      "AWS S3",
      "CloudFront",
    ],
    images: [
      {
        src: "/media/projects/portfolio/cover.webp",
        width: 1600,
        height: 900,
        alt: {
          de: "Startseite dieser Portfolio-Website",
          en: "Home page of this portfolio website",
        },
      },
    ],
    links: {
      github: "https://github.com/ylmzburak/portfolio",
    },
    featured: false,
    year: 2026,
  },
];
