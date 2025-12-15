export const yearsSinceStart = () => {
  const pastDate = new Date("2018-04-01T07:00:00.000Z");
  const currentDate = new Date();
  return currentDate.getFullYear() - pastDate.getFullYear();
};

export const resume = {
  basics: {
    name: "Le Viet Duc",
    label: "Intern Frontend Developer (Reactjs/Nextjs)",
    image: null,
    email: "levietduc.dev@gmail.com",
    phone: "0386 631 531",
    urlGithub: "https://github.com/VietDuc-Dev",
    urlPortfolio: "https://github.com/VietDuc-Dev",
    summary: `A ReactJS/NextJS programmer building optimized Frontend solutions for UX/performance. Experienced in implementing features and solving complex bugs based on Clean Code and SOLID principles. Possesses a high sense of responsibility and excellent teamwork ability.`,
    location: {
      address: null,
      postalCode: null,
      region: "Hiep Binh Chanh",
      city: "Thu Duc",
      countryCode: "VN",
    },
    profiles: [
      {
        network: "Youtube",
        url: "https://youtube.com/c/vietduc.dev",
        username: "vietduc.dev",
      },
      {
        network: "Github",
        url: "https://github.com/vietduc.dev",
        username: "vietduc.dev",
      },
      {
        network: "Buy Me A Coffee",
        url: "https://www.buymeacoffee.com/vietduc.dev",
        username: "vietduc.dev",
      },
      {
        network: "Linkedin",
        url: "https://www.linkedin.com/in/vietduc.dev-461756152/",
        username: "vietduc.dev",
      },
      {
        network: "Instagram",
        url: "https://instagram.com/vietduc.dev",
        username: "vietduc.dev",
      },
    ],
  },
  work: [
    {
      name: "Ky Nguyen So Software Co., Ltd (Derasoft)",
      location: "Tan Binh, HCM",
      locationType: "On-Site",
      description: null,
      skills: ["typescript", "react", "html-css", "Rest APIs"],
      url: "https://derasoft.com/",
      image: null,
      position: "Intern",
      startDate: "2023-12-16T08:00:00.000Z",
      endDate: "2024-03-21T08:00:00.000Z",
      summary: "Ky Nguyen So Software Co., Ltd (Derasoft)",
      highlights: [
        "Participated in interface design and UI/UX optimization.",
        "Supported the development of React components and fixed frontend bugs.",
        "Worked according to Git Workflow and supported feature test deployment.",
      ],
    },
    {
      name: "Viettel Import and Export Corporation (Viettel)",
      location: "Linh Chieu, Thu Duc, HCM",
      locationType: "Stable Job",
      description: null,
      skills: ["react"],
      url: null,
      image: null,
      position: "Technical Specialist",
      startDate: "2024-04-08T08:00:00.000Z",
      endDate: "2025-08-20T08:00:00.000Z",
      summary: "Viettel Import and Export Corporation (Viettel)",
      highlights: [
        "Conducted technical analysis and system troubleshooting.",
        "Communicated with customers and proposed solutions to improve the experience.",
        "Gained technical support experience that enhanced frontend debugging skills.",
        "Key Achievement: Received the title Excellent Employee, contributing positively to the company's business activities in 2024",
      ],
    },
  ],
  education: [
    {
      institution:
        "University of Transport and Communications - Campus in Ho Chi Minh City",
      area: "Information Technology major",
      location: "Tang Nhon Phu A, Thu Duc, HCM",
      startDate: "2020-08-01T07:00:00.000Z",
      endDate: "2024-08-01T08:00:00.000Z",
      studyType: null,
      gpa: null,
      courses: null,
    },
  ],
  skills: [
    {
      name: "Programming Languages",
      keywords: ["TypeScript", "JavaScript", "HTML & CSS"],
    },
    {
      name: "Frontend Technologies",
      keywords: [
        "React",
        "React Router",
        "Redux",
        "Next.js",
        "Bootstrap",
        "Material UI",
        "Tailwind CSS",
        "Shadcn UI",
        "Jest",
      ],
    },
    {
      name: "Backend & Databases",
      keywords: ["Node.js", "Express.js", "Rest APIs", "PostgreSQL", "MongoDB"],
    },
    {
      name: "DevOps & Tools",
      keywords: ["Docker", "CI/CD", "Github Actions", "Git"],
    },
    {
      name: "Languages",
      keywords: ["Vietnamese (Native)", "English (TOEIC 600)"],
    },
  ],
  projects: [
    {
      name: "Team Project Management Application",
      url: "https://teams-project-management-app.vercel.app/",
      startDate: "2025-06-01T07:00:00.000Z",
      endDate: "2025-07-01T07:00:00.000Z",
      description:
        "A powerful and scalable multi-tenancy project management system built with Node.js, MongoDB, and React.",
      account: "Email: admin@gmail.com     Password: admin123",
      highlights: [
        "This project delivers features like Google SignIn, workspace management, project tracking, task collaboration, role-based permissions, and more.",
        "Perfect for developers aiming to create SaaS-based team collaboration platforms.",
      ],
    },
    {
      name: "E-commerce Online Store Application",
      url: "https://e-commerce-wine-one-72.vercel.app/",
      startDate: "2025-10-01T07:00:00.000Z",
      endDate: "2025-12-01T07:00:00.000Z",
      description:
        "Provides online shopping features: product viewing, direct payment, order management.",
      account: "Email: admin@gmail.com     Password: admin123",
      dashboardUrl:
        "Dashboard : https://e-commerce-dashboard-hazel.vercel.app/",
      highlights: [
        "Provides online shopping features: product viewing, direct payment, order management.",
        "Sellers manage products, orders, users, and view revenue statistics.",
        "Integrated filtering, search, and AI-based suggested searching based on customer preferences.",
      ],
    },
    {
      name: "Online Movie Streaming Application - Web Movie",
      url: "https://moonflix.vercel.app/",
      startDate: "2024",
      endDate: null,
      description:
        "Offers online movie viewing, new movie updates, favorite movie saving, with an eye-catching interface supporting dark/light mode.",
      highlights: [
        "Client : ReactJs, JavaScript, react toolkit, Merterial UI, tailwind css",
        "Server : NodeJs, JavaScript, express, mongooes, jsonwebtoken, TMDB",
      ],
    },
  ],
};

export type Resume = typeof resume;
