import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { SERVICES, MEDIA } from "@/data/krftist";

const ease = [0.16, 1, 0.3, 1];

function MediaBlock({ m, i }) {
  const isVideo = m.type === "video";
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease, delay: i * 0.08 }}
      data-testid={`service-media-${i}`}
      className={`relative overflow-hidden ${m.aspect} bg-[#0F1F25] border border-[#EED5B7]/10 group`}
    >
      <img
        src={MEDIA[m.thumb]}
        alt={m.title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        style={{ filter: "saturate(0.75) brightness(0.78)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1418]/80 via-transparent to-transparent" />
      {isVideo && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 border border-[#EED5B7]/60 rounded-full flex items-center justify-center backdrop-blur-md bg-[#0A1418]/30 group-hover:bg-[#B89261] group-hover:border-[#B89261] transition-all duration-500">
            <span className="text-[#EED5B7] group-hover:text-[#0A1418] text-2xl ml-1">▶</span>
          </div>
        </div>
      )}
      <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase text-[#EED5B7]/90">
        {isVideo ? `${m.platform} · Embed` : "Photography"}
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
        <h3 className="font-display uppercase text-xl md:text-2xl text-[#EED5B7]">{m.title}</h3>
      </div>
    </motion.div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  return (
    <main data-testid={`service-detail-${slug}`} className="relative bg-[#0A1418] pt-40 pb-32 md:pb-48">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease }}
          className="mb-16 md:mb-24"
        >
          <Link to="/services" className="link-underline text-[10px] tracking-[0.3em] uppercase text-[#B89261] mb-8 inline-block">
            ← All Services
          </Link>
          <div className="flex items-baseline gap-6 mb-6">
            <span className="font-script text-5xl md:text-6xl text-[#B89261]">{service.n}</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C6C4C4]/70">
              KRFTIST Pillar {service.n}
            </span>
          </div>
          <h1 className="font-display uppercase tracking-[-0.03em] leading-[0.9] text-5xl md:text-7xl lg:text-8xl text-[#EED5B7] mb-8 max-w-5xl">
            {service.title}
          </h1>
          <p className="font-script text-3xl md:text-4xl text-[#B89261] max-w-3xl leading-tight">
            {service.tagline}
          </p>
        </motion.div>

        {/* Description + capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 md:mb-28 pb-16 md:pb-24 border-b border-[#EED5B7]/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="lg:col-span-7"
          >
            <div className="section-tag mb-6">The Practice</div>
            <p className="text-[#EED5B7]/85 text-lg md:text-xl leading-relaxed max-w-2xl">
              {service.description}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="section-tag mb-6">Capabilities</div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {service.capabilities.map((c) => (
                <li key={c} className="flex items-baseline gap-3 text-[#EED5B7]/85 text-sm md:text-base">
                  <span className="text-[#B89261] text-xs">◆</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Media showcase */}
        <div className="mb-20">
          <div className="section-tag mb-10">Selected Media — Videos & Stills</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {service.media.map((m, i) => (
              <MediaBlock key={i} m={m} i={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="border-t border-b border-[#EED5B7]/10 py-10 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <h3 className="font-display uppercase tracking-[-0.02em] text-3xl md:text-5xl text-[#EED5B7]">
            Brief us for{" "}
            <span className="font-script normal-case text-[#B89261] text-[1.15em]">{service.short}</span>.
          </h3>
          <Link
            to="/contact"
            data-testid="service-detail-cta"
            className="cta-btn inline-flex items-center gap-4 px-8 py-5 text-[#EED5B7] text-xs tracking-[0.3em] uppercase self-start md:self-auto"
          >
            <span>Start a Conversation</span>
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
