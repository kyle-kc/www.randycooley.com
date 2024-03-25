import rawProjects from "./project-data.json"

export namespace ProjectService {
    export const projects = rawProjects.sort((project1, project2) => project2.sortOrder - project1.sortOrder)
}