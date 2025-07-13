import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <section className="border-2 border-dotted border-blue-500 text-gray-400 text-sm py-6 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          &copy; {new Date().getFullYear()} Sahil Shrestha. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/lihasahil"
            target="_blank"
            rel="noreferrer"
            className="text-xl hover:text-green-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/lihasahil"
            target="_blank"
            rel="noreferrer"
            className="text-xl hover:text-green-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:you@example.com"
            className="text-xl transition hover:text-green-400"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}
