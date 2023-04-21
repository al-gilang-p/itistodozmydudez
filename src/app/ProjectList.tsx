'use client'
import ProjectCard from '../components/ProjectCard'

export default function ProjectList({ projects, filter, completed }) {
    return (
        <ul>
            {completed
                ? projects
                      .filter(
                          ({ title, isCompleted }) =>
                              title
                                  .toLowerCase()
                                  .includes(filter.toLowerCase()) &&
                              isCompleted === false
                      )
                      .map((project) => (
                          <li key={project.id}>
                              <ProjectCard
                                  title={project.title}
                                  id={project.id}
                                  isCompleted={project.isCompleted}
                              />
                          </li>
                      ))
                : projects
                      .filter(({ title }) =>
                          title.toLowerCase().includes(filter.toLowerCase())
                      )
                      .map((project) => (
                          <li key={project.id}>
                              <ProjectCard
                                  title={project.title}
                                  id={project.id}
                                  isCompleted={project.isCompleted}
                              />
                          </li>
                      ))}
        </ul>
    )
}
