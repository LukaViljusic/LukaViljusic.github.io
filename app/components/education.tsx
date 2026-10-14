
import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  School,
  Trophy,
} from "lucide-react";

const education = [
  {
    id: "fer",
    period: "2025 — 2027",
    title: "Master's Degree",
    field: "Software Engineering and Information Systems",
    institution: "Faculty of Electrical Engineering and Computing (FER)",
    university: "University of Zagreb",
    description:
      "Currently studying Software Engineering and Information Systems at FER in Zagreb.",
    topics: [
      "Software Engineering",
      "Information Systems",
    ],
    current: true,
    icon: GraduationCap,
    website: "https://www.fer.unizg.hr/",
  },
  {
    id: "rijeka",
    period: "2021 — 2024",
    title: "Bachelor's Degree",
    field: "Computer Science",
    institution: "Faculty of Engineering",
    university: "University of Rijeka",
    description:
      "Bachelor's degree in Computer Science from the Faculty of Engineering, University of Rijeka.",
    topics: [
      "Computer Science",
      "Software Development",
    ],
    current: false,
    icon: School,
    website: "https://riteh.uniri.hr/",
  },
  {
    id: "ijf",
    period: "2024",
    title: "Bachelor's Degree",
    field: "Sport and Exercise",
    institution: "IJF Academy",
    university: null,
    description:
      "Bachelor's degree in Sport and Exercise from IJF Academy.",
    topics: [
      "Sports",
      "Exercise",
    ],
    current: false,
    icon: Trophy,
    website: null,
  },
];

export default function Education() {
  return (
    <section
      id="education"
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
            03
          </span>

          <div className="h-px w-10 bg-[#B6CAA7]" />

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ADB8AE]">
            Education
          </span>
        </div>

        {/* MAIN GRID */}
        <div className="flex xl:gap-16">


          {/* RIGHT SIDE - TIMELINE */}
          <div className="relative w-full">

            {/* TIMELINE LINE */}
            <div className="absolute bottom-8 left-[7px] top-8 w-px bg-[#344137]" />

            <div className="flex flex-col gap-7 w-full ">
              {education.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.id}
                    className="relative pl-9"
                  >
                    {/* TIMELINE DOT */}
                    <div
                      className={`
                        absolute left-0 top-5 z-10
                        h-[15px] w-[15px] rounded-full
                        border-[3px] border-[#101513]
                        ${
                          item.current
                            ? "bg-[#B6CAA7] ring-2 ring-[#B6CAA7]/40"
                            : "bg-[#7E9185]"
                        }
                      `}
                    />

                    {/* CARD */}
                    <article className="group rounded-xl border border-[#344137] bg-[#171F1B] p-5 transition-all duration-300 hover:border-[#B6CAA7]/60 sm:p-7">

                      {/* CARD HEADER */}
                      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                        <span className="rounded-md bg-[#B6CAA7]/10 px-3 py-1.5 font-mono text-xs font-medium text-[#B9D0A9]">
                          {item.period}
                        </span>

                        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#344137] bg-[#1D2922]">
                          <Icon
                            size={22}
                            className="text-[#B6CAA7]"
                          />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm font-medium text-[#B9D0A9]">
                        {item.institution}
                      </p>

                      <p className="mt-5 text-sm leading-7 text-[#ADB8AE]">
                        {item.description}
                      </p>

                      {/* TOPICS */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {item.topics.map((topic) => (
                          <span
                            key={topic}
                            className="rounded-md border border-[#344137] bg-[#101513] px-3 py-1.5 text-xs text-[#CDD7CB]"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                      {item.current && (
                        <div className="mt-6 flex items-center gap-2 border-t border-[#344137] pt-5">
                          <span className="h-2 w-2 rounded-full bg-[#B6CAA7]" />
                          <span className="text-xs font-medium text-[#ADB8AE]">
                            Currently studying
                          </span>
                        </div>
                      )}
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
