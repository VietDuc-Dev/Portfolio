import { prisma } from "../lib/prisma";

async function main() {
  // User
  // await prisma.user.createMany({
  //   data: [
  //     {
  //       id: "user_36YvoGZ6yiQVujpTR2kBaSLRndz",
  //       email: "levietduc.dev@gmail.com",
  //       name: "levietduc.dev",
  //       role: "ADMIN",
  //       slug: "levietducdev-slrndz",
  //       profileImageUrl:
  //         "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18zNlZpSTBEaUcwR2tMVEsxMzk1MTJWanladFEiLCJyaWQiOiJ1c2VyXzM2WXZvR1o2eWlRVnVqcFRSMmtCYVNMUm5keiJ9",
  //       bio: "Fullstack Developer - MERN & Next.js",
  //     },
  //     {
  //       id: "user_36YvG2XI8RaGlDsLxr8oc8ob9Tk",
  //       email: "levietduc4566@gmail.com",
  //       name: "levietduc4566",
  //       role: "USER",
  //       slug: "levietduc4566-8ob9tk",
  //       profileImageUrl:
  //         "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18zNlZpSTBEaUcwR2tMVEsxMzk1MTJWanladFEiLCJyaWQiOiJ1c2VyXzM2WXM2aEFLTVNhQ1pUWjE2NFZwZWY1azJNbSJ9",
  //       bio: "System administrator",
  //     },
  //   ],
  // });
  // Skill
  // await prisma.skill.createMany({
  //   data: [
  //     { name: "HTML", iconUrl: "html5.svg" },
  //     { name: "CSS3", iconUrl: "CSS3.svg" },
  //     { name: "JavaScript", iconUrl: "javascript.svg" },
  //     { name: "TypeScript", iconUrl: "Typescript.svg" },
  //     { name: "React", iconUrl: "react.svg" },
  //     { name: "Next.JS", iconUrl: "next.js.svg" },
  //     { name: "Tailwind CSS", iconUrl: "tailwind css.svg" },
  //     { name: "Shadcn UI", iconUrl: "shadcn.png" },
  //     { name: "Material UI", iconUrl: "material ui.svg" },
  //     { name: "Motion", iconUrl: "motion.png" },
  //     { name: "Redux", iconUrl: "redux.svg" },
  //     { name: "Node.JS", iconUrl: "node.js.svg" },
  //     { name: "Express", iconUrl: "express.svg" },
  //     { name: "PostgresSQL", iconUrl: "PostgresSQL.svg" },
  //     { name: "MongoDB", iconUrl: "MongoDB.svg" },
  //     { name: "JSON Web Tokens", iconUrl: "jwt.png" },
  //     { name: "GitHub", iconUrl: "github.svg" },
  //     { name: "Docker", iconUrl: "docker.svg" },
  //     { name: "Figma", iconUrl: "figma.svg" },
  //     { name: "Jest", iconUrl: "jest.svg" },
  //     { name: "Postman", iconUrl: "postman.svg" },
  //     { name: "Socket.io", iconUrl: "Socket.io.svg" },
  //   ],
  // });
  // Project
  // await prisma.project.create({
  //   data: {
  //     userId: "user_36YvoGZ6yiQVujpTR2kBaSLRndz",
  //     title: "Teams Project Management App",
  //     slug: "teams-project-management-app",
  //     description:
  //       "Welcome to VietDuc.dev, a powerful and scalable multi-tenancy project management system built with Node.js, MongoDB, and React. Designed for real-world B2B needs, this project delivers features like Google Sign-In, workspace management, project tracking, task collaboration, role-based permissions, and more. Perfect for developers aiming to create SaaS-based team collaboration platforms.",
  //     liveUrl: "https://teams-project-management-app.vercel.app/",
  //     githubUrl: "https://github.com/VietDuc-Dev/TeamsProjectManagementApp",
  //     coverImage: "/image-1.jpg",
  //   },
  // });
  // await prisma.project.create({
  //   data: {
  //     userId: "user_36YvoGZ6yiQVujpTR2kBaSLRndz",
  //     title: "E-Commerce Full-Stack App",
  //     slug: "teame-commerce-full-Stack-application",
  //     description:
  //       "Welcome to VietDuc.dev, a modern and scalable online shopping platform built with (Node.js, Express, Postgresql, React, typeScript). This application delivers all essential features of a real-world e-commerce system: product management, cart, checkout, order workflow, admin dashboard, role-based access, JWT security, and more.",
  //     liveUrl: "https://e-commerce-wine-one-72.vercel.app/",
  //     githubUrl: "https://github.com/VietDuc-Dev/E-Commerce",
  //     coverImage: "/image-2.jpg",
  //   },
  // });
  // await prisma.project.create({
  //   data: {
  //     userId: "user_36YvoGZ6yiQVujpTR2kBaSLRndz",
  //     title: "MERN Moonflix Application",
  //     slug: "mern-moonflix-application",
  //     description:
  //       "Welcome to VietDuc.dev, a modern and scalable online shopping platform built with (Node.js, Express, Postgresql, React, typeScript). This application delivers all essential features of a real-world e-commerce system: product management, cart, checkout, order workflow, admin dashboard, role-based access, JWT security, and more.",
  //     liveUrl: "https://moonflix.vercel.app/",
  //     githubUrl: "https://github.com/VietDuc-Dev/Moonflix",
  //     coverImage: "/image-3.jpg",
  //   },
  // });
  // await prisma.project.create({
  //   data: {
  //     userId: "user_36YvoGZ6yiQVujpTR2kBaSLRndz",
  //     title: "Portfolio VietDuc.Dev",
  //     slug: "portfolio-vietduc.Dev",
  //     description:
  //       "Welcome to VietDuc.dev, a modern and scalable Portfolio VietDuc.Dev platform built with (Node.js, Express, Postgresql, React, typeScript).",
  //     liveUrl: "https://portfolio-five-puce-64.vercel.app/",
  //     githubUrl: "https://github.com/VietDuc-Dev/Portfolio",
  //     coverImage: "/bg-portfolio.png",
  //   },
  // });
  // Project Skill
  // const skills = await prisma.skill.findMany();
  // const skillMap = Object.fromEntries(
  //   skills.map((skill) => [skill.name, skill.id])
  // );
  // await prisma.projectSkill.createMany({
  //   data: [
  //     { projectId: 5, skillId: skillMap["Next.JS"] },
  //     { projectId: 5, skillId: skillMap["TypeScript"] },
  //     { projectId: 5, skillId: skillMap["Material UI"] },
  //     { projectId: 5, skillId: skillMap["Tailwind CSS"] },
  //     { projectId: 5, skillId: skillMap["Node.JS"] },
  //     { projectId: 5, skillId: skillMap["Express"] },
  //     { projectId: 5, skillId: skillMap["MongoDB"] },
  //     { projectId: 5, skillId: skillMap["JSON Web Tokens"] },
  //   ],
  // });
  // Project image
  // await prisma.projectImage.createMany({
  //   data: [
  //     {
  //       projectId: 5,
  //       imageUrl: "/images/portfolio.png",
  //       position: 1,
  //     },
  //   ],
  // });
  // Project feature
  // await prisma.projectFeature.createMany({
  //   data: [
  //     {
  //       projectId: 5,
  //       emoji: "🔐",
  //       message:
  //         "Authentication & Authorization (JWT, change password by email, Role-based: User / Admin)",
  //     },
  //     {
  //       projectId: 5,
  //       emoji: "👤",
  //       message: "User Profile Management (Update info)",
  //     },
  //     {
  //       projectId: 5,
  //       emoji: "🏷️",
  //       message: "Product Management (CRUD, projects, tags, filters)",
  //     },
  //     {
  //       projectId: 5,
  //       emoji: "🔍",
  //       message:
  //         "Advanced Search & Filters (Keyword, category, AI assistant",
  //     },
  //     {
  //       projectId: 5,
  //       emoji: "📊",
  //       message: "Admin Dashboard",
  //     },
  //     {
  //       projectId: 5,
  //       emoji: "📈",
  //       message: "Analytics (Revenue, top products, sales trends)",
  //     },
  //     {
  //       projectId: 5,
  //       emoji: "📅",
  //       message: "Pagination & Sorting",
  //     },
  //     {
  //       projectId: 5,
  //       emoji: "🌐",
  //       message: "Built with MERN Stack (Node.js, PostgresSQL, Next.js, TypeScript)",
  //     },
  //   ],
  // });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
