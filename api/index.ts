import { gql, request } from "graphql-request";
import { useQuery } from "react-query";
import { client } from "./config";
import {
  GetAllProjects,
  GetSingleProject,
  Project,
  ProjectData,
  ProjectResponse,
  SingleProjectData,
} from "@/types/projectTypes";

// ======== QUERIES ========
const ALL_PROJECTS = gql`
  query Projects {
    projects {
      id
      linkToProject
      projectName
      publishedAt
      slug
      summary
      coverImage {
        url
      }
      brandLogo {
        url
      }
    }
  }
`;

const SINGLE_PROJECT = gql`
  query SingleProject($slug: String) {
    project(where: { slug: $slug }) {
      id
      slug
      projectName
      technologies
      linkToProject
      brandLogo {
        url
      }
      coverImage {
        url
      }

      projectDetails {
        html
        markdown
      }
    }
  }
`;

// ========= CUSTOM HOOKS =======
export const useGetAllProjects = () => {
  const getAllProjects: GetAllProjects = async () => {
    const data: ProjectData = await client.request(ALL_PROJECTS);
    return data;
  };
  return useQuery(["ALL_PROJECTS"], getAllProjects);
};

export const useGetSingleProject = (slug: string) => {
  const getSingleProject: GetSingleProject = async () => {
    const data: SingleProjectData = await client.request(SINGLE_PROJECT, {
      slug: slug,
    });
    return data.project;
  };
  return useQuery(["SINGLE_PROJECT", slug], getSingleProject, {
    enabled: !!slug,
  });
};
