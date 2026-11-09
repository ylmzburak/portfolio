import type { Profile } from "@/types/profile";

export const profile: Profile = {
  name: "Burak Yilmaz",
  title: {
    de: "Full-Stack-Entwickler",
    en: "Full-Stack Developer",
  },
  tagline: {
    de: "Java & Spring Boot | React & Next.js | React Native",
    en: "Java & Spring Boot | React & Next.js | React Native",
  },
  about: {
    de: [
      "Full-Stack-Entwickler mit praktischer Erfahrung in der Entwicklung skalierbarer Backend-Systeme mit Java 17 und Spring Boot sowie moderner Frontend-Anwendungen mit React, Next.js und JavaScript.",
      "Ich habe REST-APIs mit Fokus auf Authentifizierung und Sicherheit (Spring Security, JWT) sowie sauberem, getestetem Code (JUnit, Mockito) entwickelt und arbeite in agilen Teams (Scrum, Jira). Durch ein Praktikum als Mobile Developer und eigene Teamprojekte habe ich zusätzlich Erfahrung in der plattformübergreifenden App-Entwicklung mit React Native gesammelt.",
      "Mein Ziel ist es, meine Kenntnisse in Systemarchitektur und API-Design in einem professionellen Full-Stack-Team praxisnah weiterzuentwickeln.",
    ],
    en: [
      "Full-stack developer with hands-on experience building scalable backend systems with Java 17 and Spring Boot, and modern frontend applications with React, Next.js and JavaScript.",
      "I have built REST APIs with a focus on authentication and security (Spring Security, JWT) and clean, tested code (JUnit, Mockito), and I work in agile teams (Scrum, Jira). Through an internship as a mobile developer and my own team projects, I have also gained experience in cross-platform app development with React Native.",
      "My goal is to deepen my skills in system architecture and API design in a professional full-stack team.",
    ],
  },
  location: {
    de: "Frankfurt, Deutschland",
    en: "Frankfurt, Germany",
  },
  // TODO: replace with the address you want to publish
  email: "hello@example.com",
  links: {
    linkedin: "https://www.linkedin.com/in/burak-yilmaz-mobiledeveloper/",
    github: "https://github.com/ylmzburak",
  },
  photo: {
    src: "/media/profile.webp",
    width: 480,
    height: 480,
    alt: {
      de: "Porträtfoto von Burak Yilmaz",
      en: "Portrait photo of Burak Yilmaz",
    },
  },
};
