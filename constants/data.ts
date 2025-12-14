export const DB_User = [
  {
    id: "user_36YvoGZ6yiQVujpTR2kBaSLRndz",
    email: "levietduc.dev@gmail.com.com",
    name: "Việt Đức",
    role: "Admin",
    slug: "viet-duc",
    profileImageUrl: "https://avatars.githubusercontent.com/u/1",
    bio: "Fullstack Developer - MERN & Next.js",
  },
  {
    id: "user_36YvoGZ6yiQkjbpTR2kBaSLRndz",
    email: "nguyennam@example.com",
    name: "Nguyen Nam",
    role: "User",
    slug: "nguyen-nam",
    profileImageUrl: "https://avatars.githubusercontent.com/u/2",
    bio: null,
  },
];

export const DB_Project = [
  {
    userId: "user_36YvoGZ6yiQVujpTR2kBaSLRndz",
    title: "Teams Project Management App",
    slug: "teams-project-management-app",
    description:
      "Welcome to VietDuc.dev, a powerful and scalable multi-tenancy project management system built with Node.js, MongoDB, and React. Designed for real-world B2B needs, this project delivers features like Google Sign-In, workspace management, project tracking, task collaboration, role-based permissions, and more. Perfect for developers aiming to create SaaS-based team collaboration platforms.",
    featured: "No",
    liveUrl: "https://teams-project-management-app.vercel.app/",
    githubUrl: "https://github.com/VietDuc-Dev/TeamsProjectManagementApp",
    coverImage:
      "https://cdn.sanity.io/images/fpx3afrv/production/c9735ae7e20ef26c90fc7e1607c2bfdc08097792-4320x4320.png?w=1080&h=1080&fm=webp&q=85",
    projectImage:
      "https://cdn.sanity.io/images/fpx3afrv/production/c9735ae7e20ef26c90fc7e1607c2bfdc08097792-4320x4320.png?w=1080&h=1080&fm=webp&q=85",
    projectSkills: ["HTML", "CSS", "JavaScript", "Getform", "Google Fonts"],
    projectFeatures: [
      "🔐 Authentication (Google Sign-In, Email, Password)",
      "🏢 Create & Manage Multiple Workspaces",
      "📊 Projects & Epics Management",
      "✅ Tasks (CRUD, Status, Priority, Assignee)",
      "👥 Roles & Permissions (Owner, Admin, Member)",
      "✉️ Invite Members to Workspaces",
      "🔍 Filters & Search (Status, Priority, AssignedTo)",
      "📈 Analytics Dashboard",
      "📅 Pagination & Load More",
      "🔒 Cookie Session Management",
      "🚪 Logout & Session Termination",
      "🌱 Seeding for Test Data",
      "💾 Mongoose Transactions for Robust Data Integrity",
      "🌐 Built with MERN Stack (Node.js, MongoDB, React, TypeScript)",
    ],
  },
  {
    userId: "user_36YvoGZ6yiQVujpTR2kBaSLRndz",
    title: "E-Commerce Full-Stack App",
    slug: "e-commerce-full-Stack-application",
    description:
      "Welcome to VietDuc.dev, a modern and scalable online shopping platform built with (Node.js, Express, Postgresql, React, typeScript). This application delivers all essential features of a real-world e-commerce system: product management, cart, checkout, order workflow, admin dashboard, role-based access, JWT security, and more.",
    featured: "No",
    liveUrl: "https://e-commerce-wine-one-72.vercel.app/",
    githubUrl: "https://github.com/VietDuc-Dev/E-Commerce",
    youtubeUrl: "",
    coverImage:
      "https://cdn.sanity.io/images/fpx3afrv/production/c9735ae7e20ef26c90fc7e1607c2bfdc08097792-4320x4320.png?w=1080&h=1080&fm=webp&q=85",
    projectImage:
      "https://cdn.sanity.io/images/fpx3afrv/production/c9735ae7e20ef26c90fc7e1607c2bfdc08097792-4320x4320.png?w=1080&h=1080&fm=webp&q=85",
    projectSkills: ["HTML", "CSS", "JavaScript", "Getform", "Google Fonts"],
    projectFeatures: [
      "🔐 Authentication & Authorization (JWT, change password by email, Role-based: User / Admin)",
      "👤 User Profile Management (Update info, shipping addresses)",
      "🛒 Shopping Cart (Add, remove, update quantity)",
      "🧾 Checkout Flow (Order creation, payment, shipping)",
      "💳 Payment Integration (Stripe)",
      "📦 Order Management (CRUD, status updates)",
      "🏷️ Product Management (CRUD, categories, tags, filters)",
      "🖼️ Product Image Gallery (Multiple images, Cloudinary/local uploads)",
      "🔍 Advanced Search & Filters (Keyword, category, price range, AI assistant)",
      "⭐ Product Reviews & Ratings",
      "📊 Admin Dashboard",
      "📈 Analytics (Revenue, top products, sales trends)",
      "📅 Pagination & Sorting",
    ],
  },
  {
    userId: "user_36YvoGZ6yiQVujpTR2kBaSLRndz",
    title: "MERN Moonflix Application",
    slug: "mern-moonflix-application",
    description:
      "Welcome to VietDuc.dev, a modern and scalable online shopping platform built with (Node.js, Express, Postgresql, React, typeScript). This application delivers all essential features of a real-world e-commerce system: product management, cart, checkout, order workflow, admin dashboard, role-based access, JWT security, and more.",
    featured: "No",
    liveUrl: "https://moonflix.vercel.app/",
    githubUrl: "https://github.com/VietDuc-Dev/E-Commerce",
    youtubeUrl: "",
    coverImage:
      "https://cdn.sanity.io/images/fpx3afrv/production/c9735ae7e20ef26c90fc7e1607c2bfdc08097792-4320x4320.png?w=1080&h=1080&fm=webp&q=85",
    projectImage:
      "https://cdn.sanity.io/images/fpx3afrv/production/c9735ae7e20ef26c90fc7e1607c2bfdc08097792-4320x4320.png?w=1080&h=1080&fm=webp&q=85",
    projectSkills: ["HTML", "CSS", "JavaScript", "Getform", "Google Fonts"],
    projectFeatures: [
      "🔐 Authentication & Authorization (JWT, change password by email, Role-based: User / Admin)",
      "👤 User Profile Management (Update info, shipping addresses)",
      "🛒 Shopping Cart (Add, remove, update quantity)",
      "🧾 Checkout Flow (Order creation, payment, shipping)",
      "💳 Payment Integration (Stripe)",
      "📦 Order Management (CRUD, status updates)",
      "🏷️ Product Management (CRUD, categories, tags, filters)",
      "🖼️ Product Image Gallery (Multiple images, Cloudinary/local uploads)",
      "🔍 Advanced Search & Filters (Keyword, category, price range, AI assistant)",
      "⭐ Product Reviews & Ratings",
      "📊 Admin Dashboard",
      "📈 Analytics (Revenue, top products, sales trends)",
      "📅 Pagination & Sorting",
    ],
  },
];

export const DB_Experiences = [
  {
    userId: "",
    company: "Tech Company A",
    position: "Fullstack Developer",
    startDate: new Date("2023-01-01"),
    description: "Developed web applications using Next.js & Node.js",
  },
  {
    userId: "",
    company: "Startup B",
    position: "Frontend Developer",
    startDate: new Date("2022-01-01"),
    endDate: new Date("2022-12-31"),
    description: "Focused on UI/UX with React & Tailwind",
  },
];
