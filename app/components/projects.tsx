
import Image from "next/image";
import {
  ArrowUpRight,
  ExternalLink,
  FolderGit,
  FolderGit2,
} from "lucide-react";

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Task & Project Management",
    category: "Web Application · InCubis",
    description: "A web app for organizing projects and tasks, with authentication, workspaces, task tracking and profile management. Developed as my diploma thesis project.",
    image: "/projects/task-management.svg",
    technologies: ["C#", "ASP.NET Core", "Entity Framework", "React", "TypeScript"],
    featured: true,
  },
  {
    title: "Parking Reservation App",
    category: "iOS Application · ASEE",
    description: "An iOS parking reservation app co-developed during my internship. The interface was adapted to different iPhone screen sizes.",
    image: "/projects/parking-ios.svg",
    technologies: ["Swift", "RxSwift", "Xcode"],
    featured: true,
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      className={`
        group overflow-hidden rounded-xl
        border border-[#344137]
        bg-[#171F1B]
        transition-all duration-300
        hover:border-[#B6CAA7]/50
        ${project.featured ? "lg:col-span-2" : ""}
      `}
    >
      <div
        className={
          project.featured
            ? "grid lg:grid-cols-[1.2fr_0.8fr]"
            : "flex h-full flex-col"
        }
      >
        {/* PROJECT IMAGE */}
        <div
          className={`
            relative overflow-hidden
            bg-[#1D2922]
            ${project.featured
              ? "min-h-[250px] sm:min-h-[350px]"
              : "h-56 sm:h-64"
            }
          `}
        >
          <Image
            src={project.image}
            alt={`Illustration of ${project.title}` }
            fill
            sizes={
              project.featured
                ? "(max-width: 1024px) 100vw, 60vw"
                : "(max-width: 1024px) 100vw, 40vw"
            }
            className="
              object-cover object-top
              transition-transform duration-500
              group-hover:scale-[1.015]
            "
          />

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#101513]/30 to-transparent" />
        </div>

        {/* PROJECT CONTENT */}
        <div className="flex flex-1 flex-col justify-between gap-7 p-6 sm:p-8">

          <div>
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#B9D0A9]">
                {String(index + 1).padStart(2, "0")} / {project.category}
              </span>

              <ArrowUpRight
                size={20}
                className="shrink-0 text-[#ADB8AE] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
              />
            </div>

            <h3 className="text-2xl font-semibold tracking-tight text-[#ECF0E9] sm:text-3xl">
              {project.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#ADB8AE] sm:text-base">
              {project.description}
            </p>

            {/* TECHNOLOGIES */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-[#344137] bg-[#1D2922] px-3 py-1.5 text-xs text-[#CDD7CB]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* LINKS - displayed only when a real project URL has been provided */}
          {(project.github || project.demo) && <div className="flex flex-wrap items-center gap-5 border-t border-[#344137] pt-5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#ECF0E9] transition-colors hover:text-[#B6CAA7]"
              >
                <FolderGit size={18} />
                Source Code
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#ECF0E9] transition-colors hover:text-[#B6CAA7]"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative overflow-hidden
        border-b border-[#27342C] bg-[#101513] text-[#ECF0E9]
        px-6 py-20
        sm:px-8 sm:py-24
        lg:px-10
        xl:px-16 xl:py-32
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION LABEL */}
        <div className="mb-12 flex items-center gap-4 sm:mb-16">
          <span className="font-mono text-sm font-medium text-[#B6CAA7]">
            05
          </span>

          <div className="h-px w-10 bg-[#B6CAA7]" />

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ADB8AE]">
            Selected Projects
          </span>
        </div>

        {/* PROJECT GRID */}
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
