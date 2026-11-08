import type { TimelineEntry } from "@/types/timeline";

// Newest first: the array order is the display order.
export const experience: TimelineEntry[] = [
  {
    id: "atomyum-mobile-intern",
    title: {
      de: "Mobile Developer Praktikant",
      en: "Mobile Developer Intern",
    },
    organization: "Atomyum Venture Builder",
    location: { de: "Niederlande", en: "Netherlands" },
    start: "2026-06",
    end: "2026-08",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Axios",
      "SecureStore",
      "Figma",
      "Tailwind CSS",
    ],
    highlights: {
      de: [
        "Baute die Navigationsarchitektur der Talented-App mit React Navigation auf: eine hierarchische Stack-Struktur, die den Auth-Flow (Login/Register) vom Hauptbereich (Dashboard, Profil, Bewerbungen) trennt",
        "Entwickelte ein wiederverwendbares Komponenten- und Theme-System nach Figma-Vorgaben (Buttons, Inputs, Cards) mit typsicheren, flexiblen Props für künftige Backend-Daten",
        "Implementierte Login-/Register-Formulare mit React Hook Form und Zod-Validierung, abgestimmt auf die DTO-Struktur der Spring-Boot-API",
        "Setzte globales State-Management mit Zustand um und integrierte einen Auto-Login-Mechanismus mit sicherer JWT-Speicherung via SecureStore",
        "Baute eine HTTP-Client-Schicht mit Axios inkl. Interceptor, der JWT-Tokens automatisch an jede Anfrage anhängt",
        "Entwickelte einen 6-stufigen Profil-Assistenten (About You, Experience, Education, Certificates, Skills & Languages, Interests) inkl. PUT-Integration zur Backend-API; verifizierte den Datenfluss über UI-Status, Backend-Logs und Datenbankabfragen",
        "Integrierte die Application-Lifecycle-API zur dynamischen Anzeige von Bewerbungsstatus (z. B. Einladung, Zusage, Absage) im mobilen Interface",
        "Implementierte Dokumenten-Upload (CV/Zertifikate) via expo-document-picker/expo-image-picker mit multipart/form-data-Übertragung an den Backend-Dateiservice",
        "Optimierte Listen-Rendering (Memoization, keyExtractor) zur Verbesserung der Scroll-Performance bei großen Datensätzen",
      ],
      en: [
        "Built the navigation architecture of the Talented app with React Navigation: a hierarchical stack structure that separates the auth flow (login/register) from the main area (dashboard, profile, applications)",
        "Developed a reusable component and theme system based on Figma designs (buttons, inputs, cards) with type-safe, flexible props for future backend data",
        "Implemented login/register forms with React Hook Form and Zod validation, aligned with the DTO structure of the Spring Boot API",
        "Implemented global state management with Zustand and integrated an auto-login mechanism with secure JWT storage via SecureStore",
        "Built an HTTP client layer with Axios, including an interceptor that automatically attaches JWT tokens to every request",
        "Developed a 6-step profile wizard (About You, Experience, Education, Certificates, Skills & Languages, Interests) including PUT integration with the backend API; verified the data flow through UI state, backend logs and database queries",
        "Integrated the application lifecycle API to display application statuses (e.g. invitation, acceptance, rejection) dynamically in the mobile interface",
        "Implemented document upload (CV/certificates) via expo-document-picker/expo-image-picker with multipart/form-data transfer to the backend file service",
        "Optimized list rendering (memoization, keyExtractor) to improve scroll performance with large datasets",
      ],
    },
  },
];
