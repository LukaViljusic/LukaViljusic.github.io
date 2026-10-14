"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["home", "Home"],
  ["about", "About"],
  ["education", "Education"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["contact", "Contact"],
] as const;

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: [0, 0.15, 0.35, 0.65] },
    );
    links.forEach(([id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <aside id="portfolio-navigation" aria-label="Main navigation"
        className={`fixed inset-y-0 left-0 z-50 flex w-[min(17rem,87vw)] flex-col overflow-y-auto border-r border-[#304035] bg-[#111815] px-7 pb-7 pt-10 transition-transform duration-300 ease-out motion-reduce:transition-none lg:w-72 lg:px-8 lg:pt-12 lg:translate-x-0 ${open ? "visible translate-x-0" : "invisible -translate-x-full lg:visible"}`}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <a href="#home" onClick={() => setOpen(false)} className="whitespace-nowrap text-xl font-semibold tracking-[-0.07em] text-[#ECF0E9]">
              Luka <span className="font-normal">Viljušić</span><span className="text-[#B6CAA7]">.</span>
            </a>
            <p className="mt-2.5 font-mono text-[9px] uppercase tracking-[0.21em] text-[#829487]">Software developer</p>
          </div>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close navigation"
            className="-mr-2 -mt-1 rounded-md p-2 text-[#ADB8AE] focus-visible:outline-2 focus-visible:outline-[#B6CAA7] lg:hidden"><X size={20}/></button>
        </div>

        <nav aria-label="Sections" className="mt-16 flex flex-col gap-1 lg:mt-22">
          {links.map(([id, label], index) => {
            const selected = active === id;
            return (
              <a key={id} href={`#${id}`} onClick={() => { setActive(id); setOpen(false); }} aria-current={selected ? "location" : undefined}
                className={`group flex min-h-11 items-center gap-4 rounded-md px-3 py-2.5 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#B6CAA7] ${selected ? "bg-[#202C24] text-[#F0F2EB]" : "text-[#A8B4AA] hover:bg-[#19231D] hover:text-[#F0F2EB]"}`}>
                <span className={`w-6 shrink-0 font-mono text-[10px] ${selected ? "text-[#B6CAA7]" : "text-[#7B8D81]"}`}>{String(index + 1).padStart(2, "0")}</span>
                <span className="text-[13px] font-medium tracking-[0.01em]">{label}</span>
                <span className={`ml-auto h-px bg-[#B6CAA7] transition-all duration-200 ${selected ? "w-5 opacity-100" : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-60"}`}/>
              </a>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-[#304035] pt-5">
          <a href="mailto:lukaviljusic@gmail.com" className="group flex items-start justify-between gap-3 text-[12px] leading-[1.7] text-[#A8B4AA] transition-colors hover:text-[#ECF0E9]">
            <span className="flex items-start gap-3"><span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#B6CAA7]"/><span>Rijeka / Zagreb<br/>Croatia</span></span>
            <ArrowUpRight size={17} className="text-[#B6CAA7] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
          </a>
        </div>
      </aside>
    </>
  );
}
