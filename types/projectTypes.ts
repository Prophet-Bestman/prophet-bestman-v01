export interface ProjectResponse {
  data: ProjectData;
}

export interface ProjectData {
  projects: Project[];
}
export interface SingleProjectData {
  project: Project;
}

export interface Project {
  id: string;
  linkToProject: string;
  projectName: string;
  publishedAt: string;
  summary: string;
  slug: string;
  coverImage: CoverImage;
  brandLogo: BrandLogo;
  projectDetails: ProjectDetails;
  technologies: string[];
}

export interface CoverImage {
  url: string;
}

export interface BrandLogo {
  url: string;
}

export interface ProjectDetails {
  html: string;
  markdown: string;
}

export type GetAllProjects = () => Promise<ProjectData>;
export type GetSingleProject = () => Promise<Project>;
