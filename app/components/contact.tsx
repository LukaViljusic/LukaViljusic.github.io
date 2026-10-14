
import {
  ArrowRight,
  ArrowUpRight,
  FolderGit,
  Link,
  Mail,
  MapPin,
} from "lucide-react";

const contact = {
  email: "lukaviljusic@gmail.com",
  github: "https://github.com/LukaViljusic",
  linkedin: "https://www.linkedin.com/in/lukaviljusic/",
  location: "Croatia",
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        border-b border-[#27342C] bg-[#101513] text-[#ECF0E9]
        px-6 py-20
        sm:px-8 sm:py-24
        lg:px-10
        xl:px-16 xl:py-32
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-32 top-20
          h-96 w-96 rounded-full
          bg-[#B6CAA7]/[0.04] blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* SECTION LABEL */}
        <div className="mb-12 flex items-center gap-4 sm:mb-16">
          <span className="font-mono text-sm font-medium text-[#B6CAA7]">
            07
          </span>

          <div className="h-px w-10 bg-[#B6CAA7]" />

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ADB8AE]">
            Get in touch
          </span>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid gap-12 xl:grid-cols-[1fr_0.9fr] xl:gap-16">

          {/* LEFT */}
          <div>
            <h2 className="text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl 2xl:text-6xl">
              Let’s work
              <br />
              <span className="text-[#B6CAA7]">
                together.
              </span>
            </h2>

            {/* LOCATION */}
            <div className="mt-9 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#344137] bg-[#171F1B]">
                <MapPin
                  size={20}
                  className="text-[#B6CAA7]"
                />
              </div>

              <div>
                <p className="text-xs text-[#ADB8AE]">
                  Based in
                </p>
                <p className="text-sm font-medium text-[#ECF0E9]">
                  {contact.location}
                </p>
              </div>
            </div>

            {/* EMAIL CARD */}
            <a
              href={`mailto:${contact.email}`}
              className="
                group mt-10 flex flex-col gap-6
                rounded-xl border border-[#536755]
                bg-[#1C2A20] p-6
                transition-all duration-300
                hover:border-[#B6CAA7]
                sm:p-8
              "
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail
                    size={22}
                    className="text-[#B9D0A9]"
                  />

                  <span className="font-mono text-xs uppercase tracking-widest text-[#ADB8AE]">
                    Email me
                  </span>
                </div>

                <ArrowUpRight
                  size={22}
                  className="text-[#B9D0A9] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>

              <p className="break-all text-xl font-bold tracking-tight text-[#ECF0E9] sm:text-2xl">
                {contact.email}
              </p>

              <div className="flex items-center gap-2 text-sm font-medium text-[#B9D0A9]">
                Start a conversation

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </a>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-5 xl:justify-end">

            {/* GITHUB */}
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex items-center gap-5
                rounded-xl border border-[#344137]
                bg-[#171F1B] p-6
                transition-all duration-300
                hover:border-[#B6CAA7]/50
                sm:p-7
              "
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#344137] bg-[#1D2922]">
                <FolderGit size={27} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold">
                  GitHub
                </h3>

                <p className="mt-1 text-sm text-[#ADB8AE]">
                  Explore my code and projects
                </p>
              </div>

              <ArrowUpRight
                size={21}
                className="shrink-0 text-[#ADB8AE] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#B6CAA7]"
              />
            </a>

            {/* LINKEDIN */}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex items-center gap-5
                rounded-xl border border-[#344137]
                bg-[#171F1B] p-6
                transition-all duration-300
                hover:border-[#B6CAA7]/50
                sm:p-7
              "
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#344137] bg-[#1D2922]">
                <Link
                  size={27}
                  className="text-[#B9D0A9]"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold">
                  LinkedIn
                </h3>

                <p className="mt-1 text-sm text-[#ADB8AE]">
                  Connect with me professionally
                </p>
              </div>

              <ArrowUpRight
                size={21}
                className="shrink-0 text-[#ADB8AE] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#B6CAA7]"
              />
            </a>

            <a href="/downloads/Luka_Viljusic_CV.pdf" target="_blank" rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-xl border border-[#344137] bg-[#171F1B]/60 p-6 text-sm font-medium text-[#CBD7C7] transition-colors hover:border-[#B6CAA7] hover:text-[#ECF0E9]">
              <span>View my CV <span className="ml-2 font-mono text-xs font-normal text-[#829587]">PDF</span></span>
              <ArrowUpRight size={20} className="text-[#B6CAA7] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
