import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MEDIA } from "@/data/krftist";

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden flex items-end"
    >
      <div className="absolute inset-0">
        <motion.img
          src={MEDIA.hero}
          alt="Cinematic minimal landscape"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Top meta — Est & Locations */}
      <div className="absolute top-32 left-6 md:left-12 right-6 md:right-12 flex justify-end items-start text-xs tracking-[0.3em] uppercase text-[#EED5B7]/70">
       
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease }}
          className="text-right hidden sm:block"
        >
          <div className="text-[#B89261] mb-2">N°001 / Reel</div>
          <div className="text-[#C6C4C4]/70 flex flex-col items-end gap-1 leading-tight" data-testid="hero-locations">
            <span>Egypt</span>
            <span>Saudi Arabia</span>
            <span>Turkey</span>
            <span>Qatar</span>
            <span>Worldwide</span>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 pb-20 md:pb-28">
        {/* Crafting Visual Stories — now sits as headline overline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="section-tag mb-8"
          data-testid="hero-tagline"
        >
          Crafting Visual Stories
        </motion.div>

        <h1
          data-testid="hero-headline"
          aria-label="We Know How It's Made"
          className="font-display uppercase tracking-[-0.04em] leading-[0.85] text-[14vw] md:text-[11vw] lg:text-[9.5vw] text-[#EED5B7] mb-10"
        >
          <motion.span
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease }}
            className="block"
          >
            We Know
          </motion.span>
          <motion.span
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease }}
            className="block"
          >
            How It’s{" "}
            <span className="font-script normal-case tracking-normal text-[#B89261] text-[1.15em]">
              Made.
            </span>
          </motion.span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.9, ease }}
            data-testid="hero-subheadline"
            className="md:col-span-7 text-lg md:text-xl leading-relaxed text-[#EED5B7]/80 max-w-2xl"
          >
            We approach modern visual production with the raw obsession of a master
            artisan. We don’t just assemble frames; we forge cinematic worlds through
            meticulous strategy, production, and motion for brands that demand distinction.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 1.1, ease }}
            className="md:col-span-5 flex items-center md:justify-end gap-8"
          >
            <Link
              to="/work"
              data-testid="hero-cta"
              className="cta-btn inline-flex items-center gap-4 px-8 py-5 text-[#EED5B7] text-xs tracking-[0.3em] uppercase"
            >
              <span>View Our Work</span>
              <span className="inline-block">→</span>
            </Link>
            <Link
              to="/articles"
              data-testid="hero-articles-cta"
              className="link-underline hidden sm:inline-block text-xs tracking-[0.3em] uppercase text-[#B89261]"
            >
              Articles & News
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 right-6 md:right-12 text-[10px] tracking-[0.3em] uppercase text-[#C6C4C4]/70 flex items-center gap-3"
      >
        <span className="vtext">Scroll</span>
        <motion.div
          animate={{ height: ["20px", "60px", "20px"] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-[#B89261]"
        />
      </motion.div>
    </section>
  );
}
