import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { WORK_CATEGORIES, WORK_ITEMS, MEDIA } from "@/data/krftist";

const ease = [0.16, 1, 0.3, 1];

export default function WorkPage() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? WORK_ITEMS : WORK_ITEMS.filter((w) => w.category === active)),
    [active]
  );

  return (
    <main data-testid="work-page" className="relative bg-[#0A1418] pt-40 pb-32 md:pb-48">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease }}
          className="mb-16 md:mb-20"
        >
          <div className="section-tag mb-8">Selected Masterpieces</div>
          <h1 className="font-display uppercase tracking-[-0.03em] leading-[0.9] text-6xl md:text-7xl lg:text-8xl text-[#EED5B7] mb-8">
            The full{" "}
            <span className="font-script normal-case text-[#B89261] text-[1.15em]">portfolio</span>.
          </h1>
          <p className="text-[#C6C4C4] text-lg md:text-xl max-w-2xl leading-relaxed">
            A living archive of films, TV shows, podcasts, coverage and BTS — produced across Egypt, Saudi Arabia,
            Turkey, Qatar and worldwide.
          </p>
        </motion.div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-3 mb-12 md:mb-16" data-testid="work-filters">
          {WORK_CATEGORIES.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                data-testid={`work-filter-${cat.toLowerCase().replace(/\s/g, '-')}`}
                className={`px-5 py-2.5 border text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                  isActive
                    ? "bg-[#B89261] border-[#B89261] text-[#0A1418]"
                    : "border-[#EED5B7]/20 text-[#EED5B7]/85 hover:border-[#B89261] hover:text-[#B89261]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Filterable grid */}
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8" key={active}>
            {filtered.map((w, i) => (
              <motion.div
                key={w.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease, delay: (i % 6) * 0.05 }}
                data-testid={`work-item-${w.id}`}
                className={`work-card group ${w.span} col-span-1`}
              >
                <div className={`relative overflow-hidden ${w.aspect} bg-[#0F1F25] border border-[#EED5B7]/10`}>
                  <img
                    src={MEDIA[w.thumb]}
                    alt={w.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1418]/85 via-transparent to-transparent" />

                  {/* Play button for videos */}
                  {w.platform === "Vimeo" && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-14 h-14 md:w-16 md:h-16 border border-[#EED5B7]/60 rounded-full flex items-center justify-center backdrop-blur-md bg-[#0A1418]/30 group-hover:bg-[#B89261] group-hover:border-[#B89261] transition-all duration-500">
                        <span className="text-[#EED5B7] group-hover:text-[#0A1418] text-xl ml-1">▶</span>
                      </div>
                    </div>
                  )}

                  <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase text-[#EED5B7]/90 flex items-center gap-2">
                    <span className="text-[#B89261]">●</span>
                    {w.platform}
                  </div>
                  <div className="absolute top-4 right-4 text-[10px] tracking-[0.3em] uppercase text-[#EED5B7]/85">
                    {w.category}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <h3 className="font-display uppercase text-xl md:text-2xl text-[#EED5B7] group-hover:text-[#B89261] transition-colors">
                      {w.title}
                    </h3>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#EED5B7]/70">{w.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        <div className="mt-20 border-t border-[#EED5B7]/10 pt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-[#C6C4C4]/80 text-base md:text-lg max-w-xl">
            Want the full reel including unreleased work? Request a private screening — we share a curated cut
            within 48 hours.
          </p>
          <Link
            to="/reel"
            data-testid="work-page-reel-cta"
            className="cta-btn inline-flex items-center gap-4 px-8 py-5 text-[#EED5B7] text-xs tracking-[0.3em] uppercase self-start md:self-auto"
          >
            <span>Request Full Reel</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
