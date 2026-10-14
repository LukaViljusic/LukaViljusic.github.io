
import Image from "next/image";
import { Code2, MapPin, BriefcaseBusiness } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
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

        {/* SECTION HEADING */}
        <div className="mb-12 flex items-center gap-4 sm:mb-16">
          <span className="font-mono text-sm font-medium text-[#B6CAA7]">
            02
          </span>

          <div className="h-px w-10 bg-[#B6CAA7]" />

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ADB8AE]">
            About me
          </span>
        </div>

        {/* MAIN GRID */}
        <div className="grid items-center gap-14 xl:grid-cols-[1.1fr_0.9fr] xl:gap-16">

          {/* LEFT CONTENT */}
          <div className="min-w-0">

            <h2
              className="
                max-w-2xl
                text-4xl font-semibold
                leading-[1.12] tracking-tight
                sm:text-5xl
                2xl:text-6xl
              "
            >
              A little
              <br />
              <span className="text-[#B6CAA7]">
                about me.
              </span>
            </h2>

            <div className="mt-8 max-w-xl space-y-5 text-base leading-8 text-[#ADB8AE] sm:text-lg">
              <p>
                I'm a software developer with a Bachelor's degree in Computer Science from the University of Rijeka, currently continuing my studies at FER in Zagreb.
              </p>

              <p>
                I mostly work with .NET and ASP.NET Core, and I enjoy building well-structured applications. React and TypeScript let me take projects from the backend through to the interface.
              </p>
            </div>

            {/* DETAILS */}
            <div className="mt-10 max-w-xl border-t border-[#344137]">

              {/* LOCATION */}
              <div className="flex items-center gap-4 border-b border-[#344137] py-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#344137] bg-[#1D2922]">
                  <MapPin
                    size={20}
                    className="text-[#B6CAA7]"
                  />
                </div>

                <div>
                  <p className="text-xs text-[#ADB8AE]">
                    Location
                  </p>
                  <p className="text-sm font-semibold text-[#ECF0E9] sm:text-base">
                    Rijeka, Croatia
                  </p>
                </div>
              </div>

              {/* STATUS */}
              <div className="flex items-center gap-4 border-b border-[#344137] py-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#344137] bg-[#1D2922]">
                  <BriefcaseBusiness
                    size={20}
                    className="text-[#B6CAA7]"
                  />
                </div>

                <div>
                  <p className="text-xs text-[#ADB8AE]">
                    Current status
                  </p>
                  <p className="text-sm font-semibold text-[#ECF0E9] sm:text-base">
                    Master’s student at FER
                  </p>
                </div>
              </div>
            </div>

            
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative mx-auto w-full max-w-md xl:max-w-none">

            {/* DECORATIVE BORDER */}
            <div
              aria-hidden="true"
              className="
                absolute -right-3 -top-3
                h-full w-full rounded-xl
                border border-[#B6CAA7]/30
                sm:-right-5 sm:-top-5
              "
            />

            {/* PROFILE CARD */}
            <div
              className="
                relative flex min-h-[340px] flex-col
                justify-between overflow-hidden
                rounded-xl border border-[#344137]
                bg-[#1D2922] p-6
                sm:min-h-[430px] sm:p-8
              "
            >
              {/* GLOW */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  -right-20 -top-20
                  h-72 w-72 rounded-full
                  bg-[#B6CAA7]/[0.05] blur-3xl
                "
              />

              {/* TOP */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-[#ADB8AE]">
                  Developer Profile
                </span>

                <Code2
                  size={22}
                  className="text-[#B6CAA7]"
                />
              </div>

              {/* CENTER */}
              <div className="relative z-10 flex flex-col items-center gap-5 py-10">
                <div className="relative size-32 overflow-hidden rounded-full border-[3px] border-[#556A58] bg-[#DDE2D7] shadow-[0_0_0_7px_rgba(182,202,167,0.06)] sm:size-36">
                  <Image src="/images/luka-viljusic.png" alt="Portrait of Luka Viljušić" fill sizes="144px" className="object-cover" priority={false}/>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-[#ECF0E9]">
                    Luka Viljušić
                  </h3>
                  <p className="mt-2 text-sm text-[#ADB8AE]">
                    Software Developer
                  </p>
                </div>
              </div>

              {/* BOTTOM */}
              <div className="relative z-10 flex items-center justify-between gap-3 border-t border-[#344137] pt-5">
                <span className="font-mono text-xs text-[#ADB8AE]">
                  Based in Croatia
                </span>

                <span className="flex items-center gap-2 text-xs text-[#ECF0E9]">
                  <span className="h-2 w-2 rounded-full bg-[#B6CAA7]" />
                  Software developer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
