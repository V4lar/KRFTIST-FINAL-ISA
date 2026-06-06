import { motion } from "framer-motion";
import { MEDIA } from "@/data/krftist";

const ease = [0.16, 1, 0.3, 1];

const stats = [
  { k: "16+",     v: "Years of Experience" },
  { k: "500+",    v: "Projects & TV Shows" },
  { k: "1,100+",  v: "Happy Clients" },
];

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative bg-[#0A1418] py-32 md:py-48 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden border border-[#EED5B7]/10">
            <img
              src={MEDIA.about}
              alt="High end camera lens macro"
              className="w-full h-full object-cover"
              style={{ filter: "saturate(0.85) brightness(0.9)" }}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:flex flex-col items-end">
            <span className="font-script text-[#B89261] text-7xl leading-none">
              ’10
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C6C4C4]/70 mt-2">
              Founded
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="section-tag mb-10">About our journey of experience</div>

          <h2
            data-testid="about-headline"
            className="font-display uppercase tracking-[-0.03em] leading-[0.92] text-5xl md:text-6xl lg:text-7xl text-[#EED5B7] mb-10"
          >
            A studio of{" "}
            <span className="font-script normal-case text-[#B89261] text-[1.15em]">
              relentless
            </span>{" "}
            craft.
          </h2>

          {/* Placeholder container for upcoming premium brand story narrative */}
          <div
            data-testid="about-story-placeholder"
            className="relative max-w-2xl border border-dashed border-[#B89261]/30 bg-[#0F1F25]/40 p-8 md:p-10 mb-12"
          >
            <span className="absolute -top-3 left-6 bg-[#0A1418] px-3 text-[10px] tracking-[0.3em] uppercase text-[#B89261]">
              Brand Story — Coming Soon
            </span>
            <p className="text-[#C6C4C4]/80 text-base md:text-lg leading-relaxed font-script text-2xl md:text-3xl">
              Sixteen years. Three continents. A workshop of master artisans
              still being written — the long-form narrative arrives in the next chapter.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-x-6 md:gap-x-10 gap-y-10 pt-10 border-t border-[#EED5B7]/10">
            {stats.map((s) => (
              <div key={s.v} data-testid={`stat-${s.v.toLowerCase().replace(/\s|&/g, '-')}`}>
                <div className="font-display text-3xl md:text-5xl text-[#EED5B7] tracking-tight">
                  {s.k}
                </div>
                <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-[#C6C4C4]/80 mt-3 leading-relaxed">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
