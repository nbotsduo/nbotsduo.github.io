export interface Experience {
  company: string;
  role: string;
  period: string;
  techStack: string[];
  highlights: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  images: string[];
  category: "web" | "mobile" | "data";
  links?: { github?: string; demo?: string };
}

export interface Skill {
  name: string;
  level: number;
  category: "backend" | "frontend" | "database" | "tools" | "mobile";
}

export const personalInfo = {
  name: "Muhammad Na'im",
  fullName: "Muhammad Na'im Mohammad Hatta",
  title: "Software Developer",
  tagline: "Backend engineer who builds full-stack solutions",
  bio: [
    "Backend-focused developer with strong full-stack capabilities. I specialize in C# and .NET ecosystems, building scalable enterprise applications for banking and insurance sectors.",
    "Beyond the backend, I work across React, Next.js, and mobile development — I believe understanding the full stack makes me a better engineer.",
    "Currently exploring distributed systems, cloud architecture, and performance optimization. Always looking for problems that challenge me to grow.",
  ],
  email: "mnaimhatta1@gmail.com",
  location: "Malaysia",
  social: {
    github: "https://github.com/nbotsduo",
    linkedin: "https://www.linkedin.com/in/muhammad-na-im-mohammad-hatta-9653411b5/",
  },
  resumeUrl: "/Naim_Resume.pdf",
};

export const skills: Skill[] = [
  { name: "C# / .NET Core", level: 95, category: "backend" },
  { name: "VB.NET / Razor", level: 85, category: "backend" },
  { name: "Node.js", level: 70, category: "backend" },
  { name: "REST API Design", level: 85, category: "backend" },
  { name: "React / Next.js", level: 75, category: "frontend" },
  { name: "JavaScript / TypeScript", level: 80, category: "frontend" },
  { name: "jQuery", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 75, category: "frontend" },
  { name: "SQL Server", level: 90, category: "database" },
  { name: "MySQL / PostgreSQL", level: 80, category: "database" },
  { name: "SSRS", level: 75, category: "database" },
  { name: "MSSQL", level: 85, category: "database" },
  { name: "Git", level: 80, category: "tools" },
  { name: "Postman", level: 80, category: "tools" },
  { name: "Agile / Scrum", level: 85, category: "tools" },
  { name: "React Native", level: 70, category: "mobile" },
  { name: "Kotlin", level: 50, category: "mobile" },
];

export const experiences: Experience[] = [
  {
    company: "AppFuxion Consulting",
    role: "Software Developer",
    period: "2025 - Present",
    techStack: ["C#", "VB.NET", ".NET Core", "Razor", "SQL Server", "SSRS", "JavaScript", "jQuery"],
    highlights: [
      "Upgraded legacy banking system from VB to VB.NET, migrating Crystal Reports to SSRS — reducing report load times significantly",
      "Built a new insurance product website using .NET Core, Razor Pages, and SQL Server with a team of 3 developers",
      "Delivered production support and change requests post-launch for banking systems",
    ],
  },
  {
    company: "Ethereal Digital",
    role: "Software Developer",
    period: "2024 - 2025",
    techStack: ["C#", ".NET Core", "SQL Server", "SSRS", "Node.js", "jQuery", "Postman"],
    highlights: [
      "Developed eInvoice feature for an Insurance Portal serving 30+ products, integrating with in-house eInvoice Gateway",
      "Led a team of 3 to enhance the portal for LHDN compliance and eInvoice implementation",
      "Built a dummy API to mimic LHDN eInvoice API using Node.js before official release",
    ],
  },
  {
    company: "ALAMI Technologies",
    role: "Web Developer",
    period: "2022 - 2024",
    techStack: [".NET Core", "MSSQL", "GIS Technology", "Laravel PHP", "PostgreSQL", "Java Servlet Page", "Esri ArcGIS Enterprise"],
    highlights: [
      "Developed an Asset Management System integrating GIS technology for asset tagging and location tracking",
      "Provided maintenance and updates for government agency systems built on Laravel PHP and PostgreSQL",
      "Built an online web-based system for a government agency using MSSQL, Java Servlet Pages, and Esri ArcGIS Enterprise",
    ],
  },
  {
    company: "Inter XS Sdn Bhd",
    role: "Mobile Developer Intern",
    period: "2022",
    techStack: ["React Native", "PHP", "MySQL"],
    highlights: [
      "Developed a community-focused mobile app using React Native with PHP and MySQL backend",
    ],
  },
  {
    company: "Universiti Putra Malaysia",
    role: "Web Developer",
    period: "2019",
    techStack: ["PHP", "PostgreSQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    highlights: [
      "Collaborated with IT department to design a facility booking system using PHP Seashell Framework and PostgreSQL",
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "RCars",
    description: "A car enthusiast platform featuring articles, reviews, and curated content — inspired by Carwow and TopGear.",
    tech: ["React", "Tailwind CSS", "Chart.js"],
    images: ["/Pictures/rcarsLarge.png"],
    category: "web",
  },
  {
    id: 2,
    title: "VWorld",
    description: "Travel booking system built for a System Development course project.",
    tech: ["PHP", "MySQL"],
    images: ["/Pictures/vworldLarge.jpg", "/Pictures/vworld2.jpg"],
    category: "web",
  },
  {
    id: 3,
    title: "La Tapi Resort Management System",
    description: "Full resort management system handling room booking, facilities, entertainment, and F&B services.",
    tech: ["Visual Basic", ".NET", "Microsoft Access"],
    images: ["/Pictures/latapi.jpg", "/Pictures/latapi2.jpg", "/Pictures/latapi3.jpg"],
    category: "web",
  },
  {
    id: 4,
    title: "Tea Ordering System",
    description: "Online drink ordering and inventory management system.",
    tech: ["Java Enterprise", "MySQL"],
    images: ["/Pictures/teaLarge.png"],
    category: "web",
  },
  {
    id: 5,
    title: "Community Marketplace",
    description: "Android mobile app for community marketplace — final year project.",
    tech: ["Kotlin", "Firebase"],
    images: ["/Pictures/comMart.jpg", "/Pictures/comMart2.jpg", "/Pictures/comMart3.jpg", "/Pictures/comMart4.jpg", "/Pictures/comMart5.jpg"],
    category: "mobile",
  },
  {
    id: 6,
    title: "Emasjid",
    description: "Mobile app helping mosque committees manage announcements, spiritual activities, and community engagement.",
    tech: ["React Native", "PHP", "MySQL"],
    images: ["/Pictures/emasjid.png", "/Pictures/emasjid2.png", "/Pictures/emasjid3.png"],
    category: "mobile",
  },
  {
    id: 7,
    title: "COVID-19 Prediction Model",
    description: "Predictive model forecasting COVID-19 cases based on historical data across multiple countries.",
    tech: ["Python", "Jupyter Notebook", "Anaconda"],
    images: ["/Pictures/covidLarge.jpg"],
    category: "data",
  },
];
