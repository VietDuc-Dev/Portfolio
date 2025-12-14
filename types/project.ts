interface ProjectImage {
  id: number;
  projectId: number;
  imageUrl: string;
  position: number;
}

interface ProjectSkill {
  projectId: number;
  skillId: number;
  skill: {
    id: number;
    name: string;
    iconUrl: string;
  };
}

interface ProjectFeature {
  id: number;
  projectId: number;
  emoji: string;
  message: string;
}

export interface Project {
  id: number;
  userId: string;
  title: string;
  slug: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  coverImage: string;
  featured: string | null;

  createdAt: string;
  updatedAt: string;

  images: ProjectImage[];
  skills: ProjectSkill[];
  features: ProjectFeature[];
}
