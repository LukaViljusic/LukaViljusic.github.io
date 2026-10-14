
import {
  ArrowUpRight,
  Code2,
  Database,
  GitBranch,
  Monitor,
  Server,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Backend",
    description: "APIs, application logic and layered architecture.",
    icon: Server,
    skills: ["C#", "ASP.NET Core", "Entity Framework", "SQL"],
    featured: true,
  },
  {
    title: "Frontend",
    description: "Web interfaces and TypeScript applications.",
    icon: Monitor,
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
    featured: false,
  },
  {
    title: "iOS Development",
    description: "Mobile development experience.",
    icon: Code2,
    skills: ["Swift", "RxSwift", "Xcode"],
    featured: false,
  },
  {
    title: "Tools & Workflow",
    description: "Tools I use during development.",
    icon: Wrench,
    skills: ["Git", "Linux", "Node.js"],
    featured: true,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            06
          </span>

          <div className="h-px w-10 bg-[#B6CAA7]" />

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ADB8AE]">
            Skills & Technologies
          </span>
        </div>

        {/* BENTO GRID */}
        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className={`
                  group relative overflow-hidden
                  rounded-xl border border-[#344137]
                  bg-[#1D2922] p-6
                  transition-all duration-300
                  hover:border-[#B6CAA7]/50
                  sm:p-8
                  ${category.featured ? "md:col-span-2" : ""}
                `}
              >
                {/* SUBTLE GLOW */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute
                    -right-20 -top-20
                    h-48 w-48 rounded-full
                    bg-[#B6CAA7]/[0.03] blur-3xl
                    transition-opacity duration-300
                    group-hover:opacity-100
                  "
                />

                <div className="relative z-10">
                  {/* CARD HEADER */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#344137] bg-[#171F1B]">
                      <Icon
                        size={23}
                        className="text-[#B6CAA7]"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold sm:text-xl">
                        {category.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-[#ADB8AE]">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* SKILL TAGS */}
                  <div className="mt-7 flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          rounded-lg border border-[#344137]
                          bg-[#171F1B]
                          px-3.5 py-2
                          text-sm text-[#CDD7CB]
                          transition-colors duration-300
                          hover:border-[#B6CAA7]/50
                          hover:text-white
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
