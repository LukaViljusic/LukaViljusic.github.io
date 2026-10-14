
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
} from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "IN2 Group",
    period: "Nov 2024 — Jul 2025",
    type: "Full-time · Rijeka",
    description: "Worked with C# and ASP.NET Core in a full-time software engineering role.",
    highlights: ["Application development with C#", "Backend work with ASP.NET Core"],
    technologies: ["C#", "ASP.NET Core"],
    current: false,
  },
  {
    role: "Diploma Thesis Project",
    company: "InCubis",
    period: "Oct 2023 — Aug 2024",
    type: "Remote",
    description: "Built a web application for managing projects and tasks, from the backend to the interface.",
    highlights: ["Authentication and workspaces", "Task tracking and profile management"],
    technologies: ["C#", "ASP.NET Core", "Entity Framework", "React", "TypeScript"],
    current: false,
  },
  {
    role: "Student Internship",
    company: "ASEE",
    period: "Mar 2023 — Aug 2023",
    type: "Internship · Rijeka",
    description: "Co-developed an iOS parking reservation app as part of a two-person team.",
    highlights: ["iOS development with Swift and RxSwift", "Layouts adapted to different iPhone screen sizes"],
    technologies: ["Swift", "RxSwift", "Xcode"],
    current: false,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
            04
          </span>

          <div className="h-px w-10 bg-[#B6CAA7]" />

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ADB8AE]">
            Experience
          </span>
        </div>

        {/* EXPERIENCE CARDS */}
        <div className="grid gap-6">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${index}`}
              className="
                group rounded-xl
                border border-[#344137]
                bg-[#1D2922]
                p-6 transition-all duration-300
                hover:border-[#B6CAA7]/50
                sm:p-8
              "
            >
              <div className="grid gap-8 xl:grid-cols-[0.85fr_1.15fr] xl:gap-12">

                {/* LEFT SIDE */}
                <div className="flex flex-col items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#344137] bg-[#171F1B]">
                    <BriefcaseBusiness
                      size={23}
                      className="text-[#B6CAA7]"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                      {experience.role}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-[#B9D0A9]">
                      {experience.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-md bg-[#171F1B] px-3 py-1.5 font-mono text-xs text-[#CDD7CB]">
                      {experience.period}
                    </span>

                    <span className="rounded-md border border-[#344137] px-3 py-1.5 text-xs text-[#ADB8AE]">
                      {experience.type}
                    </span>
                  </div>

                  {experience.current && (
                    <div className="flex items-center gap-2 text-xs text-[#ADB8AE]">
                      <span className="h-2 w-2 rounded-full bg-[#B6CAA7]" />
                      Current position
                    </div>
                  )}
                </div>

                {/* RIGHT SIDE */}
                <div className="min-w-0 xl:border-l xl:border-[#344137] xl:pl-10">
                  <p className="text-sm leading-7 text-[#CDD7CB] sm:text-base">
                    {experience.description}
                  </p>

                  <div className="mt-6">
                    <p className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-[#ADB8AE]">
                      Key contributions
                    </p>

                    <ul className="space-y-3">
                      {experience.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 text-sm leading-6 text-[#CDD7CB]"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B6CAA7]" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* TECHNOLOGIES */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[#344137] bg-[#171F1B] px-3 py-1.5 text-xs text-[#CDD7CB]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
