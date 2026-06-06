import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SERVICES, MEDIA } from "@/data/krftist";

const ease = [0.16, 1, 0.3, 1];

export default function ServicesPage() {
  return (
    <main data-testid="services-page" className="relative bg-[#0A1418] pt-40 pb-32 md:pb-48">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease }}
          className="mb-20 md:mb-28"
        >
          <div className="section-tag mb-8">Services / Overview</div>
          <h1 className="font-display uppercase tracking-[-0.03em] leading-[0.9] text-6xl md:text-7xl lg:text-8xl text-[#EED5B7] mb-8">
            Three pillars,{" "}
            <span className="font-script normal-case text-[#B89261] text-[1.15em]">one studio</span>.
          </h1>
          <p className="text-[#C6C4C4] text-lg md:text-xl max-w-2xl leading-relaxed">
            We organize the craft into three deep practices. Engage one or combine them into a single production line —
            owned by the same senior team from treatment to master.
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-10">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease, delay: i * 0.08 }}
              data-testid={`services-page-card-${s.slug}`}
            >
              <Link
                to={`/services/${s.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 border border-[#EED5B7]/10 hover:border-[#B89261]/40 bg-[#0F1F25]/40 p-6 md:p-10 transition-colors duration-700"
              >
                <div className="lg:col-span-4 relative overflow-hidden aspect-[16/10] lg:aspect-auto">
                  <img
                    src={MEDIA[s.media[0].thumb]}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    style={{ filter: "saturate(0.75) brightness(0.85)" }}
                  />
                </div>
                <div className="lg:col-span-7 lg:col-start-6 flex flex-col justify-center">
                  <div className="flex items-baseline gap-4 mb-5">
                    <span className="font-script text-3xl md:text-4xl text-[#B89261]">{s.n}</span>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#C6C4C4]/70">
                      Pillar {s.n}
                    </span>
                  </div>
                  <h2 className="font-display uppercase tracking-[-0.02em] text-3xl md:text-5xl lg:text-6xl text-[#EED5B7] mb-4 leading-[0.95] group-hover:text-[#B89261] transition-colors duration-500">
                    {s.title}
                  </h2>
                  <p className="text-[#C6C4C4]/80 text-base md:text-lg leading-relaxed max-w-xl mb-5">
                    {s.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.capabilities.slice(0, 5).map((c) => (
                      <span
                        key={c}
                        className="text-[10px] tracking-[0.2em] uppercase text-[#C6C4C4]/80 border border-[#EED5B7]/15 px-3 py-1.5"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
