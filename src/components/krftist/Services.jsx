import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MEDIA, SERVICES } from "@/data/krftist";

const ease = [0.16, 1, 0.3, 1];

function ServiceCard({ s, i, featured }) {
  return (
    <motion.div
      data-testid={`service-card-${i}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, ease, delay: (i % 2) * 0.08 }}
      className="group relative overflow-hidden border border-[#EED5B7]/10 bg-[#0F1F25]/50 p-8 md:p-10 hover:border-[#B89261]/40 transition-colors duration-700"
    >
      {featured && (
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000 pointer-events-none"
          style={{
            backgroundImage: `url(${MEDIA.motion})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "screen",
          }}
        />
      )}
      <div className="relative">
        <div className="flex items-start justify-between gap-4 mb-8">
          <span className="font-script text-3xl md:text-4xl text-[#B89261] leading-none">
            {s.n}
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#C6C4C4]/60">
            Service / {s.n}
          </span>
        </div>

        <h3 className="font-display uppercase tracking-[-0.02em] text-4xl md:text-5xl lg:text-6xl text-[#EED5B7] mb-5 leading-[0.95]">
          {s.title}
        </h3>

        <p className="text-[#C6C4C4]/80 text-base leading-relaxed mb-8 max-w-md">
          {s.tagline}
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-10">
          {s.capabilities.slice(0, 6).map((it) => (
            <li
              key={it}
              className="flex items-baseline gap-3 text-[#EED5B7]/85 text-sm md:text-base"
            >
              <span className="text-[#B89261] text-xs select-none">◆</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>

        <Link
          to={`/services/${s.slug}`}
          data-testid={`service-card-link-${s.slug}`}
          className="group/btn relative inline-flex items-center gap-3 bg-[#B89261] hover:bg-[#EED5B7] text-[#0A1418] font-display tracking-[0.2em] uppercase text-xs px-7 py-4 transition-all duration-500 shadow-[0_0_0_1px_rgba(238,213,183,0.2)] hover:shadow-[0_0_30px_rgba(238,213,183,0.35)] hover:-translate-y-0.5"
        >
          <span>Explore {s.short}</span>
          <span className="inline-block transition-transform duration-500 group-hover/btn:translate-x-1.5">→</span>
        </Link>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative bg-[#0A1418] py-32 md:py-48 border-t border-[#EED5B7]/8"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 md:mb-28 items-end">
          <div className="lg:col-span-8">
            <div className="section-tag mb-8">What We Do</div>
            <h2
              data-testid="services-headline"
              className="font-display uppercase tracking-[-0.03em] leading-[0.92] text-5xl md:text-6xl lg:text-7xl text-[#EED5B7]"
            >
              What we{" "}
              <span className="font-script normal-case text-[#B89261] text-[1.15em]">
                craft
              </span>
              .
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-[#C6C4C4] text-lg leading-relaxed max-w-md">
              Three creative pillars, one studio. Engaged together as a full pipeline,
              or as a single chapter inside something bigger.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <ServiceCard s={SERVICES[0]} i={0} featured={true} />
          <ServiceCard s={SERVICES[1]} i={1} />
          <div className="md:col-span-2">
            <ServiceCard s={SERVICES[2]} i={2} featured={true} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease }}
          className="mt-16 md:mt-20 border-t border-b border-[#EED5B7]/10 py-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#B89261] mb-3">
              Need a custom solution?
            </div>
            <h3 className="font-display uppercase tracking-[-0.02em] text-3xl md:text-4xl text-[#EED5B7]">
              Let’s discuss your{" "}
              <span className="font-script normal-case text-[#B89261] text-[1.15em]">
                project
              </span>
              .
            </h3>
          </div>
          <Link
            to="/contact"
            data-testid="services-cta"
            className="cta-btn inline-flex items-center gap-4 px-8 py-5 text-[#EED5B7] text-xs tracking-[0.3em] uppercase self-start md:self-auto"
          >
            <span>Start a Conversation</span>
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
