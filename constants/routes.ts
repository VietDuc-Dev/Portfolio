import { GITHUB_LINK } from "./socialLinks";

export const navigationLink = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Skills", href: "/skill" },
  { title: "Projects", href: "/project" },
  { title: "Github", href: GITHUB_LINK },
];

export const ROUTES = {
  homePage: "/",
  signIn: "/signin",
  signUp: "/signup",
  user: "/user",
  about: "/about",
  skill: "/skill",
  project: "/project",
};

export const CALLBACK_URL = "callbackUrl";
