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
  //     coverImage:
  //       "https://cdn.sanity.io/images/fpx3afrv/production/c9735ae7e20ef26c90fc7e1607c2bfdc08097792-4320x4320.png?w=1080&h=1080&fm=webp&q=85",
  //   },
  // });

  // Project Skill
  // const skills = await prisma.skill.findMany();

  // const skillMap = Object.fromEntries(
  //   skills.map((skill) => [skill.name, skill.id])
  // );

  // await prisma.projectSkill.createMany({
  //   data: [
  //     { projectId: 1, skillId: skillMap["Next.JS"] },
  //     { projectId: 1, skillId: skillMap["TypeScript"] },
  //     { projectId: 1, skillId: skillMap["Tailwind CSS"] },
  //     { projectId: 1, skillId: skillMap["React"] },
  //     { projectId: 1, skillId: skillMap["Node.JS"] },
  //   ],
  // });

  // Project image
  // await prisma.projectImage.createMany({
  //   data: [
  //     {
  //       projectId: 1,
  //       imageUrl: "/web.avif",
  //       position: 1,
  //     },
  //   ],
  // });

  // Project feature
  await prisma.projectFeature.createMany({
    data: [
      {
        projectId: 1,
        emoji: "🔐",
        message: "Authentication (Google Sign-In, Email, Password)",
      },
      {
        projectId: 1,
        emoji: "🏢",
        message: "Create & Manage Multiple Workspaces",
      },
      {
        projectId: 1,
        emoji: "📊",
        message: "Projects & Epics Management",
      },
      {
        projectId: 1,
        emoji: "✅",
        message: "Tasks (CRUD, Status, Priority, Assignee)",
      },
      {
        projectId: 1,
        emoji: "👥",
        message: "Roles & Permissions (Owner, Admin, Member)",
      },
      {
        projectId: 1,
        emoji: "✉️",
        message: "Invite Members to Workspaces",
      },
      {
        projectId: 1,
        emoji: "🔍",
        message: "Filters & Search (Status, Priority, AssignedTo)",
      },
      {
        projectId: 1,
        emoji: "📈",
        message: "Analytics Dashboard",
      },
      {
        projectId: 1,
        emoji: "📅",
        message: "Pagination & Load More",
      },
      {
        projectId: 1,
        emoji: "🔒",
        message: "Cookie Session Management",
      },
      {
        projectId: 1,
        emoji: "🚪",
        message: "Logout & Session Termination",
      },
      {
        projectId: 1,
        emoji: "🌱",
        message: "Seeding for Test Data",
      },
      {
        projectId: 1,
        emoji: "💾",
        message: "Mongoose Transactions for Robust Data Integrity",
      },
      {
        projectId: 1,
        emoji: "🌐",
        message: "Built with MERN Stack (Node.js, MongoDB, React, TypeScript)",
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
