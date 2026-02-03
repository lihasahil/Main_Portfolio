import { useState, ChangeEvent, FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactFormPopup({
  isOpen,
  onClose,
}: ContactFormPopupProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const { theme } = useContext(ThemeContext);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );
      alert(
        `Thanks for contacting us, ${formData.name}! We'll get back to you soon.`,
      );
      setFormData({ name: "", email: "", message: "" });
      onClose();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Oops! Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-1000 flex items-center justify-center ${
        theme === "dark" ? "bg-black/70" : "bg-black/50"
      }`}
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-md mx-4 rounded-lg shadow-xl overflow-hidden border-t-4 border-emerald-500 ${
          theme === "dark"
            ? "bg-gray-900 text-gray-100"
            : "bg-white text-gray-900"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 transition-colors ${
            theme === "dark"
              ? "text-gray-400 hover:text-white"
              : "text-gray-400 hover:text-gray-600"
          }`}
          aria-label="Close form"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header */}
        <div
          className={`p-6 ${
            theme === "dark"
              ? "bg-linear-to-r from-gray-800 to-gray-900"
              : "bg-linear-to-r from-emerald-50 to-green-50"
          }`}
        >
          <h2 className="text-2xl font-bold text-center text-emerald-500">
            Get In Touch
          </h2>
          <p className="text-center text-sm mt-1 text-emerald-400">
            We'd love to hear from you!
          </p>
        </div>

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="p-6">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
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
              className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition ${
                theme === "dark"
                  ? "bg-gray-800 border border-gray-700 text-white placeholder-gray-400"
                  : "bg-white border border-gray-300 text-gray-900"
              }`}
              disabled={loading}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition ${
                theme === "dark"
                  ? "bg-gray-800 border border-gray-700 text-white placeholder-gray-400"
                  : "bg-white border border-gray-300 text-gray-900"
              }`}
              disabled={loading}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              rows={5}
              required
              className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition ${
                theme === "dark"
                  ? "bg-gray-800 border border-gray-700 text-white placeholder-gray-400"
                  : "bg-white border border-gray-300 text-gray-900"
              }`}
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-emerald-600 cursor-pointer text-white font-medium py-2 px-4 rounded-md transition duration-300 transform focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-emerald-700 hover:scale-[1.01]"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
            {!loading && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
