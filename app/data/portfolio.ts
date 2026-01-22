export const personalInfo = {
  name: "Luu Chan Huy",
  title: "Mobile Developer",
  tagline: "iOS & Android Developer | React Native Specialist",
  bio: "Passionate mobile developer with 5+ years of experience building high-quality, user-centric mobile applications. Specialized in React Native, Swift, and Kotlin with a strong focus on clean architecture and exceptional user experiences.",
  email: "luuchanhuy@example.com",
  phone: "+84 123 456 789",
  location: "Ho Chi Minh City, Vietnam",
  avatar: "/avatar.jpg",
  social: {
    github: "https://github.com/luuchanhuy",
    linkedin: "https://linkedin.com/in/luuchanhuy",
    twitter: "https://twitter.com/luuchanhuy",
  }
};

export const skills = [
  {
    category: "Mobile Frameworks",
    items: [
      { name: "React Native", level: 95 },
      { name: "Swift/SwiftUI", level: 90 },
      { name: "Kotlin", level: 85 },
      { name: "Flutter", level: 75 },
    ]
  },
  {
    category: "Languages",
    items: [
      { name: "JavaScript/TypeScript", level: 95 },
      { name: "Swift", level: 90 },
      { name: "Kotlin", level: 85 },
      { name: "Dart", level: 75 },
      { name: "Objective-C", level: 70 },
    ]
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Xcode", level: 90 },
      { name: "Android Studio", level: 90 },
      { name: "Git", level: 95 },
      { name: "Firebase", level: 85 },
      { name: "GraphQL", level: 80 },
      { name: "Redux/MobX", level: 90 },
    ]
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Node.js", level: 85 },
      { name: "REST APIs", level: 95 },
      { name: "GraphQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 },
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "FitTrack - Fitness & Workout App",
    description: "A comprehensive fitness tracking app with personalized workout plans, progress tracking, and social features. Built with React Native and Firebase.",
    image: "/projects/fittrack.jpg",
    tags: ["React Native", "Firebase", "TypeScript", "Redux"],
    features: [
      "Custom workout plans with AI recommendations",
      "Real-time progress tracking and analytics",
      "Social features: challenges and leaderboards",
      "Integration with Apple Health and Google Fit",
    ],
    downloads: "100K+",
    rating: 4.8,
    platform: ["iOS", "Android"],
    links: {
      appStore: "https://apps.apple.com/app/fittrack",
      playStore: "https://play.google.com/store/apps/fittrack",
      github: "https://github.com/luuchanhuy/fittrack",
    }
  },
  {
    id: 2,
    title: "ShopEase - E-commerce Platform",
    description: "Modern e-commerce mobile app with seamless shopping experience, multiple payment options, and real-time order tracking.",
    image: "/projects/shopease.jpg",
    tags: ["Swift", "SwiftUI", "Combine", "Stripe"],
    features: [
      "Advanced product search and filters",
      "Secure payment processing with Stripe",
      "Real-time order tracking",
      "Push notifications for deals and updates",
    ],
    downloads: "250K+",
    rating: 4.9,
    platform: ["iOS"],
    links: {
      appStore: "https://apps.apple.com/app/shopease",
      github: "https://github.com/luuchanhuy/shopease",
    }
  },
  {
    id: 3,
    title: "ChatHub - Messaging App",
    description: "Real-time messaging application with end-to-end encryption, group chats, and multimedia sharing capabilities.",
    image: "/projects/chathub.jpg",
    tags: ["Kotlin", "Jetpack Compose", "WebSocket", "Room DB"],
    features: [
      "End-to-end encrypted messaging",
      "Group chats with admin controls",
      "Voice and video calls",
      "Offline message sync",
    ],
    downloads: "500K+",
    rating: 4.7,
    platform: ["Android"],
    links: {
      playStore: "https://play.google.com/store/apps/chathub",
      github: "https://github.com/luuchanhuy/chathub",
    }
  },
  {
    id: 4,
    title: "FoodieHub - Food Delivery",
    description: "Food delivery app connecting users with local restaurants. Features real-time tracking, multiple cuisine options, and loyalty rewards.",
    image: "/projects/foodiehub.jpg",
    tags: ["React Native", "Node.js", "MongoDB", "Google Maps API"],
    features: [
      "Real-time order tracking with maps",
      "Advanced restaurant and dish search",
      "Multiple payment methods",
      "Loyalty rewards and referral system",
    ],
    downloads: "300K+",
    rating: 4.6,
    platform: ["iOS", "Android"],
    links: {
      appStore: "https://apps.apple.com/app/foodiehub",
      playStore: "https://play.google.com/store/apps/foodiehub",
    }
  },
  {
    id: 5,
    title: "MindfulMe - Meditation App",
    description: "Meditation and mindfulness app with guided sessions, breathing exercises, and progress tracking for mental wellness.",
    image: "/projects/mindfulme.jpg",
    tags: ["Flutter", "Dart", "Firebase", "Riverpod"],
    features: [
      "Guided meditation sessions",
      "Customizable breathing exercises",
      "Sleep stories and ambient sounds",
      "Daily mindfulness reminders",
    ],
    downloads: "150K+",
    rating: 4.9,
    platform: ["iOS", "Android"],
    links: {
      appStore: "https://apps.apple.com/app/mindfulme",
      playStore: "https://play.google.com/store/apps/mindfulme",
      github: "https://github.com/luuchanhuy/mindfulme",
    }
  },
  {
    id: 6,
    title: "TaskMaster - Productivity Tool",
    description: "Powerful task management and productivity app with smart scheduling, team collaboration, and analytics.",
    image: "/projects/taskmaster.jpg",
    tags: ["SwiftUI", "Core Data", "CloudKit", "Widgets"],
    features: [
      "Smart task scheduling with AI",
      "Team collaboration features",
      "Productivity analytics and insights",
      "iOS widgets and Apple Watch support",
    ],
    downloads: "75K+",
    rating: 4.8,
    platform: ["iOS"],
    links: {
      appStore: "https://apps.apple.com/app/taskmaster",
      github: "https://github.com/luuchanhuy/taskmaster",
    }
  }
];

export const experience = [
  {
    id: 1,
    company: "TechVision Solutions",
    position: "Senior Mobile Developer",
    period: "Jan 2022 - Present",
    location: "Ho Chi Minh City, Vietnam",
    type: "Full-time",
    description: "Leading mobile development team in building enterprise-level applications for iOS and Android platforms.",
    achievements: [
      "Led a team of 5 developers in building a fintech app with 500K+ downloads",
      "Improved app performance by 40% through code optimization",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews",
    ],
    technologies: ["React Native", "Swift", "Kotlin", "TypeScript", "Firebase"]
  },
  {
    id: 2,
    company: "Digital Innovations Inc.",
    position: "Mobile Developer",
    period: "Mar 2020 - Dec 2021",
    location: "Remote",
    type: "Full-time",
    description: "Developed and maintained multiple mobile applications for clients across various industries.",
    achievements: [
      "Built 8+ mobile applications from scratch",
      "Integrated third-party APIs and payment gateways",
      "Reduced crash rate from 2.5% to 0.3%",
      "Implemented push notifications increasing user engagement by 35%",
    ],
    technologies: ["React Native", "Node.js", "GraphQL", "Redux", "AWS"]
  },
  {
    id: 3,
    company: "StartupHub",
    position: "Junior Mobile Developer",
    period: "Jun 2019 - Feb 2020",
    location: "Ho Chi Minh City, Vietnam",
    type: "Full-time",
    description: "Worked on mobile app development for startup projects and MVPs.",
    achievements: [
      "Developed features for 3 startup applications",
      "Collaborated with designers to implement pixel-perfect UIs",
      "Participated in sprint planning and agile ceremonies",
      "Wrote unit and integration tests achieving 85% code coverage",
    ],
    technologies: ["React Native", "JavaScript", "Redux", "Firebase"]
  },
  {
    id: 4,
    company: "Freelance",
    position: "Mobile App Developer",
    period: "Jan 2018 - May 2019",
    location: "Remote",
    type: "Freelance",
    description: "Provided mobile app development services to small businesses and individuals.",
    achievements: [
      "Completed 12+ freelance projects successfully",
      "Maintained 5-star rating on freelance platforms",
      "Built long-term relationships with repeat clients",
      "Delivered projects on time and within budget",
    ],
    technologies: ["React Native", "Swift", "Firebase", "REST APIs"]
  }
];

export const education = [
  {
    id: 1,
    institution: "University of Technology",
    degree: "Bachelor of Computer Science",
    field: "Software Engineering",
    period: "2014 - 2018",
    location: "Ho Chi Minh City, Vietnam",
    achievements: [
      "GPA: 3.8/4.0",
      "Dean's List: 6 semesters",
      "Thesis: Mobile Application Security in Cross-Platform Development",
    ]
  },
  {
    id: 2,
    institution: "Online Certifications",
    degree: "Professional Certificates",
    field: "Mobile Development",
    period: "2018 - Present",
    location: "Online",
    achievements: [
      "iOS Development Nanodegree - Udacity",
      "Android Developer Certification - Google",
      "React Native Specialization - Meta",
      "AWS Certified Developer",
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Product Manager at TechVision",
    company: "TechVision Solutions",
    avatar: "/testimonials/sarah.jpg",
    text: "Huy is an exceptional mobile developer with a keen eye for detail. His ability to translate complex requirements into elegant mobile solutions is outstanding. He consistently delivers high-quality work ahead of schedule.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO",
    company: "Digital Innovations Inc.",
    avatar: "/testimonials/michael.jpg",
    text: "Working with Huy was a pleasure. His expertise in React Native and native development helped us launch our app successfully. He's proactive, communicative, and always brings creative solutions to the table.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Startup Founder",
    company: "FoodieHub",
    avatar: "/testimonials/emily.jpg",
    text: "Huy transformed our idea into a beautiful, functional app. His technical skills are matched by his professionalism and dedication. I highly recommend him for any mobile development project.",
    rating: 5
  }
];
