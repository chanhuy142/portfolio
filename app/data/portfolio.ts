export const personalInfo = {
  name: "Luu Chan Huy",
  title: "Flutter & Android Developer",
  tagline: "Flutter | Native Android (Kotlin) | Mobile Engineer",
  bio: "Flutter / Android Developer with 2+ years of experience building and shipping mobile apps. Strong in Flutter (BLoC, Firebase, GraphQL, WebSocket), Bluetooth/printing integrations for POS, and release pipelines to both App Store and Google Play. Also experienced with native Android (Kotlin) for feature development, bug fixing, and performance optimization in production banking and retail apps.",
  objective: "A motivated mobile engineer eager to grow in a high-impact product environment, continuously learning and delivering high-quality features across Flutter and native Android. I aim to become a senior-level engineer capable of owning end-to-end mobile solutions from UI/UX to production release.",
  email: "luuchanhuy142@gmail.com",
  phone: "0901476807",
  location: "Ho Chi Minh City, Viet Nam",
  avatar: "/avatar.jpg",
  social: {
    github: "https://github.com/luuchanhuy",
    linkedin: "https://linkedin.com/in/luuchanhuy",
  }
};

export const skills = [
  {
    category: "Mobile",
    items: [
      { name: "Flutter (BLoC, Provider)" },
      { name: "Dart" },
      { name: "Kotlin (Native Android)" },
    ]
  },
  {
    category: "Backend & Services",
    items: [
      { name: "Firebase (Auth, Storage, Crashlytics)" },
      { name: "GraphQL" },
      { name: "WebSocket" },
    ]
  },
  {
    category: "Hardware & Integrations",
    items: [
      { name: "Bluetooth Printers" },
      { name: "Handheld POS Devices" },
    ]
  },
  {
    category: "Delivery",
    items: [
      { name: "App Store / TestFlight Submission" },
      { name: "Google Play Release Tracks" },
      { name: "Crash Fixing in Review" },
    ]
  },
  {
    category: "Workflow",
    items: [
      { name: "Agile / Scrum" },
      { name: "Git" },
      { name: "CI/CD for Multi-Flavor Builds (dev / staging / prod)" },
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "A3 PRO",
    teamSize: "20+",
    stack: ["Flutter", "Dart", "BLoC", "Firebase", "GraphQL", "WebSocket"],
    platform: ["Android", "iOS"],
    client: "Vietnamese electronics company",
    description: "Internal application that supports and manages product resale activities for an electronics company. It streamlines internal processes and provides a structured toolset for handling resale operations.",
    highlights: [
      "Developed new features requested by the client.",
      "Built reusable components/modules to accelerate future development.",
      "Fixed bugs and improved stability.",
      "Prepared builds for release, submitted to app stores, and handled review / submission issues.",
    ],
  },
  {
    id: 2,
    title: "A3 Retail",
    teamSize: "30+",
    stack: ["Flutter", "Dart", "BLoC", "Bluetooth", "Printer"],
    platform: ["Android", "iOS"],
    client: undefined,
    description: "Retail management solution used by multiple businesses to support daily sales operations. Includes invoice generation, handheld POS device integration, and other tools to improve transaction efficiency and customer service for retailers.",
    highlights: [
      "Implemented new features across sales flow, invoicing, and POS/printing.",
      "Created reusable UI / logic components for cross-team use.",
      "Maintained Bluetooth printer and handheld POS workflows.",
      "Fixed production bugs and supported store submission / review issues.",
    ],
  },
  {
    id: 3,
    title: "9 Tháng 10 Ngày",
    teamSize: "3",
    stack: ["Flutter", "Dart", "BLoC", "WebSocket", "Firebase"],
    platform: ["Android", "iOS"],
    client: undefined,
    description: "A pregnancy tracking app that provides weekly fetal development updates, health tips, reminders for prenatal checkups, and tools to log symptoms and habits. Goal: help expectant mothers stay informed and reassured during pregnancy.",
    highlights: [
      "Added new features and reusable components.",
      "Fixed bugs and handled app stability in a small agile team.",
      "Shipped builds and handled submission issues for store release.",
    ],
  }
];

export const experience = [
  {
    id: 1,
    company: "Nexlab Technology",
    position: "Flutter & Android Developer",
    period: "09/2023 – 04/2025",
    location: "Ho Chi Minh City, Viet Nam",
    type: "Full-time",
    description: "Built and maintained production mobile apps for retail, loyalty, and internal operations.",
    achievements: [
      "Developed new business features, reusable UI components, and app-wide modules.",
      "Worked on Flutter apps (multi-flavor Android/iOS) and contributed native Android code where platform-specific integrations were required (Bluetooth printing, POS devices, release signing).",
      "Fixed bugs, improved stability, and handled crash/edge-case issues in live environments.",
      "Prepared builds, submitted releases to App Store / Google Play, and resolved compliance or signing issues during review.",
    ],
    technologies: ["Flutter", "Dart", "BLoC", "Firebase", "GraphQL", "WebSocket", "Kotlin", "Bluetooth"]
  },
  {
    id: 2,
    company: "ACB Bank",
    position: "Android Developer Intern (Native)",
    period: "03/2023 – 06/2023",
    location: "Ho Chi Minh City, Viet Nam",
    type: "Internship",
    description: "Implemented and updated native Android features (Kotlin) for internal banking app flows.",
    achievements: [
      "Participated in fixing production bugs and UI inconsistencies.",
      "Optimized parts of the codebase for performance and stability on a range of devices.",
      "Collaborated with senior engineers on secure, standards-compliant mobile banking modules.",
    ],
    technologies: ["Kotlin", "Android Native", "XML"]
  },
  {
    id: 3,
    company: "Freelancer",
    position: "Mobile Developer",
    period: "03/2021 – 03/2023",
    location: "Remote",
    type: "Freelance",
    description: "Delivered small to mid-size mobile features for clients.",
    achievements: [
      "Supported iterative UI changes and quick bug fixes under short timelines.",
    ],
    technologies: ["Flutter", "Dart"]
  }
];

export const education = [
  {
    id: 1,
    institution: "Ho Chi Minh City University of Science",
    degree: "B.S. in Software Engineering",
  }
];

export const languages = [
  { name: "English", detail: "TOEIC 875" },
  { name: "Vietnamese", detail: "Native" },
];
