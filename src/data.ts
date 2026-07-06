import { Project, Certification } from "./types";

export const PERSONAL_INFO = {
  name: "GANI ABI SAPUTRA V.S.",
  title: "Full stack developer",
  aboutText: "I am a Computer Science student at Universitas Pembangunan Nasional \"Veteran\" Jawa Timur focusing on Web Development, UI/UX Design, and mobile application development. I continuously develop my skills in creating functional and user-focused digital solutions while actively participating in organizations and committees to strengthen my teamwork, communication, and leadership abilities. I also completed a Web Developer course at Dicoding and am currently learning Laravel to deepen my backend development skills and modern web system development.",
  phone: "0857 3050 0101",
  email: "gamely017@gmail.com",
  github: "github.com/jettt017",
};

export const SKILLS_AND_TOOLS = {
  frontend: [
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "JavaScript", icon: "js" },
    { name: "TypeScript", icon: "ts" },
    { name: "React", icon: "react" },
    { name: "Vite", icon: "vite" },
    { name: "Figma", icon: "figma" },
    { name: "Next.js", icon: "next" },
    { name: "Tailwind CSS", icon: "tailwind" }
  ],
  backend: [
    { name: "Python", icon: "python" },
    { name: "C++", icon: "cpp" },
    { name: "FastAPI", icon: "fastapi" },
    { name: "Laravel", icon: "laravel" },
    { name: "MySQL", icon: "mysql" },
    { name: "NestJS", icon: "nest" },
    { name: "PHP", icon: "php" },
    { name: "REST API", icon: "rest" }
  ],
  tools: [
    { name: "Figma", icon: "figma" },
    { name: "VS Code", icon: "vscode" },
    { name: "Android Studio", icon: "android" },
    { name: "Git", icon: "git" },
    { name: "Photoshop", icon: "photoshop" },
    { name: "GitHub", icon: "github" },
    { name: "Vercel", icon: "vercel" },
    { name: "Illustrator", icon: "illustrator" },
    { name: "npm", icon: "npm" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "jitygeld",
    title: "JityGeld",
    subtitle: "Premium Personal Finance Tracker",
    role: "FULL STACK DEVELOPER",
    description: "JityGeld is a premium personal finance management application that helps users monitor income, expenses, savings goals, and budgeting in one modern dashboard. The application provides interactive financial analytics, smart budgeting tools, transaction management, and insightful spending visualizations to help users build healthier financial habits.",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
      "PostgreSQL",
      "Supabase",
      "Recharts",
      "Lucide React"
    ],
    contributions: [
      "Designed the complete UI/UX system",
      "Developed the entire frontend application",
      "Built the backend architecture using Next.js App Router",
      "Designed and implemented the PostgreSQL database with Prisma ORM",
      "Integrated Supabase Authentication and Storage",
      "Developed financial dashboards and interactive analytics",
      "Implemented budgeting, savings goals, and transaction management",
      "Optimized performance, responsive layouts, and user experience"
    ],
    link: "jity-geld.vercel.app"
  },
  {
    id: "mia",
    title: "Mia",
    subtitle: "Multimedia In Action Hackathon",
    role: "UI/UX Designer & Frontend Developer",
    description: "MIA is a digital platform designed to help users discover and explore nearby UMKM businesses through a modern and user-friendly interface. Developed during the Multimedia In Action Hackathon, the platform focuses on improving local business visibility and accessibility.",
    techStack: ["Figma", "React.js", "CSS", "JavaScript", "GitHub", "Git"],
    contributions: [
      "Designed UI layouts and user experience flow",
      "Built responsive frontend interfaces",
      "Collaborated with team during hackathon development",
      "Focused on modern and user-friendly design implementation"
    ],
    link: "mia-topaz-theta.vercel.app"
  },
  {
    id: "e-cycle",
    title: "E-Cycle Platform",
    subtitle: "AI-Powered Waste Management Platform",
    role: "Frontend & Backend Developer",
    description: "E-Cycle Platform is a digital platform focused on smarter and sustainable waste management through modern web technology and AI integration. The platform provides an interactive system to support recycling activities and improve user accessibility through AI powered features.",
    techStack: ["Next.js", "React.js", "Tailwind CSS", "JavaScript", "GitHub", "Git"],
    contributions: [
      "Developed responsive frontend interfaces and backend system functionality",
      "Integrated AI features using Gemini Flash API",
      "Built interactive and user-friendly platform experiences",
      "Implemented modern web technologies for scalable application development"
    ],
    link: "e-cycleplatform.vercel.app"
  },
  {
    id: "grinbuds",
    title: "GrinBuds",
    subtitle: "Gamified Learning Platform for Children",
    role: "UI/UX Designer & Frontend Developer",
    description: "GrinBuds is an educational gamification platform inspired by Duolingo, designed to help children learn reading skills through interactive and engaging mini-games. The platform also provides early dyslexia detection features and a comprehensive parent dashboard to monitor children’s learning progress in real time.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Howler.js", "Git"],
    contributions: [
      "Designed child-friendly UI/UX interfaces and learning flows",
      "Developed responsive frontend interfaces using Next.js",
      "Implemented interactive animations and gamification elements using frame motion",
      "Focused on accessibility and engaging user experience design",
      "Contributed to the development of an interactive and engaging learning platform"
    ],
    link: "grinbuds2.vercel.app"
  },
  {
    id: "nusatales",
    title: "Nusatales",
    subtitle: "Cultural Storytelling Platform",
    role: "Backend Developer",
    description: "NusaTales is a digital platform designed to introduce and preserve Indonesian culture through interactive storytelling and modern digital experiences. The platform provides users with access to cultural stories and educational content in an engaging and accessible way.",
    techStack: ["Laravel", "PHP", "MySQL", "REST API", "GitHub", "Git"],
    contributions: [
      "Developed backend system functionality and API integration",
      "Managed data handling and server-side logic",
      "Implemented database connectivity and system architecture",
      "Supported application performance and backend optimization",
      "Collaborated with team members during platform development"
    ],
    link: "nusatales.isslab.web.id"
  },
  {
    id: "portalia",
    title: "Portalia",
    subtitle: "Campus Marketplace Mobile App UI/UX Design",
    role: "UI/UX Designer",
    description: "Portalia is a mobile marketplace application designed to help students buy, sell, and manage products more efficiently within the campus environment. The application provides a modern and structured digital marketplace experience with features such as product listings, categories, chat, favorites, and user profile management in a user-friendly mobile interface.",
    techStack: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    contributions: [
      "Designed modern and intuitive mobile UI/UX interfaces",
      "Created user flows and marketplace interaction design",
      "Developed responsive mobile app layouts and design systems",
      "Focused on accessibility, usability, and user-centered design",
      "Designed clean and organized marketplace experiences for students"
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "dicoding",
    issuer: "Dicoding",
    title: "Web Developer Learning Path",
    description: "Learning modern web development fundamentals including frontend, backend, and responsive web design."
  },
  {
    id: "laravel",
    issuer: "Laravel Course",
    title: "Fullstack Web Development with Laravel",
    description: "Learning modern web application development using Laravel, including backend systems, database management, authentication, and Blade templating."
  }
];
