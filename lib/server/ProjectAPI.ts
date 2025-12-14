"use client";

import { logger } from "../logger";

const getAllProjects = async () => {
  const response = await fetch(`/api/projects`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    logger.error({
      message: response.statusText,
      error: response.statusText,
    });

    return null;
  }

  const data = await response.json();
  return data.projects;
};

const getProjectDetail = async (slug: string) => {
  const response = await fetch(`/api/projects/${slug}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    logger.error({
      message: response.statusText,
      error: response.statusText,
    });

    return null;
  }

  const data = await response.json();
  return data.project;
};

const ProjectAPI = { getAllProjects, getProjectDetail };

export default ProjectAPI;
