import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { MEDIA } from "@/data/krftist";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;
const ease = [0.16, 1, 0.3, 1];

export default function ReelPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please provide your name and email.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, {
        name: form.name,
        email: form.email,
        project_type: "Full Reel Request",
        services: ["Full Reel Screening"],
        message: `Company: ${form.company || "-"}\n\n${form.message || "Requesting access to the private reel."}`,
      });
      toast.success("Request received. We’ll send the private link within 24h.");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Email info@krftist.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main data-testid="reel-page" className="relative bg-[#0A1418] pt-32 pb-32 md:pb-48">
      {/* Cinematic hero — the reel placeholder */}
      <section className="relative w-full min-h-[80vh] flex items-end overflow-hidden border-b border-[#EED5B7]/10">
        <div className="absolute inset-0">
          <img
            src={MEDIA.midnight}
            alt="KRFTIST Reel — Private Screening"
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.7) brightness(0.55)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1418] via-[#0A1418]/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 pb-16 md:pb-24 w-full">
          <div className="section-tag mb-8">Private Screening</div>
          <h1 className="font-display uppercase tracking-[-0.03em] leading-[0.88] text-6xl md:text-8xl lg:text-9xl text-[#EED5B7] mb-8">
            The Full{" "}
            <span className="font-script normal-case text-[#B89261] text-[1.15em]">Reel</span>.
          </h1>
          <p className="text-[#EED5B7]/85 text-lg md:text-xl max-w-2xl leading-relaxed">
            A 7-minute curated cut of our most ambitious work — including unreleased TV shows,
            documentary footage, and brand films currently under embargo. Available by request.
          </p>
        </div>

        {/* Centered play button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease }}
            className="w-24 h-24 md:w-32 md:h-32 border border-[#EED5B7]/40 rounded-full flex items-center justify-center backdrop-blur-md bg-[#0A1418]/30"
          >
            <span className="text-[#EED5B7] text-3xl md:text-4xl ml-1.5">▶</span>
          </motion.div>
        </div>

        <div className="absolute top-32 right-6 md:right-12 text-[10px] tracking-[0.3em] uppercase text-[#B89261] flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#B89261] animate-pulse" />
          NDA · Password-Protected
        </div>
      </section>

      {/* Request form */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-12 pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease }}
          className="mb-12"
        >
          <div className="section-tag mb-6">Request Access</div>
          <h2 className="font-display uppercase tracking-[-0.02em] text-4xl md:text-6xl text-[#EED5B7] mb-6 leading-[0.95]">
            Tell us who you are.
          </h2>
          <p className="text-[#C6C4C4] text-lg leading-relaxed max-w-2xl">
            We share the full reel selectively. Drop your details and we’ll send a private link
            within 24 hours.
          </p>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          data-testid="reel-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease, delay: 0.1 }}
          className="space-y-2"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] tracking-[0.3em] uppercase text-[#C6C4C4]/80 mb-3">
                Your name
              </label>
              <input
                data-testid="reel-input-name"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Casey Anderson"
                className="field-input"
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.3em] uppercase text-[#C6C4C4]/80 mb-3">
                Email
              </label>
              <input
                data-testid="reel-input-email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@studio.com"
                className="field-input"
              />
            </div>
          </div>

          <div className="pt-8">
            <label className="block text-[10px] tracking-[0.3em] uppercase text-[#C6C4C4]/80 mb-3">
              Company / Brand
            </label>
            <input
              data-testid="reel-input-company"
              name="company"
              value={form.company}
              onChange={onChange}
              placeholder="Brand or production company"
              className="field-input"
            />
          </div>

          <div className="pt-8">
            <label className="block text-[10px] tracking-[0.3em] uppercase text-[#C6C4C4]/80 mb-3">
              What are you screening for? (optional)
            </label>
            <textarea
              data-testid="reel-input-message"
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Project context, timing, region…"
              rows={3}
              className="field-input resize-none"
            />
          </div>

          <div className="pt-12">
            <button
              type="submit"
              disabled={loading}
              data-testid="reel-submit"
              className="cta-btn inline-flex items-center gap-4 px-8 py-5 text-[#EED5B7] text-xs tracking-[0.3em] uppercase disabled:opacity-50"
            >
              <span>{loading ? "Sending…" : "Request Private Link"}</span>
              <span>→</span>
            </button>
          </div>
        </motion.form>
      </section>
    </main>
  );
}
