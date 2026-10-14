import { ArrowUpRight } from "lucide-react";

const codeRows = [
  <><span className="text-[#C9B5B9]">const</span> developer = {"{"}</>,
  <>  name: <span className="text-[#B6CAA7]">"Luka Viljušić"</span>,</>,
  <>  role: <span className="text-[#B6CAA7]">"Software Developer"</span>,</>,
  <>  stack: [</>,
  <>    <span className="text-[#B6CAA7]">".NET", "React",</span></>,
  <>    <span className="text-[#B6CAA7]">"TypeScript"</span></>,
  <>  ],</>,
  <>  approach: <span className="text-[#B6CAA7]">"Keep it simple"</span></>,
  <>{"};"}</>,
];

const focus = [
  { title: ".NET", detail: "Backend" },
  { title: "React", detail: "Frontend" },
  { title: "FER", detail: "Master’s studies" },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden border-b border-[#27342C] bg-[#101513] px-5 py-18 sm:px-8 sm:py-22 lg:min-h-svh lg:px-10 xl:px-12 2xl:px-18">
      <div className="mx-auto grid w-full max-w-[1350px] min-w-0 items-center gap-15 xl:grid-cols-[minmax(0,0.97fr)_minmax(0,1.03fr)] xl:gap-12 2xl:gap-20">
        <div className="min-w-0">
          <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.23em] text-[#ADB8AE]">
            <span className="h-px w-6 bg-[#B6CAA7]"/>Hello, I'm
          </p>

          <h1 className="mt-7 text-[clamp(3.7rem,9vw,6.9rem)] font-semibold leading-[0.93] tracking-[-0.09em] text-[#ECF0E9] xl:text-[clamp(4.35rem,6.4vw,7.7rem)]">
            Luka<br/><span className="text-[#B6CAA7]">Viljušić<span className="text-[#D3C7AE]">.</span></span>
          </h1>

          <h2 className="mt-8 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#E7ECE3] sm:text-sm">Software developer</h2>
          <p className="mt-5 max-w-[440px] text-[15px] leading-7 text-[#B1BBB0] sm:text-base sm:leading-8">
            I build software with .NET and React, with a focus on clean architecture and the details that make applications work well.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-9">
            <a href="#projects" className="inline-flex min-h-12 items-center justify-center gap-5 rounded-md bg-[#B6CAA7] px-5 py-3 text-[13px] font-semibold text-[#162019] transition-colors hover:bg-[#CFDEC2] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#B6CAA7]">
              View projects <ArrowUpRight size={16}/>
            </a>
            <a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-5 rounded-md border border-[#38483C] px-5 py-3 text-[13px] font-semibold text-[#E8EEE4] transition-colors hover:border-[#839E86] hover:bg-[#1A241D] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#B6CAA7]">
              Get in touch <ArrowUpRight size={16}/>
            </a>
          </div>

        </div>

        <div className="flex min-w-0 flex-col gap-6 xl:gap-7">
          <div className="min-w-0 overflow-hidden rounded-xl border border-[#37483D] bg-[#17201B] shadow-[0_20px_70px_rgba(0,0,0,0.12)]">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-b border-[#344137] px-4 py-3.5 font-mono text-[10px] text-[#9BA99D] sm:px-5">
              <div className="flex gap-1.5"><span className="size-2 rounded-full bg-[#677C6D]"/><span className="size-2 rounded-full bg-[#A38F78]"/><span className="size-2 rounded-full bg-[#89A08C]"/></div>
              <span>developer.ts</span>
              <span className="text-right text-[#6F8575]">01 / profile</span>
            </div>
            <div className="overflow-x-auto px-4 py-5 font-mono text-[11px] leading-[2.65] text-[#CBD4C9] sm:px-6 sm:py-6 sm:text-[12px]">
              {codeRows.map((row, i) => (
                <div key={i} className="grid min-w-max grid-cols-[1.8rem_1fr] items-start gap-2 sm:grid-cols-[2rem_1fr] sm:gap-3">
                  <span className="select-none text-right text-[#657B69]">{String(i+1).padStart(2, "0")}</span>
                  <code className="whitespace-pre">{row}</code>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-[#344137] px-4 py-3 font-mono text-[10px] text-[#839688] sm:px-5">
              <span>TypeScript</span><span className="inline-flex items-center gap-2"><span className="size-1.5 rounded-full bg-[#B6CAA7]"/>All systems ready</span>
            </div>
          </div>

          <div className="grid grid-cols-3">
            {focus.map((item, index) => (
              <div key={item.title} className={`min-w-0 px-2 py-1 text-center ${index < focus.length - 1 ? "border-r border-[#344137]" : ""}`}>
                <div className="text-xl font-semibold tracking-[-0.055em] text-[#ECF0E9] sm:text-2xl">{item.title}</div>
                <div className="mt-1 text-[10px] text-[#87988B] sm:text-xs">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
