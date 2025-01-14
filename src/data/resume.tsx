import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "yeabsra Ashebir",
  initials: "YA",
  url: "https://dillion.io",
  location: " Addis Ababa, Ethiopia",
  locationLink: "https://maps.app.goo.gl/SDaUMo2GCskmfuuH7",
  description:
    "Intermediate Fullstack developer. I love building things and share them on the internet.",
  summary:
    "I am a Intermediate Full stack web and mobile developer with experience of working in a Typescript ecosystem. I use various technologies to build scaleable, fast and efficient software that satisfy the need of companies and client's. I like working in the challenging enviroment where i get to learn and grow as a professional while bringing a value to a company. ",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Javascript",
    "Node.js",
    "Postgres",
    "Docker",
    "React Native",
    "Expo",
    "Express.Js",
    "MongoDB",
    "Prisma",
    "Drizzle",
    "mySQL",
    "Electron.JS",
    "Socket.io",
    "TailwindCSS",
    "Nest.JS",
    "AWS",
    "GCP",
    "Cloudflare",
    "Redis",
    "socketIo",
    "Monorepos",
    "serverless Backend",
    "GRPC",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "yeabnoah5@gmail.com",
    tel: "+251993940494",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yeabnoah",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yeabsra-ashebir-tech-nerd-8a3a80267/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/TechNerd556",
        icon: Icons.x,

        navbar: true,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/selfmadecoder",
        icon: Icons.telegram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "MemhirEt",
      badges: [],
      href: "https://memhiret.com/",
      location: "Remote",
      title: "Mobile Engineer",
      logoUrl: "/memhir.jpg",
      start: "Augest 2024",
      end: "October 2024",
      description:
        "MemeherEt is an online learning platform based in Ethiopia, which targets students in their highschool to provide a preparation for EUEE(Ethiopian University Entrance Examination).I have Built their Mobile application from the Ground up , assuring cross platform compatibility, responsiveness, clean UI and efficient in its performance.The teh stack includes React Native, Expo, Zustand, React Query, DDD architecture Native-wind",
    },
    {
      company: "Upstart Studio",
      href: "https://up-start-studio-4bqe.vercel.app/",
      badges: [],
      location: "Addis Ababa, Ethiopia",
      title: "Full stack Software Engineer",
      logoUrl: "/upstart.svg",
      start: "October 2024",
      end: "now",
      description:
        "Upstart studio is a creative and product focused agency that works on helping startups build mvp, handle branding and more. I have successfully Build the the landing page for the Agency. Architected and wrote the entire MVP of the internal tool for the Agency. currently building a SAAS Application for Freelancers.",
    },
    {
      company: "Fincraze",
      href: "#",
      badges: [],
      location: "Remote, Contract",
      title: "Fullstack Web and Mobile Developer",
      logoUrl: "/fincraze.svg",
      start: "May 2024",
      end: "July 2024",
      description:
        "Fincraze is a company that works on business and logestics .. my main role was to build an end to end secured agent based money transaction flow system. Worked on the soul product minimum valuable product (MVP). built the Entire backend infrastructure, Ui Design and frontend Development for the admin Dashboard. Build 3 different mobile apps for money sender, receiver and agents. Deployed the entire Backend in a virtual private server(VPS).",
    },
    {
      company: "Xplor",
      href: "#",
      badges: [],
      location: "Addis Ababa Ethiopia",
      title: "CFO - Mobile Developer",
      logoUrl: "/xplor.png",
      start: "February 2024",
      end: "October 2024",
      description:
        "Explore was meant to be a go to platform for peoples who live in Addis ( Capital of Ethiopia ) to find Events amd places from the tip of their finger. I was a co-founding member of the Xplor team and also has worked on building the MVP for the app. Unfortunately the startup is currently not running",
    },
    {
      company: "NerdSpace",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Founder and Full stack developer",
      logoUrl: "/nerdspace.png",
      start: "January 2018",
      end: "April 2018",
      description:
        "Nerdspace is a social networking platform for anyone passionate about tech, art, gaming, building cool projects, or simply meeting like-minded people and also a space to connect, collaborate, and bring ideas to life. I build nerdspace in my learning time and write the entire backend and also mobile app with Javascript, currently migrating to Ts in my free time. not actively working on it.",
    },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "Addis Ababa University",
      href: "https://www.aau.edu.et/",
      degree: "Bachelor's of Electrical Engineering",
      logoUrl: "/aau1.png",
      start: "2022",
      end: "Dropped Out",
    },
  ],
  projects: [
    {
      title: "Linksy",
      href: "https://linksy1.vercel.app/",
      dates: "January 01 2025",
      active: true,
      description:
        "Linksy : is an open-source bookmark and link manager that enables users to organize and manage their social media posts and other links. ",
      technologies: [
        "Next.js",
        "Typescript",
        "Better Auth",
        "Prisma",
        "PostgreSQL",
        "Better Auth",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://linksy1.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yeabnoah/linksy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/linksy.webp",
      video: "",
    },
    {
      title: "UP-Start Studio",
      href: "https://up-start-studio-4bqe.vercel.app/",
      dates: "October 2024",
      active: true,
      description:
        "Designed and built a landing page for Upstart studio --- [landing page link](up-start-studio-4bqe.vercel.app)",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://up-start-studio-4bqe.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yeabnoah/up-start-studio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/upstart.png",
      video: "",
    },
    {
      title: "Frame : Dev Portfolio Builder",
      href: "https://frame.nerdspacer.com",
      dates: "september 2024 - December 2024",
      active: true,
      description:
        "Frame empowers developers to create, manage, and showcase their work effortlessly. With a powerful dashboard, you can add projects, write articles, and preview your personalized portfolio",
      technologies: [
        "Next.js",
        "Honojs",
        "Better-Auth",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://frame.nerdspacer.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yeabnoah/frame",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/frame.png",
      video: "",
    },
    {
      title: "HackWoo : AI Hackaton Assistant",
      href: "https://hackerwoo.vercel.app/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Hackwoo-AI is your AI-powered assistant for hackathons, helping you ideate, code, and present your projects faster and more efficiently.",
      technologies: [
        "Next.js",
        "Typescript",
        "Gemini",
        "TailwindCSS",
        "Shadcn UI",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://hackerwoo.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yeabnoah/hackerwoo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/hack.png",
      video: "",
    },
    {
      title: "No Junk: Android app",
      href: "https://no-junk-landing.vercel.app/",
      dates: "september 2024",
      active: true,
      description:
        "No Junk is your go-to platform for discovering and sharing the most valuable content from across all social media. ",
      technologies: [
        "React Native",
        "Expo",
        "Firebase",
        "Native-wind",
        "Clerk",
      ],
      links: [
        {
          type: "Website",
          href: "https://no-junk-landing.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yeabnoah/No-Junk",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/noJunk.png",
      video: "",
    },
    {
      title: "SoulScribe: Android app",
      href: "https://soulscribe-landing.vercel.app/",
      dates: "March 2024",
      active: true,
      description:
        "SoulScribe is a mobile app that serves as a pocket cheat sheet for Bible verses, meticulously categorized and presented for various life situations.",
      technologies: ["React Native", "Expo", "Native-wind"],
      links: [
        {
          type: "Website",
          href: "https://soulscribe-landing.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yeabnoah/soulscribe",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/soul.png",
      video: "",
    },
    {
      title: "Nerdspace Wait-list",
      href: "https://nerdspace-vert.vercel.app/",
      dates: "October 2023 - march 2024",
      active: true,
      description:
        "The site is the waitlist page but the code base is the entire codebase for the Nerdspace project, which includes Backend, frontend, mobile and admin Dashboard",
      technologies: [
        "React Native",
        "Expo",
        "MongoDb",
        "ExpressJs",
        "Tailwind css",
        "Zustand",
      ],
      links: [
        {
          type: "Website",
          href: "https://nerdspace-vert.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yeabnoah/NerdSpace_CodeBase",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/nerd.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "React Native UI library",
      dates: "a week ago",
      location: "active",
      description:
        "Currently on a progress of building and publishing a shadCN like ui component library for react native.",
      image: "",
      mlh: "",
      links: [],
    },
    {
      title: "Building an AI powered Book Mark Manager",
      dates: "Started 2 weeks ago",
      location: "active",
      description:
        "building an app that will act as a second brain for peoples to help memorize query over all the memories and chat with the ai",
      image: "",
      mlh: "",
      links: [],
    },
    {
      title:
        "Researching to Build an application building AI agent ( kinda like bolt.new )",
      dates: "Started this week",
      location: "pending",
      description:
        "building an app that will help anyone build apps by just prompting and conversation. this is teaching me a lot like how toknization works, embedings, LLMS, it also gave me interest to learn more about stuff like agents.",
      image: "",
      mlh: "",
      links: [],
    },
    {
      title:
        "Building in real life version of manHunt game with ReactNative and Golang",
      dates: "started this week",
      location: "3 days in a week",
      description:
        "I am building this to work more with maps, microservices and also Golang. I also stream building this app in public while learning it at the same time.",
      image: "",
      mlh: "",
      links: [],
    },
  ],
} as const;
