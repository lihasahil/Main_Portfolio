"use client";

import { useState, ChangeEvent, FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const inputClass =
  "w-full px-3 h-9 text-sm rounded-md border border-border bg-bg-card text-text placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-border transition-all disabled:opacity-50";

export default function ContactFormPopup({ isOpen, onClose }: ContactFormPopupProps) {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);
    setError("");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setError("Something went wrong. Please email me directly.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => { setSent(false); setError(""); }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-1000 flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}
      onClick={handleClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 10 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="relative w-full max-w-[460px] rounded-2xl border border-border bg-bg shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="btn-icon absolute top-4 right-4 z-10"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center justify-center text-center py-16 px-8 gap-3"
            >
              <div className="w-11 h-11 rounded-full border border-border bg-bg-card flex items-center justify-center mb-1">
                <svg className="w-5 h-5 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-text">Message sent</h3>
              <p className="text-xs text-secondary leading-relaxed max-w-60">
                Thanks for reaching out! I'll get back to you within 24 hours.
              </p>
              <button onClick={handleClose} className="btn-ghost mt-3 h-8 px-4 text-xs">
                Close
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {/* Header */}
              <div className="px-6 pt-6 pb-5 border-b border-border">
                <p className="text-[10px] font-medium text-secondary uppercase tracking-widest mb-1.5">
                  Contact
                </p>
                <h2 className="text-lg font-semibold tracking-tight text-text">
                  Let's work together
                </h2>
                <p className="text-xs text-secondary mt-1 leading-relaxed">
                  Fill out the form below or reach out directly — I respond within 24 hours.
                </p>
              </div>

              {/* Form */}
              <form ref={formRef} onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Name + Email side by side */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-secondary mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      disabled={loading}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-secondary mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      required
                      disabled={loading}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-secondary mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    required
                    disabled={loading}
                    className="w-full px-3 py-2.5 text-sm rounded-md border border-border bg-bg-card text-text placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-border transition-all resize-none leading-relaxed disabled:opacity-50"
                  />
                </div>

                {/* Error */}
                {error && (
                  <p className="text-xs" style={{ color: "#ef4444" }}>{error}</p>
                )}

                {/* Footer row: social icons left, send button right */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <a
                      href="mailto:hemantproject121@gmail.com"
                      className="btn-icon"
                      title="Send email directly"
                    >
                      <Mail size={15} />
                    </a>
                    <a
                      href="https://github.com/lihasahil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-icon"
                      title="GitHub"
                    >
                      <GithubIcon size={14} />
                    </a>
                    <a
                      href="https://linkedin.com/in/sahil-shrestha-liha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-icon"
                      title="LinkedIn"
                    >
                      <LinkedinIcon size={14} />
                    </a>
                  </div>

                  <button type="submit" disabled={loading} className="btn-primary px-5 gap-2">
                    {loading ? (
                      <>
                        <svg className="animate-spin h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending
                      </>
                    ) : (
                      "Send message →"
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
