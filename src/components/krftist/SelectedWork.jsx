import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MEDIA, WORK_ITEMS } from "@/data/krftist";

const ease = [0.16, 1, 0.3, 1];

// Featured 4 selected projects on the home page
const featured = [
  { ...WORK_ITEMS[0], span: "lg:col-span-8", aspect: "aspect-[16/10]" },
  { ...WORK_ITEMS[1], span: "lg:col-span-4", aspect: "aspect-[3/4]" },
  { ...WORK_ITEMS[2], span: "lg:col-span-5", aspect: "aspect-[4/5]" },
  { ...WORK_ITEMS[3], span: "lg:col-span-7", aspect: "aspect-[16/11]" },
];

export default function SelectedWork() {
  return (
    <section
      id="work"
      data-testid="work-section"
      className="relative bg-[#0A1418] py-32 md:py-48 border-t border-[#EED5B7]/8"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-8">
            <div className="section-tag mb-8">Selected Masterpieces</div>
            <h2
              data-testid="work-headline"
              className="font-display uppercase tracking-[-0.03em] leading-[0.92] text-5xl md:text-6xl lg:text-7xl text-[#EED5B7]"
            >
              Selected{" "}
              <span className="font-script normal-case text-[#B89261] text-[1.15em]">
                masterpieces
              </span>
              .
            </h2>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link
              to="/reel"
              data-testid="work-cta"
              className="link-underline text-xs tracking-[0.3em] uppercase text-[#B89261]"
            >
              Request Full Reel →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              data-testid={`work-card-${i}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, ease, delay: i * 0.08 }}
              className={`work-card group block ${p.span} col-span-1`}
            >
              <Link to="/work" className="block">
                <div className={`relative overflow-hidden ${p.aspect} bg-[#0F1F25] border border-[#EED5B7]/8`}>
                  <img
                    src={MEDIA[p.thumb]}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase text-[#EED5B7]/85">
                    N°00{i + 1}
                  </div>
                  <div className="absolute bottom-4 right-4 text-[10px] tracking-[0.3em] uppercase text-[#EED5B7]/85">
                    {p.year}
                  </div>
                </div>
                <div className="flex items-end justify-between pt-5">
                  <div>
                    <h3 className="font-display uppercase text-2xl md:text-3xl tracking-tight text-[#EED5B7] group-hover:text-[#B89261] transition-colors duration-500">
                      {p.title}
                    </h3>
                    <div className="text-xs tracking-[0.25em] uppercase text-[#C6C4C4]/80 mt-2">
                      {p.category}
                    </div>
                  </div>
                  <div className="text-[#B89261] text-xl transition-transform duration-500 group-hover:translate-x-2">
                    ↗
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            to="/work"
            data-testid="work-view-all"
            className="cta-btn inline-flex items-center gap-4 px-8 py-5 text-[#EED5B7] text-xs tracking-[0.3em] uppercase"
          >
            <span>View Full Portfolio</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
