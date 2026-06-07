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
      // التعديل هنا: إضافة الهيدرز عشان Formspree تقبل الـ JSON
      await axios.post("https://formspree.io/f/xvznkbza", {
        name: form.name,
        email: form.email,
        project_type: form.project_type,
        message: form.message,
        services: services.join(", "),
        _subject: "New Project Inquiry from Krftist"
      }, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
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
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#C6C4C4]/80 mb-3">Email</div>
                <a href="mailto:info@krftist.com" className="font-display text-2xl md:text-3xl text-[#EED5B7] hover:text-[#B89261] transition-colors break-all">info@krftist.com</a>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#C6C4C4]/80 mb-3">Phone</div>
                <a href="tel:+966508417473" className="font-display text-2xl md:text-3xl text-[#EED5B7] hover:text-[#B89261] transition-colors">+966 50 841 7473</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
