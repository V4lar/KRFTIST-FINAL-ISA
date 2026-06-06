import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ARTICLES, MEDIA } from "@/data/krftist";

const ease = [0.16, 1, 0.3, 1];

export default function ArticlesPage() {
  const [featured, ...rest] = ARTICLES;

  return (
    <main data-testid="articles-page" className="relative bg-[#0A1418] pt-40 pb-32 md:pb-48">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease }}
          className="mb-16 md:mb-20"
        >
          <div className="section-tag mb-8">Articles &amp; News</div>
          <h1 className="font-display uppercase tracking-[-0.03em] leading-[0.9] text-6xl md:text-7xl lg:text-8xl text-[#EED5B7] mb-8">
            Field notes from the{" "}
            <span className="font-script normal-case text-[#B89261] text-[1.15em]">workshop</span>.
          </h1>
          <p className="text-[#C6C4C4] text-lg md:text-xl max-w-2xl leading-relaxed">
            Long-form writing on craft, process, post-production and the business of cinematic storytelling.
          </p>
        </motion.div>

        {/* Featured article */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease }}
          data-testid="article-featured"
          className="mb-20 md:mb-28 border-b border-[#EED5B7]/10 pb-16 md:pb-20"
        >
          <Link to={`/articles/${featured.id}`} className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 group">
            <div className="lg:col-span-7 relative overflow-hidden aspect-[16/10] border border-[#EED5B7]/10">
              <img
                src={MEDIA[featured.thumb]}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase text-[#EED5B7]/90 flex items-center gap-2">
                <span className="text-[#B89261]">●</span> Featured
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4 text-[10px] tracking-[0.3em] uppercase text-[#C6C4C4]/70">
                <span className="text-[#B89261]">{featured.category}</span>
                <span>·</span>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
              <h2 className="font-display uppercase tracking-[-0.02em] text-3xl md:text-5xl lg:text-6xl text-[#EED5B7] mb-6 leading-[0.95] group-hover:text-[#B89261] transition-colors duration-500">
                {featured.title}
              </h2>
              <p className="text-[#C6C4C4] text-base md:text-lg leading-relaxed mb-8">
                {featured.excerpt}
              </p>
              <span className="link-underline inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#B89261] self-start">
                Read the article →
              </span>
            </div>
          </Link>
        </motion.article>

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {rest.map((a, i) => (
            <motion.article
              key={a.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease, delay: i * 0.08 }}
              data-testid={`article-card-${a.id}`}
              className="group"
            >
              <Link to={`/articles/${a.id}`} className="block">
                <div className="relative overflow-hidden aspect-[4/5] mb-5 border border-[#EED5B7]/10">
                  <img
                    src={MEDIA[a.thumb]}
                    alt={a.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    style={{ filter: "saturate(0.75) brightness(0.85)" }}
                  />
                  <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase text-[#EED5B7]/90">
                    {a.category}
                  </div>
                </div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#C6C4C4]/70 mb-3 flex items-center gap-3">
                  <span>{a.date}</span>
                  <span>·</span>
                  <span>{a.readTime}</span>
                </div>
                <h3 className="font-display uppercase tracking-[-0.02em] text-2xl md:text-3xl text-[#EED5B7] mb-3 leading-tight group-hover:text-[#B89261] transition-colors duration-500">
                  {a.title}
                </h3>
                <p className="text-[#C6C4C4]/80 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
                  {a.excerpt}
                </p>
                <span className="link-underline text-[10px] tracking-[0.3em] uppercase text-[#B89261]">
                  Read article →
                </span>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Newsletter strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="mt-24 border-t border-b border-[#EED5B7]/10 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
        >
          <div className="md:col-span-7">
            <div className="section-tag mb-4">Subscribe — Workshop Dispatches</div>
            <h3 className="font-display uppercase tracking-[-0.02em] text-3xl md:text-4xl text-[#EED5B7]">
              Field notes,{" "}
              <span className="font-script normal-case text-[#B89261] text-[1.15em]">monthly</span>.
            </h3>
          </div>
          <div className="md:col-span-5">
            <Link
              to="/contact"
              className="cta-btn inline-flex items-center gap-4 px-8 py-5 text-[#EED5B7] text-xs tracking-[0.3em] uppercase"
            >
              <span>Get in touch</span>
              <span>→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
