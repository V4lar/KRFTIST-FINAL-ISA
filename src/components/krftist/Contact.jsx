import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { SERVICE_CHOICES } from "@/data/krftist";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ease = [0.16, 1, 0.3, 1];

export default function Contact({ heading = "Let’s build something" }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project_type: "",
    message: "",
  });
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const toggleService = (s) =>
    setServices((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please complete name, email, and message.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, { ...form, services });
      toast.success("Brief received. We’ll get back within 48h.");
      setForm({ name: "", email: "", project_type: "", message: "" });
      setServices([]);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Email us at info@krftist.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative bg-[#0A1418] py-32 md:py-48 border-t border-[#EED5B7]/8"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end"
        >
          <div className="lg:col-span-9">
            <div className="section-tag mb-8">Let’s talk</div>
            <h2
              data-testid="contact-headline"
              className="font-display uppercase tracking-[-0.03em] leading-[0.88] text-5xl md:text-7xl lg:text-8xl text-[#EED5B7]"
            >
              {heading}{" "}
              <span className="font-script normal-case text-[#B89261] text-[1.15em]">
                remarkable
              </span>
              .
            </h2>
          </div>
          <div className="lg:col-span-3 flex lg:justify-end">
            <div className="text-[#B89261] text-[10px] tracking-[0.3em] uppercase flex items-start gap-3 max-w-[260px] text-right">
              <span className="w-2 h-2 rounded-full bg-[#B89261] animate-pulse mt-1 shrink-0" />
              Booking Projects for 2026 — Worldwide Commissions
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease, delay: 0.1 }}
            onSubmit={onSubmit}
            data-testid="contact-form"
            className="lg:col-span-7 space-y-2"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-[#C6C4C4]/80 mb-3">
                  Your name
                </label>
                <input
                  data-testid="contact-input-name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Casey Anderson"
                  className="field-input"
                  autoComplete="name"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-[#C6C4C4]/80 mb-3">
                  Email
                </label>
                <input
                  data-testid="contact-input-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@studio.com"
                  className="field-input"
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Multi-choice service chips */}
            <div className="pt-10">
              <label className="block text-[10px] tracking-[0.3em] uppercase text-[#C6C4C4]/80 mb-4">
                Which services do you need? <span className="text-[#B89261]">(select all that apply)</span>
              </label>
              <div className="flex flex-wrap gap-3" data-testid="service-chips">
                {SERVICE_CHOICES.map((s) => {
                  const active = services.includes(s);
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleService(s)}
                      data-testid={`service-chip-${s.toLowerCase().replace(/\s|&/g, '-')}`}
                      className={`px-4 py-2.5 border text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                        active
                          ? "bg-[#B89261] border-[#B89261] text-[#0A1418]"
                          : "border-[#EED5B7]/20 text-[#EED5B7]/80 hover:border-[#B89261] hover:text-[#B89261]"
                      }`}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-10">
              <label className="block text-[10px] tracking-[0.3em] uppercase text-[#C6C4C4]/80 mb-3">
                Project title (optional)
              </label>
              <input
                data-testid="contact-input-projecttype"
                name="project_type"
                value={form.project_type}
                onChange={onChange}
                placeholder="e.g. Brand film, identity refresh, podcast series…"
                className="field-input"
              />
            </div>

            <div className="pt-8">
              <label className="block text-[10px] tracking-[0.3em] uppercase text-[#C6C4C4]/80 mb-3">
                The Brief
              </label>
              <textarea
                data-testid="contact-input-message"
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Tell us about the project, audience, timeline…"
                rows={4}
                className="field-input resize-none"
              />
            </div>

            <div className="pt-12 flex items-center justify-between">
              <button
                type="submit"
                disabled={loading}
                data-testid="contact-submit"
                className="cta-btn inline-flex items-center gap-4 px-8 py-5 text-[#EED5B7] text-xs tracking-[0.3em] uppercase disabled:opacity-50"
              >
                <span>{loading ? "Sending…" : "Send Brief"}</span>
                <span>→</span>
              </button>
              <span className="text-xs text-[#C6C4C4]/60 tracking-[0.2em] uppercase hidden sm:inline">
                Reply within 48h
              </span>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease, delay: 0.2 }}
            className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-[#EED5B7]/10"
          >
            <div className="space-y-12">
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#C6C4C4]/80 mb-3">
                  Email
                </div>
                <a
                  href="mailto:info@krftist.com"
                  data-testid="contact-email"
                  className="font-display text-2xl md:text-3xl text-[#EED5B7] hover:text-[#B89261] transition-colors break-all"
                >
                  info@krftist.com
                </a>
              </div>

              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#C6C4C4]/80 mb-3">
                  Phone
                </div>
                <a
                  href="tel:+966508417473"
                  data-testid="contact-phone"
                  className="font-display text-2xl md:text-3xl text-[#EED5B7] hover:text-[#B89261] transition-colors"
                >
                  +966 50 841 7473
                </a>
              </div>

              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#C6C4C4]/80 mb-4">
                  Social
                </div>
                <div className="flex items-center gap-3" data-testid="contact-socials">
                  <a
                    href="https://instagram.com/krftist"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    data-testid="contact-instagram"
                    className="w-14 h-14 border border-[#EED5B7]/15 hover:border-[#B89261] hover:bg-[#B89261] text-[#EED5B7] hover:text-[#0A1418] flex items-center justify-center transition-all duration-500"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
                      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8a4 4 0 0 1 3.37 3.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="https://vimeo.com/user100868538"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Vimeo"
                    data-testid="contact-vimeo"
                    className="w-14 h-14 border border-[#EED5B7]/15 hover:border-[#B89261] hover:bg-[#B89261] text-[#EED5B7] hover:text-[#0A1418] flex items-center justify-center transition-all duration-500"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
                      <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.401 0-2.585-1.294-3.553-3.881L5.322 11.4C4.603 8.815 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.48 4.797z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.behance.net/AHMEDALIPHOTOGRPHY/projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Behance"
                    data-testid="contact-behance"
                    className="w-14 h-14 border border-[#EED5B7]/15 hover:border-[#B89261] hover:bg-[#B89261] text-[#EED5B7] hover:text-[#0A1418] flex items-center justify-center transition-all duration-500"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
                      <path d="M7.799 5.698c.589 0 1.12.051 1.606.156.483.103.895.273 1.241.507.34.235.609.547.797.939.187.387.279.871.279 1.443 0 .619-.141 1.137-.421 1.551-.284.413-.7.751-1.255 1.014.756.214 1.317.6 1.686 1.143.369.549.55 1.205.55 1.977 0 .625-.121 1.162-.36 1.612-.239.45-.572.825-.99 1.108-.408.291-.881.502-1.412.622a6.825 6.825 0 0 1-1.581.187H0V5.698h7.799zM3.522 8.876v3.181h3.491c.488 0 .888-.116 1.196-.345.308-.229.464-.6.464-1.107 0-.282-.052-.514-.146-.694a1.118 1.118 0 0 0-.408-.421 1.587 1.587 0 0 0-.595-.221 4.072 4.072 0 0 0-.711-.062H3.522v-.331zm0 5.929v3.764h3.745c.295 0 .563-.025.819-.094a1.95 1.95 0 0 0 .684-.296 1.483 1.483 0 0 0 .482-.564c.116-.232.176-.526.176-.884 0-.703-.196-1.205-.591-1.511-.395-.302-.92-.452-1.572-.452H3.522v.037zM17.594 13.18c-.18.34-.451.6-.794.793-.348.187-.733.275-1.156.275-.604 0-1.114-.179-1.519-.541-.408-.359-.626-.825-.671-1.4h6.196c.046-.66-.012-1.292-.165-1.886-.158-.595-.405-1.121-.756-1.585a3.802 3.802 0 0 0-1.336-1.095c-.535-.27-1.156-.408-1.873-.408-.638 0-1.227.112-1.755.337a3.984 3.984 0 0 0-1.356.929 4.197 4.197 0 0 0-.877 1.401 4.94 4.94 0 0 0-.315 1.766c0 .664.103 1.27.302 1.815.205.546.491.998.872 1.381.378.378.831.669 1.36.876.529.205 1.122.305 1.774.305.946 0 1.749-.215 2.412-.642.658-.43 1.144-1.139 1.466-2.122h-2.804.001zm-3.93-3.385c.054-.246.146-.479.279-.694.142-.207.317-.378.519-.508.21-.135.444-.229.703-.279.255-.058.51-.087.764-.087.59 0 1.073.156 1.435.461.379.31.611.762.703 1.367h-4.408l.005-.26zm6.736-5.057h-5.144v1.25h5.144V4.738z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-[#EED5B7]/10">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#C6C4C4]/80 mb-3">
                  Coverage
                </div>
                <p className="text-[#EED5B7]/90 font-script text-3xl leading-tight">
                  Egypt — Saudi Arabia<br />
                  Turkey — Qatar — Worldwide
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
