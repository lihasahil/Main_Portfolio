import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons/BrandIcons";

export default function Footer() {
  return (
    <section className="border-t border-b border-border text-secondary text-sm py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Sahil Shrestha. Built with ❤️.</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/lihasahil"
            target="_blank"
            rel="noreferrer"
            className="text-xl  hover:text-[#a1a1aa] transition"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/sahil-shrestha-b46887319/"
            target="_blank"
            rel="noreferrer"
            className="text-xl hover:text-[#a1a1aa] transition"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="https://www.instagram.com/sahil.shresthaa/"
            className="text-xl transition hover:text-[#a1a1aa]"
          >
            <InstagramIcon size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
