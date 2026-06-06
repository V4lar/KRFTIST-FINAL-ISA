import { motion } from "framer-motion";

const PROCESS_IMG =
  "https://static.prod-images.emergentagent.com/jobs/7cb1d837-dd21-4e5b-9a52-5db92968abdc/images/a052e242184c250406bd103b724eed1ccd3c5412e6846b548cbe3940c88ee802.png";

const steps = [
  { n: "01", title: "Strategy",   desc: "Audience, positioning, narrative framework, and the visual codes that hold it together." },
  { n: "02", title: "Production", desc: "Pre-production, casting, location, crew, and the shoot itself — owned by a small senior team." },
  { n: "03", title: "Motion",     desc: "Edit, color, sound, and motion design — built in dialogue with the strategy, not after it." },
  { n: "04", title: "Delivery",   desc: "Master files, social cutdowns, and platform-native versions ready to ship the same week." },
];

const ease = [0.16, 1, 0.3, 1];

export default function Process() {
  return (
    <section
      id="process"
      data-testid="process-section"
      className="relative bg-[#0A1418] py-32 md:py-48 border-t border-[#EED5B7]/8"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <div className="section-tag mb-8">The Process</div>
            <h2
              data-testid="process-headline"
              className="font-display uppercase tracking-[-0.03em] leading-[0.92] text-5xl md:text-6xl text-[#EED5B7] mb-10"
            >
              From{" "}
              <span className="font-script normal-case text-[#B89261] text-[1.15em]">
                idea
              </span>{" "}
              to final cut.
            </h2>
            <div className="relative aspect-[4/5] overflow-hidden hidden lg:block border border-[#EED5B7]/10">
              <img
                src={PROCESS_IMG}
                alt="Camera dolly on set"
                className="w-full h-full object-cover"
                style={{ filter: "saturate(0.75) brightness(0.85)" }}
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="border-t border-[#EED5B7]/10">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease, delay: i * 0.08 }}
                data-testid={`process-step-${i}`}
                className="process-row grid grid-cols-12 gap-6 py-12 md:py-16 items-start"
              >
                <div className="col-span-12 md:col-span-3 flex items-baseline gap-4">
                  <span className="process-num font-display text-7xl md:text-8xl text-[#EED5B7]/12 leading-none">
                    {step.n}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h3 className="font-display uppercase text-3xl md:text-5xl tracking-[-0.02em] text-[#EED5B7] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[#C6C4C4] text-base md:text-lg max-w-xl leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
