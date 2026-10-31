export const profile = {
  name: "Alex Mathai",
  role: "Java Developer | Backend Engineer",
  location: "Kochi, India",
  company: "Hatio Innovations",
  summary:
    "Backend Java Developer with over 2.3 years of experience building enterprise microservices for high-volume financial transactions. Contributed to systems supporting 1M+ daily BBPS transactions, with expertise in Spring Boot, Apache Kafka, OracleDB, and scalable payment processing. Experienced in production support, rolling and canary deployments.",
};

export const stats = [
  { value: "2.3+", label: "Years experience" },
  { value: "1M+", label: "Daily BBPS transactions" },
  { value: "90+", label: "Billers onboarded" },
  { value: "99.9%", label: "Service uptime" },
];

export const experience = [
  {
    title: "Software Development Engineer - 1",
    org: "Hatio Innovations Private Limited",
    place: "Kochi, India",
    period: "Sep 2024 – Present",
    points: [
      "Developed and maintained Spring Boot microservices supporting high-volume payment processing and event-driven workflows.",
      "Built REST APIs for banking products and partner integrations, using Kafka for async processing and OracleDB for storage.",
      "Improved production stability and performance across development, deployment, and production environments.",
      "Built payment orchestration and reconciliation systems with transactional integrity and scalable microservice design.",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    org: "Hatio Innovations Private Limited",
    place: "Kochi, India",
    period: "Jun 2024 – Aug 2024",
    points: [
      "Documented project onboarding and architecture using sequence diagrams, data-flow diagrams, and system designs.",
      "Developed backend APIs to onboard billers through third-party integrations.",
    ],
  },
  {
    title: "Technology Associate Intern",
    org: "TinkerHub Foundation",
    place: "Kochi, India",
    period: "Apr 2024 – Oct 2024",
    points: [
      "Developed and revamped websites for multiple programs; organized and hosted technical events, hackathons, and campus learning sessions.",
    ],
  },
];

export const projects = [
  {
    name: "Nova Bill Fetch",
    stack: "Java 21, Spring Boot, Liquibase, Kafka, OracleDB",
    points: [
      "Built a modern bill-fetch engine to replace a legacy system, automatically retrieving bills for registered customers.",
      "Protected sensitive customer PII using HSM-level encryption.",
      "Improved processing efficiency by approximately 30% using Java virtual threads instead of platform threads.",
      "Migrated 7M+ customer registration records to the new ecosystem while preserving compatibility and data security.",
    ],
  },
  {
    name: "Technical Service Provider (TSP) for BOU and COU",
    stack: "Java 8/17, Spring Boot, Angular, Kafka, OracleDB",
    points: [
      "Fixed duplicate payments from Kafka consumer rebalancing using DB-backed idempotency and state tracking.",
      "Developed a reconciliation module reducing report generation time from 2 hours to under 3 minutes.",
      "Integrated and onboarded 90+ billers onto the TSP platform.",
      "Maintained 99.9% service uptime by improving application stability and performance, supporting production deployments, troubleshooting incidents, managing releases, and participating in DC/DR exercises.",
    ],
  },
  {
    name: "BillDesk Payment Gateway Plugins",
    stack: "Java 17, MySQL, JOSE (JWS/JWE), OAuth, REST APIs, BillDesk Ace SDK",
    points: [
      "Built a reusable BillDesk payment-gateway core (JWS/JWE request signing and encryption, order creation, transaction retrieval, refunds) shared across platform plugins, so new platform integrations need less code.",
    ],
  },
];

export const skills = [
  { group: "Languages", items: ["Java 8/17/21", "JavaScript"] },
  { group: "Frameworks", items: ["Spring Boot", "Spring Security", "Hibernate", "JPA", "AngularJS", "ReactJS"] },
  { group: "Architecture", items: ["Microservices", "REST", "SOAP", "OAuth2", "JWT"] },
  { group: "Databases / Messaging", items: ["OracleDB", "MySQL", "MongoDB", "Apache Kafka"] },
  { group: "Cloud / DevOps", items: ["GCP", "Docker", "Kubernetes", "Podman", "Jenkins", "CI/CD"] },
  { group: "Tools / Methods", items: ["Claude Code", "Codex", "Git", "Maven", "Postman", "Bruno", "ClickUp", "Agile", "Scrum"] },
];

export const certifications = [
  { name: "Oracle SQL Performance Tuning", issuer: "EDUCBA", year: "2026", id: "V27O3NZ7GD1V" },
  { name: "Backend Engineering Virtual Experience", issuer: "Lyft", year: "2023", id: "rYQxtLLq5koDQT7jN" },
  { name: "Software Engineering Virtual Experience", issuer: "JPMorgan Chase & Co.", year: "2024", id: "52ajyDYD69FadoXL2" },
];

export const education = {
  school: "Jyothi Engineering College",
  degree: "B.Tech, Computer Science and Engineering",
  period: "2019 – 2023",
  cgpa: "7.31",
};
