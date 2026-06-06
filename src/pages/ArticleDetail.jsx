import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ARTICLES, MEDIA } from "@/data/krftist";

const ease = [0.16, 1, 0.3, 1];

export default function ArticleDetail() {
  const { id } = useParams();
  const article = ARTICLES.find((a) => a.id === id);
  if (!article) return <Navigate to="/articles" replace />;

  const related = ARTICLES.filter((a) => a.id !== id).slice(0, 3);

  return (
    <main data-testid={`article-detail-${article.id}`} className="relative bg-[#0A1418] pt-40 pb-32 md:pb-48">
      {/* Hero */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
        >
          <Link to="/articles" className="link-underline text-[10px] tracking-[0.3em] uppercase text-[#B89261] mb-10 inline-block">
            ← All Articles
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6 text-[10px] tracking-[0.3em] uppercase text-[#C6C4C4]/70">
            <span className="text-[#B89261]">{article.category}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="font-display uppercase tracking-[-0.03em] leading-[0.9] text-4xl md:text-5xl lg:text-6xl text-[#EED5B7] mb-10">
            {article.title}
          </h1>

          <p className="font-script text-2xl md:text-3xl text-[#B89261] leading-tight max-w-3xl">
            {article.excerpt}
          </p>
        </motion.div>
      </div>

      {/* Cover */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease }}
        className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 md:mb-24"
      >
        <div className="relative aspect-[16/9] overflow-hidden border border-[#EED5B7]/10">
          <img
            src={MEDIA[article.thumb]}
            alt={article.title}
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.85) brightness(0.9)" }}
          />
        </div>
      </motion.div>

      {/* Body */}
      <article className="max-w-[820px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="space-y-7 text-[#EED5B7]/90 text-lg md:text-xl leading-[1.8] font-body"
          data-testid="article-body"
        >
          {article.body?.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>

        {/* Author / share strip */}
        <div className="mt-20 pt-10 border-t border-[#EED5B7]/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#B89261] mb-2">Editorial Desk</div>
            <p className="font-script text-2xl text-[#EED5B7]">KRFTIST Studio — Workshop Dispatches</p>
          </div>
          <Link
            to="/contact"
            className="cta-btn inline-flex items-center gap-4 px-7 py-4 text-[#EED5B7] text-xs tracking-[0.3em] uppercase self-start sm:self-auto"
          >
            <span>Reply to the Studio</span>
            <span>→</span>
          </Link>
        </div>
      </article>

      {/* Related */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mt-24 md:mt-32">
        <div className="section-tag mb-10">Continue Reading</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {related.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease, delay: i * 0.08 }}
            >
              <Link to={`/articles/${a.id}`} className="group block" data-testid={`related-${a.id}`}>
                <div className="relative overflow-hidden aspect-[4/5] mb-5 border border-[#EED5B7]/10">
                  <img
                    src={MEDIA[a.thumb]}
                    alt={a.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    style={{ filter: "saturate(0.75) brightness(0.85)" }}
                  />
                  <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase text-[#EED5B7]/90">{a.category}</div>
                </div>
                <h3 className="font-display uppercase text-2xl text-[#EED5B7] group-hover:text-[#B89261] transition-colors leading-tight">
                  {a.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
